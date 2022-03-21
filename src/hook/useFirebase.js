import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
    updateProfile,
    sendEmailVerification,
} from "firebase/auth";

import { useEffect, useState } from "react";
import initializeFirebaseApp from "../Firebase/firebase.init";

import Swal from "sweetalert2";

const alertRegister = () => {
    Swal.fire("Success!", "Registered Successfully!", "success");
};

const alertLogin = () => {
    Swal.fire("Success!", "Logged in Successfully!", "success");
};

initializeFirebaseApp();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();

    const handleRegister = (name, email, password, navigate) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                setUser(result.user);
                setError("");
                updateInfo(name);
                alertRegister();
                verifyEmail();
                setUser({ displayName: name, email: email });
                navigate("/");
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    const updateInfo = (name) => {
        updateProfile(auth.currentUser, {
            displayName: name,
        }).then(() => {
            // Profile updated!
        });
    };

    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser).then(() => {
            Swal.fire(
                "Alert!",
                "Email verification sent! Verify your email please!",
                "warning"
            );
        });
    };

    const handleLoginUsingEmailPassword = (
        email,
        password,
        location,
        navigate
    ) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                setUser(result.user);
                setError("");
                alertLogin();
                navigate(location?.state?.from || "/");
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    const googleProvider = new GoogleAuthProvider();
    const handleGoogleSignIn = (location, navigate) => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                // console.log(result.user);
                setUser(result.user);
                setError("");
                alertLogin();
                navigate(location?.state?.from || "/");
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                setError("");
            } else {
                setUser({});
            }
            setIsLoading(false);
        });
    }, [auth]);

    const handleSignOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {
                setUser({});
                setError("");
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    return {
        user,
        error,
        isLoading,
        setError,
        handleRegister,
        updateInfo,
        handleLoginUsingEmailPassword,
        handleGoogleSignIn,
        handleSignOut,
    };
};

export default useFirebase;

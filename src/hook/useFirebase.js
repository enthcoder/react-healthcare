import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
    updateProfile,
} from "firebase/auth";

import { useEffect, useState } from "react";
import initializeFirebaseApp from "../Firebase/firebase.init";

import Swal from "sweetalert2";
// import withReactContent from "sweetalert2-react-content";

// const MySwal = withReactContent(Swal);

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

    const handleRegister = (name, email, password) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                setUser(result.user);
                setError("");
                updateInfo(name);
                handleSignOut();
                alertRegister();
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

    const handleLoginUsingEmailPassword = (email, password) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                setUser(result.user);
                setError("");
                alertLogin();
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    const googleProvider = new GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                setUser(result.user);
                setError("");
                alertLogin();
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
        setError,
        isLoading,
        handleRegister,
        updateInfo,
        handleLoginUsingEmailPassword,
        handleGoogleSignIn,
        handleSignOut,
    };
};

export default useFirebase;

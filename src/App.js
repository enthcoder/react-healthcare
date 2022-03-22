import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About/About";
import CovidPortal from "./components/CovidPortal/CovidPortal";
import DoctorsPortal from "./components/DoctorsPortal/DoctorsPortal";
import BloodDonorPortal from "./components/BloodDonorPortal/BloodDonorPortal";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import NotFound from "./components/NotFound/NotFound";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Register from "./components/Register/Register";
import ServiceDetails from "./components/ServiceDetails/ServiceDetails";
import AuthProvider from "./context/AuthProvider";

function App() {
    return (
        <AuthProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<Home></Home>} />
                    <Route path="/home" element={<Home></Home>} />
                    <Route
                        path="/details/:id"
                        element={
                            <PrivateRoute>
                                <ServiceDetails></ServiceDetails>
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/covid_portal"
                        element={
                            <PrivateRoute>
                                <CovidPortal></CovidPortal>
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/doctors"
                        element={
                            <PrivateRoute>
                                <DoctorsPortal></DoctorsPortal>
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/bd_portal"
                        element={
                            <PrivateRoute>
                                <BloodDonorPortal></BloodDonorPortal>
                            </PrivateRoute>
                        }
                    />
                    <Route path="/about" element={<About></About>} />
                    <Route exact path="/login" element={<Login></Login>} />

                    <Route path="/register" element={<Register></Register>} />
                    <Route path="*" element={<NotFound></NotFound>} />
                </Routes>
                <Footer></Footer>
            </Router>
        </AuthProvider>
    );
}

export default App;

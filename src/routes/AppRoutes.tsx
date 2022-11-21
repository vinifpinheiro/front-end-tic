import { BrowserRouter as Router , Routes , Route, Navigate} from "react-router-dom"
import { LoginPage } from "../pages/LoginPage"
import '../styles/reset.css'
import "../styles/global.scss"
import { MenuPage } from "../pages/Private/MenuPage"
import { RegisterPage } from "../pages/Private/RegisterPage"
import { RegisterProductPage } from "../pages/Private/RegisterPage/RegisterProductPage"
import { RegisterDemandPage } from "../pages/Private/RegisterPage/RegisterDemandPage"
import { RegisterMPPage } from "../pages/Private/RegisterPage/RegisterMPPage"
import { ConsultPage } from "../pages/Private/ConsultPage"
import { ConsultProductPage } from "../pages/Private/ConsultPage/ConsultProduct"
import { ConsultDemandPage } from "../pages/Private/ConsultPage/ConsultDemand"
import { ConsultMpPage } from "../pages/Private/ConsultPage/ConsultMp"
import { useContext } from "react"
import { AuthContext, AuthProvider } from "../contexts/auth"
import { RegisterSucessPage } from "../pages/Private/RegisterPage/RegisterSucessPage"

export const AppRoutes = () => {
    const Private = ({ children }: { children: any }) => {
        const { authenticated, loading } = useContext(AuthContext);
    
        if (loading) {
          return <div className="loading">Carregando...</div>;
        }
    
        if (!authenticated) {
          return <Navigate to="/login" />;
        }
        return children;
      };

    return(
        <Router>
            <AuthProvider>
                <Routes>
                    <Route 
                        path="/login"
                        element={<LoginPage/>}
                    />
                    <Route
                        path="/"
                        element={
                            <Private>
                                {" "}
                                <MenuPage/>{" "}
                            </Private>
                        }
                    />
                    <Route
                        path="/register"
                        element={
                            <Private>
                                {" "}
                                <RegisterPage/>{" "}
                            </Private>
                        }
                    />
                    <Route
                        path="/register/product"
                        element={
                            <Private>
                                {" "}
                                <RegisterProductPage/>{" "}
                            </Private>
                        }
                    />
                    <Route
                        path="/register/demand"
                        element={
                            <Private>
                                {" "}
                                <RegisterDemandPage/>{" "}
                            </Private>
                        }
                    />
                    <Route
                        path="/register/mp"
                        element={
                            <Private>
                                {" "}
                                <RegisterMPPage/>{" "}
                            </Private>
                        }
                    />
                    <Route
                        path="/register/sucess"
                        element={
                            <Private>
                                {" "}
                                <RegisterSucessPage/>{" "}
                            </Private>
                        }
                    />
                    <Route
                        path="/consult"
                        element={
                            <Private>
                                {" "}
                                <ConsultPage/>{" "}
                            </Private>
                        }
                    />
                    <Route
                        path="/consult/product"
                        element={
                            <Private>
                                {" "}
                                <ConsultProductPage/>{" "}
                            </Private>
                        }
                    />
                    <Route
                        path="/consult/demand"
                        element={
                            <Private>
                                {" "}
                                <ConsultDemandPage/>{" "}
                            </Private>
                        }
                    />
                    <Route
                        path="/consult/mp"
                        element={
                            <Private>
                                {" "}
                                <ConsultMpPage/>{" "}
                            </Private>
                        }
                    />
                </Routes>
            </AuthProvider>
        </Router>
    )
}

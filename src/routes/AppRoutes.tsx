import { BrowserRouter as Router , Routes , Route} from "react-router-dom"
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

export const AppRoutes = () => {
    // const Private = ({ children }: { children: any }) => {
    //     const { authenticated, loading } = useContext(AuthContext);
    
    //     if (loading) {
    //       return <div className="loading">Carregando...</div>;
    //     }
    
    //     if (!authenticated) {
    //       return <Navigate to="/login" />;
    //     }
    //     return children;
    //   };

    return(
        <Router>
            
            <Routes>
                <Route 
                    path="/login"
                    element={<LoginPage/>}
                />
                <Route
                    path="/"
                    element={<MenuPage/>}
                />
                <Route
                    path="/register"
                    element={<RegisterPage/>}
                />
                <Route
                    path="/register/product"
                    element={<RegisterProductPage/>}
                />
                <Route
                    path="/register/demand"
                    element={<RegisterDemandPage/>}
                />
                <Route
                    path="/register/mp"
                    element={<RegisterMPPage/>}
                />
                <Route
                    path="/consult"
                    element={<ConsultPage/>}
                />
                <Route
                    path="/consult/product"
                    element={<ConsultProductPage/>}
                />
                <Route
                    path="/consult/demand"
                    element={<ConsultDemandPage/>}
                />
                <Route
                    path="/consult/mp"
                    element={<ConsultMpPage/>}
                />
            </Routes>
        </Router>
    )
}

import { BrowserRouter as Router , Routes , Route} from "react-router-dom"
import { LoginPage } from "../pages/LoginPage"
import '../styles/reset.css'
import "../styles/global.scss"
import { MenuPage } from "../pages/Private/MenuPage"
import { RegisterPage } from "../pages/Private/RegisterPage"
import { RegisterProductPage } from "../pages/Private/RegisterPage/RegisterProductPage"


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
            </Routes>
            
        </Router>
    )
}

import { BrowserRouter as Router , Routes , Route, Navigate } from "react-router-dom"
import { LoginPage } from "../pages/LoginPage"
import '../styles/reset.css'
import "../styles/global.scss"
import { MenuPage } from "../pages/Private/MenuPage"
import { useContext } from "react"
import { Header } from "../components/Header"

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
            </Routes>
            <Routes>
                
            </Routes>
        </Router>
    )
}

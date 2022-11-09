import { BrowserRouter as Router , Routes , Route } from "react-router-dom"
import { LoginPage } from "../pages/LoginPage"
import '../styles/reset.css'
import "../styles/global.scss"
import { MenuPage } from "../pages/Private/MenuPage"

export const AppRoutes = () => {
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
        </Router>
    )
}

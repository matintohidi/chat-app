import React from "react";
// react router
import { useRoutes } from "react-router-dom";
// routes
import AppRoutes from "./routes";
// hooks
import { useMatch } from "./hooks";
// components
import { NavbarLanding , Footer } from "./components";

const App : React.FC = () => {
    const element = useRoutes(AppRoutes);
    const match = useMatch();

    return (
        <div>
            { match ? null : <NavbarLanding /> }
            { element }
            { match ? null : <Footer /> }
        </div>
    )
}

export default App;
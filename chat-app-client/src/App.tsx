import React from "react";
// react router
import { useRoutes } from "react-router-dom";
// routes
import AppRoutes from "./routes";
// hooks
import { useMatch } from "./hooks";
// components
import { Header , Footer } from "./components";

const App : React.FC = () => {
    const element = useRoutes(AppRoutes);
    const match = useMatch();

    return (
        <>
            { match ? null : <Header /> }
            { element }
            { match ? null : <Footer /> }
        </>
    )
}

export default App;
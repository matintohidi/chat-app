// react router
import type { RouteObject } from "react-router-dom";
// pages
import { Landing , Login , Register , Home , SetProfile } from "../pages";
// components
import { ProtectedRoute } from "../components";

const AppRoutes : RouteObject[] = [
    {
        path: "/",
        element: <Landing />
    },
    {
        path: "/login",
        element: <ProtectedRoute>
            <Login />
        </ProtectedRoute>
    },
    {
        path: "/register",
        element: <ProtectedRoute>
            <Register />
        </ProtectedRoute>
    },
    {
        path: "/setprofile",
        element: <ProtectedRoute>
            <SetProfile />
        </ProtectedRoute>
    },
    {
        path: "/chat",
        element: <ProtectedRoute>
            <Home />
        </ProtectedRoute>
    }
]

export const hiddenLayout = [
    "/login",
    "/register",
    "/chat",
    "/setprofile"
]

export default AppRoutes;
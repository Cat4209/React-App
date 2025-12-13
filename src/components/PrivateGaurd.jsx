import { Outlet, Navigate } from "react-router";

export default function PrivateGuard({ user }) {
    return user ? <Outlet /> : <Navigate to="/login" replace />;
}
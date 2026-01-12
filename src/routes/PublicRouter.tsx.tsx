import { Navigate } from "react-router-dom";

const PublicRouter = ({ children }: { children: React.ReactNode }) => {
    const isLogged = Boolean(localStorage.getItem("access_token"));
    return isLogged ? <Navigate to="/dashboard" replace /> : children;
};

export default PublicRouter;

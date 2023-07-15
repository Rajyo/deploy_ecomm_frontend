import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ component, ...rest }) => {
  const token = localStorage.getItem("access_token");
  console.log(token);
  return token ? <Outlet /> : <Navigate to="/login" />;
};
export default ProtectedRoute;

import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function RoleBasedRoute({ allowedRoles, children }) {
  const { userInfo } = useSelector((state) => state.auth);

  if (!userInfo) {
    // not logged in
    return <Navigate to="/login" />;
  }

  if (!allowedRoles.includes(userInfo.role)) {
    // logged in but not allowed
    return <Navigate to="/" />;
  }

  return children;
}

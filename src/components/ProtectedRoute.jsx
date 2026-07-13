// import { Navigate } from "react-router-dom";
// const ProtectedRoute = ({ children }) => {
//   const isLogin = localStorage.getItem("isLogin");
//   if (!isLogin) {
//     return <Navigate to="/login" />;
//   }
//   return children;
// };
// export default ProtectedRoute;

import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const isLogin = localStorage.getItem("isLogin");

  return isLogin ? children : <Navigate to="/" replace />;
};

export default ProtectedRoute;
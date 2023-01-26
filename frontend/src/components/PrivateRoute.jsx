import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuthStatus } from "../hooks/useAuthStatus";
import Spinner from "./Spinner";

const PrivateRoute = () => {
  const { loggedIn, checkingStatus } = useAuthStatus();
  if (checkingStatus) {
    return <Spinner />;
  }
  return loggedIn ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;

//NOTE: A different approach.
// import React from "react";
// import { Navigate, Outlet } from "react-router-dom";
// import { useAuthStatus } from "../hooks/useAuthStatus";
// import { useSelector } from "react-redux";
// import Spinner from "./Spinner";
// import { useEffect } from "react";

// function PrivateRoute() {
//   const { user } = useSelector((state) => state.auth);
//   // useEffect(() => console.log(user), [user]);
//   return user !== null ? <Outlet /> : <Navigate to={"/login"} />;
// }

// export default PrivateRoute;

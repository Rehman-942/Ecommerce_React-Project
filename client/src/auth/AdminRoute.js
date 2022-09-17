import React from "react";
import { render } from "react-dom";
import { Navigate } from "react-router-dom";
import { isAuthenticated } from "./index";

const AdminRoute = ({ children }) => {
  return isAuthenticated() && isAuthenticated().user.role === 1 ? (
    children
  ) : (
    <Navigate replace to="/signin" />
  );
};

export default AdminRoute;

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./user/Signup";
import Signin from "./user/Signin";
import Home from "./core/Home";
import PrivateRoute from "./auth/PrivateRoute";
import Dashboard from "./user/UserDashboard";
import AdminRoute from "./auth/AdminRoute";
import AdminDashboard from "./user/AdminDashboard";
import AddCategory from "./admin/AddCategory";
import AddProduct from "./admin/AddProduct";
import Shop from "./core/Shop";
import Product from "./core/Product";
import Cart from "./core/Cart";
import Orders from "./admin/Orders";
import Profile from "./user/Profile";
import ManageProducts from "./admin/ManageProducts";
import UpdateProduct from "./admin/UpdateProduct";
import NotFound from "./core/NotFound";

const AllRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/admin/dashboard"
          element={
            <AdminRoute>
              <AdminDashboard />
            </AdminRoute>
          }
        ></Route>
        <Route
          path="/user/dashboard"
          element={<PrivateRoute component={<Dashboard />} />}
        ></Route>
        <Route
          path="/create/category"
          element={<AdminRoute component={<AddCategory />} />}
        ></Route>
        <Route
          path="/create/product"
          element={<AdminRoute component={<AddProduct />} />}
        ></Route>
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route
          path="/admin/orders"
          element={<AdminRoute component={<Orders />} />}
        ></Route>
        <Route
          path="/profile/:userId"
          element={<PrivateRoute component={<Profile />} />}
        ></Route>
        <Route
          path="/admin/products"
          element={<AdminRoute component={<ManageProducts />} />}
        ></Route>
        <Route
          path="/admin/product/update/:productId"
          element={<AdminRoute component={<UpdateProduct />} />}
        ></Route>
        <Route element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AllRoutes;

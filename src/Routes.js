import React from "react";
import {Route, Switch, BrowserRouter} from "react-router-dom";
import Home from "./core/Home";
import Signup from "./user/Signup";
import Signin from "./user/Signin";
import AdminRoute from "./auth/helper/AdminRoutes";
import PrivateRoute from "./auth/helper/PrivateRoutes";
import UserDashBoard from "./user/UserDashBoard";
import AdminDashBoard from "./user/AdminDashBoard";
import AddCategory from "./admin/AddCategory";
import ManageCategories from "./admin/ManageCategories";
import AddProduct from "./admin/AddProduct"
import ManageProducts from "./admin/ManageProducts";
import UpdateProduct from "./admin/UpdateProduct";
import updateCategory from "./admin/UpdateCategory";
import Cart from "./core/Cart";


const Routes = ()=>{
    return (
    <BrowserRouter>
    <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/signup" exact component={Signup}></Route>
        <Route path="/signin" exact component={Signin}></Route>
        <Route path="/cart" exact component={Cart}></Route>
        <PrivateRoute path="/user/dashboard" exact component={UserDashBoard} ></PrivateRoute>
        <AdminRoute path="/admin/dashboard" exact component={AdminDashBoard} ></AdminRoute>
        <AdminRoute path="/admin/create/category" exact component={AddCategory} ></AdminRoute>
        <AdminRoute path="/admin/categories" exact component={ManageCategories} ></AdminRoute>
        <AdminRoute path="/admin/create/product" exact component={AddProduct} ></AdminRoute>
        <AdminRoute path="/admin/products" exact component={ManageProducts} ></AdminRoute>
        <AdminRoute path="/admin/product/update/:productId" exact component={UpdateProduct} ></AdminRoute>
        <AdminRoute path="/admin/category/update/:categoryId" exact component={updateCategory} ></AdminRoute>
    </Switch>
    </BrowserRouter>);
}

export default Routes; 
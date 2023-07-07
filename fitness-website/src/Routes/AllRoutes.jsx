import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import HomePage from "../pages/HomePage";
import Register from "../pages/Register";
import AdminDashboard from "../Admin/Pages/AdminDashboard";
import AdminUsers from "../Admin/Pages/AdminUsers";
import AddNewUser from "../Admin/Pages/AddNewUser";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/admin-dashboard" element={<AdminDashboard />} />
      <Route path="/admin-users" element={<AdminUsers/>} />
      <Route path="/admin-add-user" element={<AddNewUser/>} />
    </Routes>
  );
};

export default AllRoutes;

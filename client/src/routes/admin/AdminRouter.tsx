import { Routes, Route } from "react-router-dom";
import React from "react";
import AdminLoginPage from "../../pages/Admin/AdminLoginPage";
import AdminHomePage from "../../pages/Admin/AdminHomePage";
function AdminRouter() {
  return (
    <div>
      <Routes>
        <Route path="/*" element={<AdminHomePage />} />
        <Route path="/login" element={<AdminLoginPage />} />
      </Routes>
    </div>
  );
}

export default AdminRouter;

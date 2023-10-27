import React from "react";
import CommonHeader from "../../components/Header/CommonHeader";
import AdminHeader from "../../components/Header/AdminHeader";
import AdminLogin from "../../components/Admin/AdminAuth/AdminLogin";

function AdminLoginPage() {
  return (
    <div>
      {/* <AdminHeader /> */}
      <AdminLogin />
      {/* <CommonHeader /> */}
    </div>
  );
}

export default AdminLoginPage;

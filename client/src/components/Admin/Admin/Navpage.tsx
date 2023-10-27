import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminDashboard from "./AdminDashboard";
import Employer from "./Employer";
import User from "./User";

function Navpage() {
  return (
    <>
      <section>
        <Routes>
          <Route path="/dashboard" element={<AdminDashboard />} />
          <Route path="/employer" element={<Employer />} />
          <Route path="/userlist" element={<User />} />
        </Routes>
      </section>
    </>
  );
}

export default Navpage;

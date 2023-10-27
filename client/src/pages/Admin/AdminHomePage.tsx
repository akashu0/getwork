import React from "react";
import Navpage from "../../components/Admin/Admin/Navpage";
import AdminHeader from "../../components/Header/AdminHeader";
import Sidebar from "../../components/Admin/Admin/Sidebar";

function AdminHomePage() {
  return (
    <>
      <section>
        <div>
          <AdminHeader />
        </div>
      </section>

      <section>
        <div className="grid grid-cols-12">
          <div className="col-span-2 bg-gray-200 h-screen pl-2 md:col-span-2">
            <Sidebar />
          </div>

          <div className="col-span-10  h-screen pl-2 md:col-span-10">
            <Navpage />
            {/* <Routes>
          <Route path="/dashboard" element={<AdminDashboard />} />
          <Route path="/employer" element={<Employer />} />
        </Routes> */}
          </div>
        </div>
      </section>
    </>
  );
}

export default AdminHomePage;

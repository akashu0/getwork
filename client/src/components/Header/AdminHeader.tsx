import React from "react";
import { Link } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";

function AdminHeader() {
  return (
    <>
      <section>
        <div className="bg-gray-200 h-20 w-full flex items-center px-5 space-x-4">
          <div>
            <RxDashboard className="text-deep-orange-500 text-4xl" />
          </div>
          <div>
            <Link to={"/admin/"}>
              <p className="text-brown-500 text-3xl">AdminPanel</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default AdminHeader;

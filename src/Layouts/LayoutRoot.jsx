import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar";

import SeccionFooter from "../components/SeccionFooter";

const LayoutPublic = () => {
  return (
    <>
      <Navbar />
      <br />
      <main className="mt-10">
        <Outlet />
      </main>
      <SeccionFooter />
    </>
  );
};

export default LayoutPublic;

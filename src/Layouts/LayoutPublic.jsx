import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar";

import { createContext, useState } from "react";
import SeccionFooter from "../components/SeccionFooter";

export const UserContext = createContext();

const LayoutPublic = () => {
  const [user, setUser] = useState(null);

  return (
    <>
      <UserContext.Provider value={{ user, setUser }}>
        <Navbar />
        <main className="mt-10">
          <Outlet />
        </main>
        <SeccionFooter />
      </UserContext.Provider>
    </>
  );
};

export default LayoutPublic;

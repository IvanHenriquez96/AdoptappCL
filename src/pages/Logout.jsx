import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../Layouts/LayoutPublic";

const Logout = () => {
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    setUser(null);
    navigate("/");
  }, []);

  return <div></div>;
};

export default Logout;

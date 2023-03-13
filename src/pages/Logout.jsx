import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";

const Logout = () => {
  const { user, setUser } = useUserContext();

  const navigate = useNavigate();

  useEffect(() => {
    setUser(null);
    localStorage.removeItem("userData");
    navigate("/");
  }, []);

  return <div></div>;
};

export default Logout;

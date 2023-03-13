import React, { useContext } from "react";
import { useUserContext } from "../context/UserContext";

const MiPerfil = () => {
  const { user, setUser } = useUserContext();
  return <div>{user.email}</div>;
};

export default MiPerfil;

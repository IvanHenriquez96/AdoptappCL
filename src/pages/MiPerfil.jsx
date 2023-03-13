import React, { useContext } from "react";
import { UserContext } from "../App";

const MiPerfil = () => {
  const { user } = useContext(UserContext);
  return <div>{user.email}</div>;
};

export default MiPerfil;

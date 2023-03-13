import React, { useContext } from "react";
import { UserContext } from "../Layouts/LayoutPublic";

const MiPerfil = () => {
  const { user } = useContext(UserContext);
  return <div>{user.email}</div>;
};

export default MiPerfil;

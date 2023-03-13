import { Navigate, Outlet } from "react-router-dom";
import { useUserContext } from "../context/UserContext";

const LayoutAdmin = () => {
  const { user } = useUserContext();

  console.log("intenta ir a una ruta protegida", user);

  return (
    <div>
      {/* <br />
      <br />
      <p>layout admin</p> */}
      {user ? <Outlet /> : <Navigate to={"/"} />}
    </div>
  );
};

export default LayoutAdmin;

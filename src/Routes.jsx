import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Adopta from "./pages/Adopta";
import QuienesSomos from "./pages/QuienesSomos";
import Login from "./pages/Login";
import Registro from "./pages/Registro";
import InfoMascotaPage from "./pages/InfoMascotaPage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="AdoptappCL/" element={<Home />} />
      <Route path="AdoptappCL/adopta" element={<Adopta />} />
      <Route
        path="AdoptappCL/adopta/:idMascota"
        element={<InfoMascotaPage />}
      />
      <Route path="AdoptappCL/quienessomos" element={<QuienesSomos />} />
      <Route path="AdoptappCL/login" element={<Login />} />
      <Route path="AdoptappCL/Registrarse" element={<Registro />} />
    </Routes>
  );
}
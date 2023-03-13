import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Adopta from "./pages/Adopta";
import QuienesSomos from "./pages/QuienesSomos";
import Login from "./pages/Login";
import Registro from "./pages/Registro";
import InfoMascotaPage from "./pages/InfoMascotaPage";
import RecursosPage from "./pages/RecursosPage";
import FundacionesPage from "./pages/FundacionesPage";
import MiPerfil from "./pages/MiPerfil";
import Logout from "./pages/Logout";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/adopta" element={<Adopta />} />
      <Route path="/adopta/:idMascota" element={<InfoMascotaPage />} />
      <Route path="/fundaciones" element={<FundacionesPage />} />
      <Route path="/recursos" element={<RecursosPage />} />
      <Route path="/quienessomos" element={<QuienesSomos />} />
      <Route path="/login" element={<Login />} />
      <Route path="/Registrarse" element={<Registro />} />
      <Route path="/perfil" element={<MiPerfil />} />
      <Route path="/logout" element={<Logout />} />
    </Routes>
  );
}

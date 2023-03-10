import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Adopta from "./pages/Adopta";
import QuienesSomos from "./pages/QuienesSomos";
import Login from "./pages/Login";
import Registro from "./pages/Registro";
import InfoMascotaPage from "./pages/InfoMascotaPage";
import RecursosPage from "./pages/RecursosPage";
import FundacionesPage from "./pages/FundacionesPage";

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
    </Routes>
  );
}

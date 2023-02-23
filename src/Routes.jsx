import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Adopta from "./pages/Adopta";
import QuienesSomos from "./pages/QuienesSomos";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="AdoptappCL/" element={<Home />} />
      <Route path="AdoptappCL/adopta" element={<Adopta />} />
      <Route path="AdoptappCL/quienessomos" element={<QuienesSomos />} />
    </Routes>
  );
}

import { createBrowserRouter } from "react-router-dom";
import NotFound from "../components/NotFound";
import LayoutPublic from "../Layouts/LayoutPublic";
import Adopta from "../pages/Adopta";
import FundacionesPage from "../pages/FundacionesPage";
import Home from "../pages/Home";
import InfoMascotaPage from "../pages/InfoMascotaPage";
import Login from "../pages/Login";
import Logout from "../pages/Logout";
import MiPerfil from "../pages/MiPerfil";
import QuienesSomos from "../pages/QuienesSomos";
import RecursosPage from "../pages/RecursosPage";
import Registro from "../pages/Registro";

export const router = createBrowserRouter([
  //Ruta Raiz con rutas anidadas
  {
    path: "/",
    element: <LayoutPublic />,
    errorElement: <NotFound />,
    children: [
      { path: "/", element: <Home />, errorElement: <NotFound /> },
      { path: "/adopta", element: <Adopta /> },
      { path: "/adopta/idMascota", element: <InfoMascotaPage /> },
      { path: "/fundaciones", element: <FundacionesPage /> },
      { path: "/recursos", element: <RecursosPage /> },
      { path: "/quienessomos", element: <QuienesSomos /> },
      { path: "/login", element: <Login /> },
      { path: "/Registrarse", element: <Registro /> },
      { path: "/perfil", element: <MiPerfil /> },
      { path: "/logout", element: <Logout /> },
    ],
  },
]);

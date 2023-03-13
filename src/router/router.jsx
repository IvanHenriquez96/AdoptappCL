import { createBrowserRouter } from "react-router-dom";
import NotFound from "../components/NotFound";
import LayoutAdmin from "../Layouts/LayoutAdmin";
import LayoutPublic from "../Layouts/LayoutRoot";
import Adopta from "../pages/Adopta";
import DashboardPage from "../pages/DashboardPage";
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
      { index: true, element: <Home /> },
      { path: "/adopta", element: <Adopta /> },
      { path: "/adopta/:idMascota", element: <InfoMascotaPage /> },
      { path: "/fundaciones", element: <FundacionesPage /> },
      { path: "/recursos", element: <RecursosPage /> },
      { path: "/quienessomos", element: <QuienesSomos /> },
      { path: "/login", element: <Login /> },
      { path: "/Registrarse", element: <Registro /> },
      { path: "/perfil", element: <MiPerfil /> },
      { path: "/logout", element: <Logout /> },

      {
        path: "/dashboard",
        element: <LayoutAdmin />,
        children: [{ index: true, element: <DashboardPage /> }],
      },
    ],
  },
]);

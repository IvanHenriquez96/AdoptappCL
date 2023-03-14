import React, { useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import ItemNavbar from "./ItemNavbar";
import logo from "../assets/logo.png";
import { useUserContext } from "../context/UserContext";

const navigation = [
  { name: "Inicio", href: "/", current: true },
  { name: "Mascotas", href: "/adopta", current: false },
  { name: "Fundaciones", href: "/fundaciones", current: false },
  { name: "Recursos", href: "/recursos", current: false },
  { name: "Quiénes somos", href: "/quienessomos", current: false },
];

const navigation_guest = [
  { name: "Iniciar Sesión", href: "/login", current: true },
  { name: "Registrarse", href: "/registrarse", current: false },
];

const navigation_auth = [
  // { name: "Mi Perfil", href: "/perfil", current: true },
  { name: "Mi Perfil", href: "/dashboard", current: true },
  { name: "Cerrar Sesión", href: "/logout", current: false },
];

export const Navbar = () => {
  const { user, setUser } = useUserContext();

  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const menuRef = useRef(null);

  const toggleMenu = (e) => {
    e.preventDefault();
    setIsOpenMenu(!isOpenMenu);
  };

  return (
    <>
      <header
        aria-label="Site Header"
        className=" bg-sky-600 fixed top-0 left-0 right-0 z-10"
      >
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 ">
          <div className="flex h-16 items-center justify-between">
            <div className="md:flex md:items-center md:gap-12">
              <Link to={"/"} className="block text-teal-600" href="/">
                <span className="sr-only">Home</span>
                {/* <h2 className="text-2xl text-white font-bold">ADOPTA</h2> */}
                <img src={logo} className="w-32" alt="" />
              </Link>
            </div>

            <div className="hidden md:block">
              <nav aria-label="Site Nav">
                <ul className="flex items-center gap-6 text-sm">
                  {navigation.map((item) => (
                    <ItemNavbar
                      key={item.name}
                      texto={item.name}
                      url={item.href}
                      current={item.current}
                    />
                  ))}
                </ul>
              </nav>
            </div>

            <div className="flex items-center gap-4">
              {user ? (
                <div className="hidden sm:flex sm:gap-4">
                  <Link
                    className="rounded-md bg-yellow-500 hover:bg-yellow-600 px-5 py-2.5 text-sm font-medium text-white shadow "
                    to={"perfil"}
                  >
                    Mi Perfil
                  </Link>

                  <div className="hidden sm:flex">
                    <Link
                      className="rounded-md bg-yellow-500 px-5 py-2.5 text-sm font-medium text-gray-50 hover:bg-yellow-600"
                      to={"logout"}
                    >
                      Cerrar Sesión
                    </Link>
                  </div>
                </div>
              ) : (
                <div className="hidden sm:flex sm:gap-4">
                  <Link
                    className="rounded-md bg-yellow-500 hover:bg-yellow-600 px-5 py-2.5 text-sm font-medium text-white shadow "
                    to={"login"}
                  >
                    iniciar Sesión
                  </Link>

                  <div className="hidden sm:flex">
                    <Link
                      className="rounded-md bg-yellow-500 px-5 py-2.5 text-sm font-medium text-gray-50 hover:bg-yellow-600"
                      to={"registrarse"}
                    >
                      Registrarse
                    </Link>
                  </div>
                </div>
              )}

              <div className="block md:hidden ">
                <button
                  id="menu_hamburguesa"
                  className="rounded bg-yellow-500 p-2 text-gray-50 transition hover:text-gray-50/75"
                  onClick={toggleMenu}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {isOpenMenu && (
        <div
          ref={menuRef}
          className="bg-sky-500 bg-opacity-90 fixed top-16 left-100 right-0 z-10 h-screen w-3/4 scale-in-hor-right text-white  py-5"
        >
          <ul className="grid ">
            {navigation.map((item) => (
              <ItemNavbar
                key={item.name}
                texto={item.name}
                url={item.href}
                current={item.current}
              />
            ))}

            <div className="my-3"></div>

            {user
              ? navigation_auth.map((item) => (
                  <NavLink
                    to={item.href}
                    key={item.name}
                    className={({ isActive }) =>
                      isActive
                        ? "p-2 font-medium text-white hover:bg-yellow-500 rounded bg-yellow-500"
                        : "p-2 font-medium text-white hover:bg-yellow-500 rounded"
                    }
                  >
                    {item.name}
                  </NavLink>
                ))
              : navigation_guest.map((item) => (
                  <NavLink
                    to={item.href}
                    key={item.name}
                    className={({ isActive }) =>
                      isActive
                        ? "p-2 font-medium text-white hover:bg-yellow-500 rounded bg-yellow-500"
                        : "p-2 font-medium text-white hover:bg-yellow-500 rounded"
                    }
                  >
                    {item.name}
                  </NavLink>
                ))}
          </ul>
        </div>
      )}
    </>

    // <>
    //   <header
    //     aria-label="Site Header"
    //     className=" bg-sky-600 fixed top-0 left-0 right-0 z-10"
    //   >
    //     <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 ">
    //       <div className="flex h-16 items-center justify-between">
    //         <div className="md:flex md:items-center md:gap-12">
    //           <Link to={"/"} className="block text-teal-600" href="/">
    //             <span className="sr-only">Home</span>
    //             {/* <h2 className="text-2xl text-white font-bold">ADOPTA</h2> */}
    //             <img src={logo} className="w-32" alt="" />
    //           </Link>
    //         </div>

    //         <div className="hidden md:block">
    //           <nav aria-label="Site Nav">
    //             <ul className="flex items-center gap-6 text-sm">
    //               {navigation.map((item) => (
    //                 <ItemNavbar
    //                   key={item.name}
    //                   texto={item.name}
    //                   url={item.href}
    //                   current={item.current}
    //                 />
    //               ))}
    //             </ul>
    //           </nav>
    //         </div>

    //         <div className="flex items-center gap-4">
    //           {user ? (
    //             <div className="hidden sm:flex sm:gap-4">
    //               <Link
    //                 className="rounded-md bg-yellow-500 hover:bg-yellow-600 px-5 py-2.5 text-sm font-medium text-white shadow "
    //                 to={"perfil"}
    //               >
    //                 Mi Perfil
    //               </Link>

    //               <div className="hidden sm:flex">
    //                 <Link
    //                   className="rounded-md bg-yellow-500 px-5 py-2.5 text-sm font-medium text-gray-50 hover:bg-yellow-600"
    //                   to={"logout"}
    //                 >
    //                   Cerrar Sesión
    //                 </Link>
    //               </div>
    //             </div>
    //           ) : (
    //             <div className="hidden sm:flex sm:gap-4">
    //               <Link
    //                 className="rounded-md bg-yellow-500 hover:bg-yellow-600 px-5 py-2.5 text-sm font-medium text-white shadow "
    //                 to={"login"}
    //               >
    //                 iniciar Sesión
    //               </Link>

    //               <div className="hidden sm:flex">
    //                 <Link
    //                   className="rounded-md bg-yellow-500 px-5 py-2.5 text-sm font-medium text-gray-50 hover:bg-yellow-600"
    //                   to={"registrarse"}
    //                 >
    //                   Registrarse
    //                 </Link>
    //               </div>
    //             </div>
    //           )}

    //           <div className="block md:hidden ">
    //             <button
    //               id="menu_hamburguesa"
    //               className="rounded bg-yellow-500 p-2 text-gray-50 transition hover:text-gray-50/75"
    //               onClick={toggleMenu}
    //             >
    //               <svg
    //                 xmlns="http://www.w3.org/2000/svg"
    //                 className="h-5 w-5"
    //                 fill="none"
    //                 viewBox="0 0 24 24"
    //                 stroke="currentColor"
    //                 strokeWidth="2"
    //               >
    //                 <path
    //                   strokeLinecap="round"
    //                   strokeLinejoin="round"
    //                   d="M4 6h16M4 12h16M4 18h16"
    //                 />
    //               </svg>
    //             </button>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </header>
    //   <div
    //     id="seccion_menu"
    //     className="bg-sky-500 bg-opacity-90 fixed top-16 left-100 right-0 z-10 h-screen w-3/4 scale-in-hor-right text-white hidden py-5"
    //   >
    //     <ul className="grid ">
    //       {navigation.map((item) => (
    //         <ItemNavbar
    //           key={item.name}
    //           texto={item.name}
    //           url={item.href}
    //           current={item.current}
    //         />
    //       ))}

    //       <div className="my-3"></div>

    //       {user
    //         ? navigation_auth.map((item) => (
    //             <NavLink
    //               to={item.href}
    //               key={item.name}
    //               className={({ isActive }) =>
    //                 isActive
    //                   ? "p-2 font-medium text-white hover:bg-yellow-500 rounded bg-yellow-500"
    //                   : "p-2 font-medium text-white hover:bg-yellow-500 rounded"
    //               }
    //             >
    //               {item.name}
    //             </NavLink>
    //           ))
    //         : navigation_guest.map((item) => (
    //             <NavLink
    //               to={item.href}
    //               key={item.name}
    //               className={({ isActive }) =>
    //                 isActive
    //                   ? "p-2 font-medium text-white hover:bg-yellow-500 rounded bg-yellow-500"
    //                   : "p-2 font-medium text-white hover:bg-yellow-500 rounded"
    //               }
    //             >
    //               {item.name}
    //             </NavLink>
    //           ))}
    //     </ul>
    //   </div>
    // </>
  );
};

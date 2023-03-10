import React, { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, NavLink } from "react-router-dom";
import ItemNavbar from "./ItemNavbar";
import logo from "../assets/logo.png";

const navigation = [
  { name: "Inicio", href: "/", current: true },
  { name: "Mascotas", href: "/adopta", current: false },
  { name: "Fundaciones", href: "/fundaciones", current: false },
  { name: "Recursos", href: "/recursos", current: false },
  { name: "Quiénes somos", href: "/quienessomos", current: false },
];

const navigation_auth = [
  { name: "Iniciar Sesión", href: "/login", current: true },
  { name: "Registrarse", href: "/registrarse", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export const Navbar = () => {
  const toggleMenu = (e) => {
    const seccion_menu = document.querySelector("#seccion_menu");
    // console.log("test");
    seccion_menu.classList.toggle("hidden");
  };

  return (
    <>
      <header aria-label="Site Header" className=" bg-sky-600">
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
          <div id="seccion_menu" className="text-white hidden py-5">
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

              {navigation_auth.map((item) => (
                <Link
                  to={item.href}
                  key={item.name}
                  className="p-2 font-medium"
                >
                  {item.name}
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

//Componente que crea el contexto y el estado

import { createContext, useContext, useState } from "react";
//Exporta el contexto
export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const userData = JSON.parse(localStorage.getItem("userData"));

  const [user, setUser] = useState(userData);

  return (
    //Envuelve a los hijos en el provider
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;

export const useUserContext = () => useContext(UserContext);

//Componente que crea el contexto y el estado

import { createContext, useContext, useState } from "react";
//Exporta el contexto
export const UserContext = createContext();

const UserProvider = ({ children }) => {
  // const [user, setUser] = useState(false);
  const [user, setUser] = useState(true);

  return (
    //Envuelve a los hijos en el provider
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;

export const useUserContext = () => useContext(UserContext);

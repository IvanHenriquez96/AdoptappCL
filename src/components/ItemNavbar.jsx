import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const ItemNavbar = ({ texto, url, current }) => {
  // const [isCurrent, setIsCurrent] = useState(current);

  return (
    <NavLink
      to={url}
      className={({ isActive }) =>
        isActive
          ? "p-2 font-medium text-white hover:bg-yellow-500 rounded bg-yellow-500"
          : "p-2 font-medium text-white hover:bg-yellow-500 rounded"
      }
    >
      {texto}
    </NavLink>
  );
};

export default ItemNavbar;

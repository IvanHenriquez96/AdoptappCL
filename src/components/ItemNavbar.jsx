import React, { useState } from "react";
import { Link } from "react-router-dom";

const ItemNavbar = ({ texto, url, current }) => {
  const [isCurrent, setIsCurrent] = useState(current);

  return (
    <Link
      to={url}
      className={`p-2 font-medium text-gray-300 hover:bg-cyan-700 hover:text-white ${
        isCurrent && "bg-cyan-900 text-white rounded"
      }`}
    >
      {texto}
    </Link>
  );
};

export default ItemNavbar;

import React, { useState } from "react";
import { Link } from "react-router-dom";

const ItemNavbar = ({ texto, url, current }) => {
  const [isCurrent, setIsCurrent] = useState(current);

  return (
    <Link
      to={url}
      className={`p-2 font-medium text-white hover:bg-yellow-600 rounded hover:text-white ${
        isCurrent && "bg-yellow-500 text-white rounded"
      }`}
    >
      {texto}
    </Link>
  );
};

export default ItemNavbar;

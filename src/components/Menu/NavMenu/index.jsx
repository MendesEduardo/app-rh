import { Link } from "react-router-dom";

function MenuLink({ children, to, customStyle }) {
  const finalStyle =
    customStyle ||
    "w-full h-16 font-bold bg-blue-600 rounded-xl py-5 cursor-pointer hover:bg-blue-800";

  return (
    <Link className={finalStyle} to={to}>
      {children}
    </Link>
  );
}

export default MenuLink;

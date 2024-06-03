import logo from "@/assets/logo-black.svg";
import { Link, NavLink } from "react-router-dom";

const MainHeader = () => {
  const className = ({ isActive, isPending }) =>
    isActive ? "text-Redtext" : isPending ? "text-purple-400" : "";
  return (
    <header
      className={
        "shadow-header sticky top-0 z-50 flex items-center justify-between bg-white px-4 py-4 lg:px-[120px]"
      }
    >
      <Link to={"/"}>
        <img src={logo} alt="" />
      </Link>
      <nav className={"font-semibold"}>
        <ul className={"flex gap-5 lg:gap-10"}>
          <li>
            <NavLink className={className} to={"/"}>
              Explore
            </NavLink>
          </li>
          <li className={"list-disc"}>
            <NavLink className={className} to={"about"}>
              About
            </NavLink>
          </li>
          <li className={"list-disc"}>
            <NavLink className={className} to={"services"}>
              Services
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;

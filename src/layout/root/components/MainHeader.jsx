import logo from "@/assets/images/ThinkHub a.png";
import { Link, NavLink } from "react-router-dom";

const MainHeader = () => {
  const className = ({ isActive, isPending }) =>
    isActive ? "text-Redtext" : isPending ? "text-purple-400" : "";
  return (
    <header
      className={
        "sticky top-0 z-50 flex items-center justify-between bg-white px-4 py-4 shadow-header lg:px-[120px]"
      }
    >
      <Link to={"/"}>
        <img width={100} height={100} src={logo} alt="" />
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

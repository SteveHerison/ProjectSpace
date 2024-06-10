import { NavLink } from "react-router-dom";
import Logo from "../../assets/shared/logo.svg";

const Header = () => {
  return (
    <div className="pt-12 pl-12 absolute right-0 w-full z-10">
      <div className="flex h-full items-center justify-between">
        <div className="flex items-center gap-16 relative">
          <img src={Logo} alt="Logo" />
        </div>
        <div
          className="h-28 text-white w-[35%] min-w-[664px]"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.05)",
            backdropFilter: "blur(40px)",
          }}>
          <ul className="flex gap-16 h-full justify-end pr-20">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `flex items-center ${
                  isActive ? "border-b-4 pt-1" : "hover:border-b-4 hover:pt-1"
                }`
              }>
              <li>00 HOME</li>
            </NavLink>
            <NavLink
              to="/destination"
              className={({ isActive }) =>
                `flex items-center ${
                  isActive ? "border-b-4 pt-1" : "hover:border-b-4 hover:pt-1"
                }`
              }>
              <li className="">01 DESTINATION</li>
            </NavLink>
            <NavLink
              to="/crew"
              className={({ isActive }) =>
                `flex items-center ${
                  isActive ? "border-b-4 pt-1" : "hover:border-b-4 hover:pt-1"
                }`
              }>
              <li>02 CREW</li>
            </NavLink>
            <NavLink
              to="/technology"
              className={({ isActive }) =>
                `flex items-center ${
                  isActive ? "border-b-4 pt-1" : "hover:border-b-4 hover:pt-1"
                }`
              }>
              <li>03 TECHNOLOGY</li>
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;

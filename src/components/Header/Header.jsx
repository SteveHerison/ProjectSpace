import { Link } from "react-router-dom";
import Logo from "../../assets/shared/logo.svg";

const Header = () => {
  return (
    <div className="pt-12 pl-12 absolute right-0 w-full">
      <div className="flex h-full items-center justify-between">
        <div className="flex w-full items-center gap-16">
          <img src={Logo} alt="" />
          <p className="h-1 bg-white  opacity-25 absolute  z-10 left-60 right-[31%]" />
        </div>
        <div
          className="h-28  text-white w-1/2"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.05)",
            backdropFilter: "blur(40px)",
          }}>
          <ul className="flex gap-12 h-full min-w-[664px]  justify-center">
            <li className="flex items-center">
              <Link to="/">01 HOME</Link>
            </li>
            <li className="flex items-center">
              <Link to="/destination">02 DESTINATION</Link>
            </li>
            <li className="flex items-center">
              <Link to="/crew">03 CREW</Link>
            </li>
            <li className="flex items-center">
              <Link to="/technology">04 TECHNOLOGY</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;

import { useState } from "react";
import { LOGO } from "../utils/constants";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
  const [loginText, setLoginText] = useState("Login");
  const onlineStatus = useOnlineStatus();
  return (
    <div className="flex justify-between items-center">
      <div className="logo-container">
        <img src={LOGO} alt="Google Logo" className="w-32" />
      </div>
      <div className="nav-items">
        <ul className="flex gap-6 mr-2">
          <li>Online Status: {onlineStatus ? "🟢" : "🔴"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <button
              className="bg-gray-200 border-solid border-black border-[1px] px-2"
              onClick={() => {
                setLoginText(loginText === "Login" ? "Logout" : "Login");
              }}
            >
              {loginText}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;

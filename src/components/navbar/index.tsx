import { FaGithub } from "react-icons/fa";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { CiLight } from "react-icons/ci";
import { useState } from "react";
import { IoSunny } from "react-icons/io5";
import { IoMoon } from "react-icons/io5";
const Navbar = () => {
  const [dark, setDark] = useState(false);

  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  };
  return (
    <div className="flex justify-between px-32 py-8">
      <ul className="flex space-x-5">
        <li>Home</li>
        <li>About</li>
        <li>Project</li>
        <li>Blog</li>
      </ul>
      <ul className="flex items-center space-x-3">
        <li className="text-3xl">
          <FaGithub />
        </li>
        <li className="text-4xl">
          <TiSocialLinkedinCircular />
        </li>
        <li className="text-3xl">
          <button onClick={() => darkModeHandler()}>
            {
              dark && <IoSunny /> // render sunny when dark is true
            }
            {
              !dark && <IoMoon /> // render moon when dark is false
            }
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

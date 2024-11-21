import { FaGithub } from "react-icons/fa";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { IoSunny } from "react-icons/io5";
import { IoMoon } from "react-icons/io5";
import "./style.css";
interface NavbarProps {
  dark: boolean;
  darkModeHandler: () => void;
}
const Navbar = ({ dark, darkModeHandler }: NavbarProps) => {
  return (
    // <div className="flex justify-between px-32 py-8 bg-yellow-100 text-black dark:bg-blue-900 dark:text-white">
    <div className="flex justify-between">
      <ul className="flex space-x-5">
        <li>Home</li>
        <li>About</li>
        <li>Project</li>
        <li>Blog</li>
      </ul>
      <ul className="flex items-center space-x-3">
        <li className="text-2xl">
          <FaGithub />
        </li>
        <li className="text-3xl">
          <TiSocialLinkedinCircular />
        </li>
        <li className="text-2xl mt-1 ">
          <button onClick={darkModeHandler}>
            {dark ? (
              <IoSunny className={`${dark ? "rotate-sun" : ""}`} />
            ) : (
              <IoMoon />
            )}
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

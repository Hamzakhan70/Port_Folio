import { FaGithub, FaBars, FaTimes } from "react-icons/fa";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { IoSunny, IoMoon } from "react-icons/io5";
import "./style.css";
import { useState } from "react";
import { useEffect, useRef } from "react";
interface NavbarProps {
  dark: boolean;
  darkModeHandler: () => void;
}

const Navbar = ({ dark, darkModeHandler }: NavbarProps) => {
  const [activeMenu, setActiveMenu] = useState(""); 
  const [isOpen, setIsOpen] = useState(false);
  const textRef = useRef<HTMLDivElement | null>(null);
  
  useEffect(() => {
    const text = textRef.current;
    if (text) {
      text.innerHTML = text.innerText
    .split("")
    .map(
      (char, i) => `<span style="transform:rotate(${i * 10.3}deg)">${char}</span>`
    )
    .join("");
    }
  }, []);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <> 
      <div className="md:hidden absolute left-4 top-4 z-20">
        {isOpen ? (
          <FaTimes
            className="text-2xl cursor-pointer"
            onClick={toggleSidebar}
          />
        ) : (
          <FaBars className="text-2xl cursor-pointer" onClick={toggleSidebar} />
        )}
      </div>

     
      {isOpen && (
     <>
        <div className={` md:hidden inset-x-0 rounded fixed  bg-opacity-70 h-[25rem] my-[8rem] mx-8 z-10 flex flex-col items-center justify-center space-y-4  ${dark? "bg-white text-black": "bg-black text-white"}`}>
          <ul className="flex flex-col space-y-3 text-lg font-medium">
            <li onClick={toggleSidebar} className="cursor-pointer">
              Home
            </li>
            <li onClick={toggleSidebar} className="cursor-pointer">
              About
            </li>
            <li onClick={toggleSidebar} className="cursor-pointer">
              Project
            </li>
            <li onClick={toggleSidebar} className="cursor-pointer">
              Blog
            </li>
          </ul>
          <ul className="flex space-x-4 items-center mt-4">
            <li className="text-2xl">
              <FaGithub />
            </li>
            <li className="text-3xl">
              <TiSocialLinkedinCircular />
            </li>
            <li className="text-2xl">
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
     </>

      )}

      <div className="hidden md:flex justify-between">
      <ul className="flex space-x-5">
        {["Home", "About", "Project", "Blog"].map((menu) => (
          <li
            key={menu}
            onMouseEnter={() => setActiveMenu(menu)}
            onMouseLeave={() => setActiveMenu("")}
            className={`cursor-pointer font-bold ${
              activeMenu === menu ? "opacity-100 underline" : activeMenu ? "opacity-50" : "opacity-100"
            } transition-opacity duration-300`}
          >
            {menu}
          </li>
        ))}
      </ul>
        <ul className="flex items-center space-x-3">
          <li className="text-2xl">
            <FaGithub  onClick={() => window.open("https://github.com/Hamzakhan70", "_blank")}
            className="cursor-pointer "/>
          </li>
          <li className="text-3xl">
            <TiSocialLinkedinCircular  onClick={() => window.open("https://linkedin.com/in/hamza-arif- khan-87064319b", "_blank")}
            className="cursor-pointer  "/>
          </li>
          <li className="text-2xl mt-1">
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

    </>
  );
};

export default Navbar;

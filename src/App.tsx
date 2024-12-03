import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import AnimatedCursor from "react-animated-cursor";
import FormWithMappedSelects from "./components/form/FormLearning";
import Home from "./components/home";
import AboutSection from "./components/about";
import Skills from "./components/skills";
function App() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    console.log(savedTheme,"saved theme");
    if (savedTheme === "dark") {
      setDark(true);
      document.body.classList.add("dark"); // Set dark mode globally
    } else {
      setDark(false);
      document.body.classList.remove("dark"); // Set light mode globally
    }
  }, []);

  const darkModeHandler = () => {
    setDark(!dark);
    const newTheme = !dark ? "dark" : "light";
    localStorage.setItem("theme", newTheme); // Save theme preference to localStorage
    document.body.classList.toggle("dark"); // Toggle dark mode globally
  };
  
  return (
    <div className="sm:px-[8rem] sm:py-8 xl:px-[20rem] xl:py-8">
      <AnimatedCursor
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={2}
        outerAlpha={0}
        // hasBlendMode={true}
        innerStyle={{
          // backgroundColor: dark ? "white" : "black",
        }}
        outerStyle={{
          border: `3px solid ${dark ? "white" : "black"}`,
        }}
      />
      <Navbar dark={dark} darkModeHandler={darkModeHandler}  />
      {/* <FormWithMappedSelects/> */}
      <Home dark={dark} />
      <AboutSection />
      <Skills/>
    </div>
  );
}

export default App;

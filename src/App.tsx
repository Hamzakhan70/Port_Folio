import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import FormWithMappedSelects from "./components/form/FormLearning";
import Home from "./components/home";
function App() {
   
   const [dark, setDark] = useState(true);

   useEffect(() => {
     const savedTheme = localStorage.getItem('theme');
     if (savedTheme === 'dark') {
       setDark(true);
       document.body.classList.add('dark'); // Set dark mode globally
     } else {
       setDark(false);
       document.body.classList.remove('dark'); // Set light mode globally
     }
   }, []);
   const darkModeHandler = () => {
    setDark(!dark);
    const newTheme = !dark ? 'dark' : 'light';
    localStorage.setItem('theme', newTheme); // Save theme preference to localStorage
    document.body.classList.toggle('dark'); // Toggle dark mode globally
  };
  return (
    <div className="px-[20rem] py-8">
     <Navbar dark={dark} darkModeHandler={darkModeHandler} />
     {/* <FormWithMappedSelects/> */}
     <Home/>
    </div>
  );
}

export default App;

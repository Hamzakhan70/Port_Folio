import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import FormWithMappedSelects from "./components/form/FormLearning";
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
    <>
     <Navbar dark={dark} darkModeHandler={darkModeHandler} />
     <FormWithMappedSelects/>
    </>
  );
}

export default App;

import { useTypewriter, Cursor } from "react-simple-typewriter";
import homeImage from "../../assets/home_image1.jpg";
import "./style.css";
import { useEffect, useRef } from "react";
interface HomeProps {
  dark: boolean; // Define the type for the dark prop
}

const Home: React.FC<HomeProps> = ({ dark }) => {
  const [text] = useTypewriter({
    words: [
      "Hello, Name's Hamza Arif Khan😎",
      "Lover of Full-Stack Craft ✨",
      "<Making Pixel Dance/>",
    ],
    loop: false,
  });
  const textRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const text = textRef.current;
    if (text) {
      text.innerHTML = text.innerText
        .split("")
        .map(
          (char, i) =>
            `<span style="transform:rotate(${i * 10.3}deg)">${char}</span>`
        )
        .join("");
    }
  }, []);

  return (
  <>
    <div className=" items-center min-h-screen ">
      
      <div className="imgandcontent_container mt-[10rem] p-8 flex flex-col md:flex-row md:justify-between md:mt-[3rem] space-x-5">
        <div className="left">
          <img
            src={homeImage}
            alt="Developer image"
            // className="w-[15rem] sm:w-[35rem] mt-[10rem] mb-[2rem] rounded-md md:w-[78rem] md:h-[36rem] object-cover"     this is for the with of the image
            className="  mb-[2rem] rounded-md md:w-[78rem] md:h-[36rem] object-cover"
          />
        </div>
        <div className="right max-w-3xl text-center flex flex-col justify-center items-center">
          <h1 className="text-[2.2rem] font-bold md:text-6xl mb-4">
            <span>{text}</span>
            <Cursor cursorColor="orange" />
          </h1>
          <p className="mb-6 text-2xl text-justify">
            As a skilled full-stack developer, I am dedicated to turning ideas
            into innovative web applications. Explore my latest projects and
            articles, showcasing my expertise in React.js and web development.
          </p>

          {/* <div className="justify-center button flex items-center ">
            <a target="_blank" href="/ateeb-resume.pdf">
              <div className="group relative cursor-pointer overflow-hidden border-2 border-accent-light text-center dark:border-light flex items-center justify-center rounded-lg bg-dark p-2.5 px-[24px] py-[10px] text-lg font-semibold text-light dark:bg-light dark:text-dark mob:p-2 mob:px-4 mob:text-base">
                <span
                  className="relative z-10 transition-all duration-300 group-hover:text-dark dark:group-hover:text-light"
                  id="increase-cursor"
                >
                  <span className="flex items-center gap-1">
                    Resume
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                      className="h-auto w-6"
                    >
                      <path
                        fill="rgba(255, 255, 255, 0)"
                        d="M0 0h24v24H0z"
                      ></path>
                      <path
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M11 7H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-5m-7 1L20 4m-5 0h5v5"
                      ></path>
                    </svg>
                  </span>
                </span>
              </div>
            </a>

            <a
              target="_blank"
              className="ml-4 text-lg font-medium capitalize text-dark underline dark:text-light mob:text-base"
              href="mailto:ateebasif9021@gmail.com"
            >
              Contact
            </a>
          </div> */}
        </div>
      </div>

     
    </div>
     <div className="absolute md:fixed  top-[-0.5rem] right-[-0.75rem] md:bg-red md:top-[46rem] md:right-12 z-10 overflow-visible">
     <div className="relative w-[140px] h-[115px] md:w-[200px] md:h-[200px] rounded-full flex justify-center items-center pointer-events-none">
       <div
         className={`border rounded-full py-[20px] px-[7px] text-xs md:font-bold md:py-[40px] md:px-[25px] pointer-events-auto ${
           dark
             ? "bg-white text-black hover:bg-black hover:text-white font-light border: 2px solid red"
             : "bg-black text-white hover:bg-white hover:text-black"
         } transition-all duration-300 ease-in-out `}
       >
         Hire me!
       </div>
       <div className="text" ref={textRef}>
         <p>- Mern Stack <span className="text-orange-400"><p>!</p></span> WEBSITE -</p>
       </div>
     </div>
   </div>
  </>
  );
};

export default Home;

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
    (char, i) => `<span style="transform:rotate(${i * 10.3}deg)">${char}</span>`
  )
  .join("");
  }
}, []);
 
  return (
    <div className="flex justify-between items-center min-h-screen">
      <div className="left">
        <img
          src={homeImage}
          alt="Developer image"
          className="rounded-md w-78 h-[36rem] object-cover"
        />
      </div>
      <div className="right max-w-3xl text-center">
        <h1 className="font-bold text-6xl mb-4">
          <span>{text}</span>
          <Cursor cursorColor="white" />
        </h1>
        <p className="mb-6 text-2xl text-justify">
          As a skilled full-stack developer, I am dedicated to turning ideas
          into innovative web applications. Explore my latest projects and
          articles, showcasing my expertise in React.js and web development.
        </p>

        <div className="button flex items-center">
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
        </div>
      </div>

    {/* Animated Spinner Text */}
    <div className="spinner-container">
        <div className="circle ">
          <div className={`logo ${dark? "bg-black text-white font-bold":"bg-white text-black font-bold"}`}> Hire me!</div>
          <div className="text" ref={textRef}>
            <p>
              - Mern Stack !  WEBSITE - 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

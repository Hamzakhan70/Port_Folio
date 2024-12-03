import { motion } from "framer-motion";
import { Tooltip } from "react-tooltip";

const Skills = () => {
  const skills = [
    { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "JavaScript", logo: "https://cdn.worldvectorlogo.com/logos/javascript-1.svg" },
    { name: "PHP", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
    { name: "SQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "NodeJS", logo: "https://cdn.worldvectorlogo.com/logos/nodejs-1.svg" },
    { name: "ExpressJS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
    { name: "NestJS", logo: "https://cdn.worldvectorlogo.com/logos/nestjs.svg" },
    { name: "Laravel", logo: "https://cdn.worldvectorlogo.com/logos/laravel-3.svg" },
    { name: "Tailwind CSS", logo: "https://cdn.worldvectorlogo.com/logos/tailwindcss.svg" },
    { name: "Bootstrap", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
    { name: "Redux", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
    { name: "Firebase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
    { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  ];

  return (
    <section className="my-[5rem]">
      {/* Title */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
        }}
      >
        <h1 className="text-center text-7xl font-bold py-8">Skills</h1>
      </motion.div>

      {/* Skills Grid */}
      <div className="grid grid-cols-3 lg:grid-cols-4 gap-6 py-8 px-[14rem]">
        {skills.map((skill, idx) => {
          // Determine animation direction based on the row number
          const isEvenRow = Math.floor(idx / 4) % 2 === 0;
          const animationDirection = isEvenRow ? "translate-x-[-50px]" : "translate-x-[50px]";
          const animationVariants = {
            hidden: {  x: isEvenRow ? -100 : 100 },
            visible: {
             
              x: 0,
              transition: { duration: 0.6, delay: idx * 0.1 },
            },
          };

          return (
            <motion.div
              key={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
              variants={animationVariants}
              className="relative group flex items-center justify-center p-4 rounded-full border-2 border-gray-300 hover:shadow-lg transition-all duration-300"
              data-tooltip-id={`tooltip-${idx}`}
              data-tooltip-content={skill.name}
            >
                <Tooltip id={`tooltip-${idx}`} />
              <img
                src={skill.logo}
                alt={skill.name}
                className="w-16 h-16 object-contain"
              />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;

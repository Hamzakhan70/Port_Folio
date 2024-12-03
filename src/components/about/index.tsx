import React, { useEffect, useRef } from "react";
// import "./style.css";
import { motion } from "framer-motion";
import CountUp from "react-countup";
const AboutSection: React.FC = () => {
const elementsRef = useRef<HTMLDivElement[]>([]);

  // Intersection Observer for scroll animations
  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         if (entry.isIntersecting) {
  //           entry.target.classList.add("animate-appear");
  //         } else {
  //           entry.target.classList.remove("animate-appear"); // Re-trigger on exit
  //         }
  //       });
  //     },
  //     { threshold: 0.5 } // Trigger when 50% of the element is visible
  //   );

  //   elementsRef.current.forEach((el) => {
  //     if (el) observer.observe(el);
  //   });

  //   return () => observer.disconnect();
  // }, []);
 // Variants for fade-in-up animation
 const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};
  const stats = [
    { label: "No of Satisfied Clients", value: 5 },
    { label: "Projects Completed", value: 10 },
    { label: "Years of Experience", value: 2 },
  ];
  const details = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in neque sit amet nisl feugiat luctus vel nec ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in neque sit amet nisl feugiat luctus vel nec ex.",
    "Proin eu magna ut nisi tristique placerat. Curabitur varius, nunc ac vestibulum vehicula, turpis nunc bibendum ligula. Proin eu magna ut nisi tristique placerat. Curabitur varius, nunc ac vestibulum vehicula, turpis nunc bibendum ligula.",
    "Integer at ante in urna porttitor aliquam. Suspendisse nec ultricies elit, nec pulvinar dolor. Lorem ipsum dolor sit amet consectetur adipisicing elit. Integer at ante in urna porttitor aliquam. Suspendisse nec ultricies elit, nec pulvinar dolor. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  ];

  return (
    <section id="about" className="grid-cols-1 text-center">
  <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        variants={fadeInUp}
      >
        <h2 className="text-4xl font-bold mb-6 text-center">About</h2>
      </motion.div>

      <div className="mb-8 px-6">
        <motion.h3
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          variants={fadeInUp}
          className="text-2xl text-left font-semibold mb-6"
        >
          BIOGRAPHY
        </motion.h3>
        {details.map((text, idx) => (
           <motion.p
           key={idx}
           initial="hidden"
           whileInView="visible"
           viewport={{ once: false, amount: 0.5 }}
           variants={{
             hidden: { opacity: 0, y: 30 },
             visible: {
               opacity: 1,
               y: 0,
               transition: { duration: 0.6, delay: idx * 0.2 },
             },
           }}
           className="mb-4 text-lg leading-relaxed text-justify"
         >
           {text}
         </motion.p>
        ))}
      </div>

      <div className="grid grid-cols-3 justify-between items-center space-y-6 sm:space-y-0 sm:space-x-8 my-10 px-2">
        {stats.map((stat, idx) => (
        <motion.div
        key={idx}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, delay: idx * 0.2 },
          },
        }}
        className="text-center"
      >
        <h1 className="text-5xl md:text-7xl font-bold">
          <CountUp
            start={0}
            end={stat.value}
            duration={2.75}
            separator=","
            suffix="+"
          />
        </h1>
        <p className="text-lg">{stat.label}</p>
      </motion.div>
        ))}
      </div>
      
    </section>
  );
};

export default AboutSection;

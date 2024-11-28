import React, { useEffect, useRef } from "react";
// import "./style.css";

const AboutSection: React.FC = () => {
  const elementsRef = useRef<HTMLDivElement[]>([]);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-appear");
          } else {
            entry.target.classList.remove("animate-appear"); // Re-trigger on exit
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the element is visible
    );

    elementsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const stats = [
    { label: "Satisfied Clients", value: "5+" },
    { label: "Projects Completed", value: "10+" },
    { label: "Years of Experience", value: "2+" },
  ];
  const details = [
    
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in neque sit amet nisl feugiat luctus vel nec ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in neque sit amet nisl feugiat luctus vel nec ex.",
        "Proin eu magna ut nisi tristique placerat. Curabitur varius, nunc ac vestibulum vehicula, turpis nunc bibendum ligula. Proin eu magna ut nisi tristique placerat. Curabitur varius, nunc ac vestibulum vehicula, turpis nunc bibendum ligula.",
        "Integer at ante in urna porttitor aliquam. Suspendisse nec ultricies elit, nec pulvinar dolor. Lorem ipsum dolor sit amet consectetur adipisicing elit. Integer at ante in urna porttitor aliquam. Suspendisse nec ultricies elit, nec pulvinar dolor. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      
  ];

  return (
    <section id="about" className="grid-cols-1 text-center">
      <div className="view">
        <h2
          ref={(el) => el && elementsRef.current.push(el)}
          className="text-4xl font-bold mb-6 text-center"
        >
          About
        </h2>
      </div>

      <div className="mb-8">
        <h3
          ref={(el) => el && elementsRef.current.push(el)}
          className="text-2xl text-left font-semibold mb-6"
        >
          BIOGRAPHY
        </h3>
        {details.map((text, idx) => (
          <p
            key={idx}
            ref={(el) => el && elementsRef.current.push(el)}
            className="mb-4 text-lg leading-relaxed translate-y-8 transition-all duration-700 text-justify"
            style={{ transitionDelay: `${idx * 0.2}s` }}
          >
            {text}
          </p>
        ))}
      </div>
{/* 
      <div className="flex flex-col sm:flex-row justify-center space-y-6 sm:space-y-0 sm:space-x-8 mt-10">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            ref={(el) => el && elementsRef.current.push(el)}
            className=" translate-y-8 transition-all duration-700 text-center"
            style={{ transitionDelay: `${idx * 0.2 + 0.5}s` }}
          >
            <h2 className="text-5xl font-bold text-blue-500">{stat.value}</h2>
            <p className="text-lg text-white">{stat.label}</p>
          </div>
        ))}
      </div> */}
    </section>
  );
};

export default AboutSection;

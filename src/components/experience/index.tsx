import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Card from "./card";

interface abc {
  dark: Boolean;
}

const Experience: React.FC<abc> = ({ dark }) => {
  const targetRef = useRef(null);

  // Scroll progress for the section
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  // Transformations for progress bars
  const leftToRight = useTransform(scrollYProgress, [0, 1], ["0%", "112%"]);
  const rightToLeft = useTransform(scrollYProgress, [0, 1], ["0%", "112%"]);

  // card animation i can change the direct with changing -90% -->
  const cardX = useTransform(scrollYProgress, [0, 1], ["20%", "-95%"]);

  return (
    <main style={{ position: "relative" }}>
      <h1 className="text-center">Experience</h1>
      <section
        ref={targetRef}
        className="relative h-[800vh] bg-neutral-900"
      >
        {/* Sticky Container */}
        <div className="sticky top-0 flex h-[70vh] items-center overflow-hidden bg-slate-500 py-6">
          {/* Left-to-Right Progress Bar */}
          <motion.div
            className="absolute bottom-0 left-0 h-2 bg-green-500"
            style={{ width: leftToRight }}
          />
          {/* Right-to-Left Progress Bar */}
          <motion.div
            className="absolute top-2 right-0 h-2 bg-blue-500"
            style={{ width: rightToLeft }}
          />
          {/* Sliding Card */}
          <motion.div
            className="relative z-10"
            style={{ x: cardX }}
          >
            <Card />
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Experience;



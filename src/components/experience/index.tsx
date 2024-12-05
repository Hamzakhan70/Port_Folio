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
  const leftToRight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const rightToLeft = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]);

  // Transformation for card animation
  const cardX = useTransform(scrollYProgress, [0, 1], ["-50%", "50%"]);

  return (
    <main style={{ position: "relative" }}>
      <section
        ref={targetRef}
        className="relative h-[200vh] bg-neutral-900"
      >
        {/* Sticky Container */}
        <div className="sticky top-0 flex h-screen items-center overflow-hidden bg-slate-800 py-6">
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



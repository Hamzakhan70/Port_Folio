// import "./style.css";
// import { motion, useScroll, useSpring } from "framer-motion";

// export default function Experience() {
//   const { scrollYProgress } = useScroll();
//   const scaleX = useSpring(scrollYProgress, {
//     stiffness: 100,
//     damping: 30,
//     restDelta: 0.001,
//   });

//   return (
//     <>
//       <motion.div className="progress-bar" style={{ scaleX }} />
//       {/* <h1>
//         <code>useScroll</code> with spring smoothing
//       </h1> */}
//      <article>
//         <p>
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac
//           rhoncus quam.
//         </p>
//         <p>
//           Fringilla quam urna. Cras turpis elit, euismod eget ligula quis,
//           imperdiet sagittis justo. In viverra fermentum ex ac vestibulum.
//           Aliquam eleifend nunc a luctus porta. Mauris laoreet augue ut felis
//           blandit, at iaculis odio ultrices. Nulla facilisi. Vestibulum cursus
//           ipsum tellus, eu tincidunt neque tincidunt a.
//         </p>
//         <h2>Sub-header</h2>
//         <p>
//           In eget sodales arcu, consectetur efficitur metus. Duis efficitur
//           tincidunt odio, sit amet laoreet massa fringilla eu.
//         </p>
//         <p>
//           Pellentesque id lacus pulvinar elit pulvinar pretium ac non urna.
//           Mauris id mauris vel arcu commodo venenatis. Aliquam eu risus arcu.
//           Proin sit amet lacus mollis, semper massa ut, rutrum mi.
//         </p>
//         <p>Sed sem nisi, luctus consequat ligula in, congue sodales nisl.</p>
//         <p>
//           Vestibulum bibendum at erat sit amet pulvinar. Pellentesque pharetra
//           leo vitae tristique rutrum. Donec ut volutpat ante, ut suscipit leo.
//         </p>
//         <h2>Sub-header</h2>
//         <p>
//           Maecenas quis elementum nulla, in lacinia nisl. Ut rutrum fringilla
//           aliquet. Pellentesque auctor vehicula malesuada. Aliquam id feugiat
//           sem, sit amet tempor nulla. Quisque fermentum felis faucibus, vehicula
//           metus ac, interdum nibh. Curabitur vitae convallis ligula. Integer ac
//           enim vel felis pharetra laoreet. Interdum et malesuada fames ac ante
//           ipsum primis in faucibus. Pellentesque hendrerit ac augue quis
//           pretium.
//         </p>
//         <p>
//           Morbi ut scelerisque nibh. Integer auctor, massa non dictum tristique,
//           elit metus efficitur elit, ac pretium sapien nisl nec ante. In et ex
//           ultricies, mollis mi in, euismod dolor.
//         </p>
//         <p>Quisque convallis ligula non magna efficitur tincidunt.</p>
//         <p>
//           Pellentesque id lacus pulvinar elit pulvinar pretium ac non urna.
//           Mauris id mauris vel arcu commodo venenatis. Aliquam eu risus arcu.
//           Proin sit amet lacus mollis, semper massa ut, rutrum mi.
//         </p>
//         <p>Sed sem nisi, luctus consequat ligula in, congue sodales nisl.</p>
//         <p>
//           Vestibulum bibendum at erat sit amet pulvinar. Pellentesque pharetra
//           leo vitae tristique rutrum. Donec ut volutpat ante, ut suscipit leo.
//         </p>
//         <h2>Sub-header</h2>
//         <p>
//           Maecenas quis elementum nulla, in lacinia nisl. Ut rutrum fringilla
//           aliquet. Pellentesque auctor vehicula malesuada. Aliquam id feugiat
//           sem, sit amet tempor nulla. Quisque fermentum felis faucibus, vehicula
//           metus ac, interdum nibh. Curabitur vitae convallis ligula. Integer ac
//           enim vel felis pharetra laoreet. Interdum et malesuada fames ac ante
//           ipsum primis in faucibus. Pellentesque hendrerit ac augue quis
//           pretium.
//         </p>
//         <p>
//           Morbi ut scelerisque nibh. Integer auctor, massa non dictum tristique,
//           elit metus efficitur elit, ac pretium sapien nisl nec ante. In et ex
//           ultricies, mollis mi in, euismod dolor.
//         </p>
//         <p>Quisque convallis ligula non magna efficitur tincidunt.</p>
//       </article>
//       <motion.div className="progress-bar" style={{ scaleX }} />
//       {/* <motion.div className="progress-bar" style={{ scaleX }} /> */}
//     </>
//   );
// }
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Card from "./card";
interface abc {
  dark: Boolean;
}
const Experience: React.FC<abc> = ({ dark }) => {
  const sectionRef = useRef(null);
  const beforeRef = useRef(null);
  const afterRef = useRef(null);
  //   -------------
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);
  //   ----------------
  // Scroll progress for the specific section
  const { scrollYProgress: sectionProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"], // Start tracking when the section enters the viewport
  });
  const sectionWidth = useTransform(sectionProgress, [0, 1], ["-35%", "165%"]);
  // Scroll progress for the "after" bar (opposite direction)
  const { scrollYProgress: afterProgress } = useScroll({
    target: afterRef,
    offset: ["start end", "end start"],
  });
  const afterWidth = useTransform(afterProgress, [0, 1], ["165%", "-35%"]);

  return (
    <main style={{ position: "relative" }}>

      <section ref={targetRef} className="relative h-[200vh] bg-neutral-900">
        <div className="sticky top-0 flex h-screen items-center overflow-hidden bg-slate-800 py-6">
          <motion.div style={{ x }}>
            <motion.div
              style={{
                position: "relative",
                top: 0,
                left: 0,
                height: "10px",
                backgroundColor: "black",
                width: sectionWidth,
              }}
            />
            <Card />
            <motion.div
              style={{
                position: "relative",
                top: 0,
                left: 0,
                height: "10px",
                backgroundColor: "blue",
                width: afterWidth,
              }}
            />
          </motion.div>
        </div>
      </section>

    </main>
  );
};
export default Experience;

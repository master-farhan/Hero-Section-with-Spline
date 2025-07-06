import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";

const HeroSection = () => {
  return (
    <section className="h-screen bg-gradient-to-b from-violet-900 to-black flex xl:flex-row flex-col-reverse items-center justify-between lg:px-24 px-10 relative overflow-hidden">
      {/* left */}
      <div className="z-40 xl:mb-0 mb-[20%]">
        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 25,
            delay: 1.3,
            duration: 1.5,
          }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold z-10 mb-6"
        >
          Building Fast <br /> Reliable Results
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 25,
            delay: 1.8,
            duration: 1.5,
          }}
          className="text-lg md:text-xl lg:text-2xl text-purple-200 max-w-3xl"
        >
          I deliver robust, production-ready websites and web apps with speed
          and precision. Every project is backed by clean code, clear
          communication, and a commitment to getting it done, on time, every
          time.
        </motion.p>
      </div>
      {/* right */}
      <Spline
        className="absolute xl:right-[-28%] -right-40 top-[-20%] lg:top-0 scale-150 lg:scale-100"
        scene="https://prod.spline.design/OQEzWJ5udZnoicTN/scene.splinecode"
      />
    </section>
  );
};

export default HeroSection;

"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion, useInView } from "framer-motion";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const TwoColumnLayout: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <>
      {/* Text Section */}
      <div
        ref={ref}
        className="flex flex-col-reverse md:flex-row justify-center mx-5 md:mx-10 px-4 py-10 gap-10 items-center"
      >
        <motion.div
          className="md:w-1/2 flex flex-col text-center md:text-left"
          variants={fadeUpVariant}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <h1 className="text-4xl md:text-7xl font-bold mb-6 leading-tight flex justify-center bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-100/80 dark:to-slate-400/80">
            Our Events
          </h1>
          <p className="text-base md:text-lg text-gray-400 flex text-center">
            At GDG on Campus RBU, we organize workshops, hackathons, and tech
            talks to help students learn and grow in tech. Our events foster
            collaboration, innovation, and hands-on experience with cutting-edge
            technologies. 🚀
          </p>
        </motion.div>
      </div>

      {/* Image Section */}
      <div className="flex justify-center px-4">
        <Image
          src="/event.png"
          alt="Events"
          width={1200}
          height={400}
          className="w-[90%] sm:w-full max-w-7xl h-auto"
        />
      </div>

      {/* Button Section */}
      <div className="flex items-center justify-center mt-2 mb-10">
        <a href="/events" className="inline-block">
          <button className="group bg-gradient-to-r from-[#4285F4]/90 to-[#EA4335]/90 text-gray-100 px-10 py-3.5 rounded-3xl transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg focus:outline-none focus:ring-3 focus:ring-white/30">
        <span className="flex items-center justify-center">
          Explore More
          <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
        </span>
          </button>
        </a>
      </div>
    </>
  );
};

export default TwoColumnLayout;

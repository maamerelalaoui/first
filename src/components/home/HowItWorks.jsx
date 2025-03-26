import React from 'react'
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Search , Clock, BarChart3, StarHalf} from "lucide-react";
import { Link } from "react-router-dom";


const HowItWorks = () => {
    const ref = useRef(null);
    const aboutRefSideLeft = useRef(null);
    const isInView = useInView(aboutRefSideLeft);

    

    const side2 = {
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 80 },
    };

    

    return (
        
        <div  className="flex justify-center w-full py-[130px] " style={{background:'oklch(0.932 0.032 255.585)'}}>
            <div>
            <div className="text-center mb-10">
                    <h2 className="text-3xl sm:text-4xl font-bold text-blue-600 mb-4">
                        How It Works
                    </h2>
                    <div className="flex justify-center items-center gap-2">
                        <span className="w-20 h-1 bg-blue-600"></span>
                        <span className="w-6 h-1 bg-blue-600"></span>
                        <span className="w-12 h-1 bg-blue-600"></span>
                    </div>
            </div>
        <motion.div
                    ref={aboutRefSideLeft}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={side2}
                    transition={{ duration: 0.8 }}
                className="flex items-center gap-3 justify-center md:flex-nowrap flex-wrap mx-8  max-w-7xl">
            <div className="relative bg-white  max-w-sm duration-300 group  rounded-xl p-1 border-gray-300 border-2  hover:bg-gray-100 hover:border-gray-400 shadow-lg hover:shadow-2xl  ">
  <div className="relative grid gap-1 pb-8 transform transition-all duration-300 p-7 overflow-hidden">
    <div className="flex items-center justify-center w-20 h-20">
      <img src="/100.png" alt="icon" />
    </div>
    <p className="text-xl font-bold ">Find Your Course</p>
    <p className="text-base">It has survived not only centuries but also leaped into electronic.</p>
    <img src="/shape-8.webp" className="absolute -top-7 left-[260px]" />
  </div>
</div>

<img src="/64.png" className="h-10 hidden md:block" />

<div className="relative bg-white  duration-300 group max-w-sm rounded-xl p-1  border-gray-300 border-2  hover:bg-gray-100 hover:border-gray-400 shadow-lg hover:shadow-2xl ">
  <div className="relative grid gap-1 pb-8 transform transition-all duration-300 p-7 overflow-hidden">
    <div className="flex items-center justify-center w-14 h-14 mb-4">
      <img src="/101.png" alt="icon" />
    </div>
    <p className="text-xl font-bold mb-1">Book A Seat</p>
    <p className="text-base">It has survived not only centuries but also leaped into electronic.</p>
    <img src="/shape-8.webp" className="absolute -top-7 left-[260px]" /> 
  </div>
</div>

<img src="/64.png" className="h-10 hidden md:block" />

<div className="relative duration-300 bg-white  group max-w-sm rounded-xl p-1 border-gray-300 border-2  hover:bg-gray-100 hover:border-gray-400 shadow-lg hover:shadow-2xl ">
  <div className="relative grid gap-1 pb-8 transform transition-all duration-300 p-7 overflow-hidden">
    <div className="flex items-center justify-center w-14 h-14 mb-4">
      <img src="/102.png" alt="icon" />
    </div>
    <p className="text-xl font-bold mb-1">Get Certificate</p>
    <p className="text-base">It has survived not only centuries but also leaped into electronic.</p>
    <img src="/shape-8.webp" className="absolute -top-7 left-[260px]" /> {/* Updated shape position */}
  </div>
</div>

    </motion.div>
    </div>
    </div>

    );
};

export default HowItWorks
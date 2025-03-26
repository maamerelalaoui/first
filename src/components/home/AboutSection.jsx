import React from 'react'
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { CircleCheckBig, ArrowRight ,BookOpen} from "lucide-react";
import { useRef } from "react";
import { Star, Clock, BarChart3, StarHalf} from "lucide-react";
import "boxicons/css/boxicons.min.css";
import { image } from 'framer-motion/client';


 {/*<div>
      <div className='flex'>
        <div><img src="/course-10.jpg" alt="" className='rounded-lg object-cover'/></div>
        <div>
          <p className='text-xl text-blue-600'>Welcome to Edule.</p>
          <h1 className='text-5xl '>You can join with Edule and upgrade your skill for your bright future.</h1>
          <p className='text-md text-gray-700 '>Lorem Ipsum has been the industr’s standard dummy text ever since unknown printer took galley type and scmbled make type specimen book. It has survived not only five centuries.</p>
          <Link to="/sign-in" className="font-semibold text-lg flex items-center gap-2 group">
                        <div className="relative px-6 py-3 flex items-center duration-500 rounded-md bg-blue-600  justify-center overflow-hidden">
    
                        <div className="absolute w-0 h-0 bg-black rounded-full transition-all duration-500 group-hover:w-40 group-hover:h-40 group-hover:scale-150" style={{ zIndex: 1 }}></div>

                        <span className="text-white relative " style={{ zIndex: 10 }}>Find a Course</span>
  
                         </div>
                        </Link>
        </div>
      </div>
      </div>*/}
const AboutSection = () => {
  const ref = useRef(null);

  const aboutRefSideLeft = useRef(null);
    const isInView = useInView(aboutRefSideLeft);

    const side1 = {
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: -80 },
    };
    const data=[
      {
        title: "Improve Quickly",
        desc: "Our platform is designed to accelerate your learning journey with structured courses, interactive exercises, and real-time feedback. Whether you're a beginner or an advanced learner, our adaptive learning methods help you grasp concepts faster and apply them effectively. Track your progress, set learning milestones, and achieve mastery in record time.",
       image:"/12112580.png"

      },
      {
        title: "Portable Program",
        desc: "Learning should never be limited to a single device or location. With our fully optimized platform, you can access your courses on your laptop, tablet, or smartphone anytime, anywhere. Whether you're at home, commuting, or traveling, you’ll always have the flexibility to continue your education without interruptions.",
        image:"/5252556.png"

      },
      {
        title: "Top Instructors",
        desc: "We connect you with industry-leading professionals who bring years of expertise and hands-on experience. Our instructors are dedicated to delivering high-quality lessons, in-depth explanations, and real-world applications. With engaging teaching methods and personalized support, they ensure you gain the knowledge and skills needed to succeed in your field.",
        image:"/12112620.png"

      }
    ]
    {/*src="/f7bd8c8857905893d42b.jpg"*/}
  return (
   
      <div id="about" className="about-section w-full py-[120px]  relative overflow-hidden  bg-blue-100 ">
            <div className="text-center mb-20">
                    <h2 className="text-3xl sm:text-4xl font-bold text-blue-600 mb-4">
                        About us
                    </h2>
                    <div className="flex justify-center items-center gap-2">
                        <span className="w-20 h-1 bg-blue-600"></span>
                        <span className="w-6 h-1 bg-blue-600"></span>
                        <span className="w-12 h-1 bg-blue-600"></span>
                    </div>
                </div>
                <div>
            <div className="flex flex-col lg:flex-row gap-1 items-center justify-center mx-auto max-w-screen-xl ">
              

            <motion.div
                    ref={aboutRefSideLeft}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={side1}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="ml-7 relative flex flex-col items-center lg:items-start  lg:max-w-7xl mt-12 lg:mt-0 "   
                >
                    <div className="relative  hidden lg:block" style={{zIndex:0}}>
                        <img
                            src="/about.webp"
                            className="object-cover w-[600px] h-[400px] rounded-md"
                        />
                        <div className="text-white flex  flex-col items-center justify-center rounded-md bg-blue-700 p-3  absolute top-6 right-6 w-[120px] h-[120px]">
                          <div className='bg-white px-3 py-2 rounded-md -mt-5'>
                        <img
                            src="/8572080.png"
                            className="object-cover  rounded-md"
                        /></div>
                                <p className='font-semibold text-white'>50+ Years Experience</p>
                            </div>
                    </div>
                    
                </motion.div>


                <motion.div
                    ref={aboutRefSideLeft}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={side1}
                    transition={{ duration: 0.8 }}
                    className="text-center lg:w-1/2 lg:text-left w-3/4 lg:px-12 "
                >
                    <div className="mb-8">
                    <p className="text-md text-blue-600 mb-2">
                    OVER 6500+ COURSES AVAILABLE
                        </p>
                        <h1 className="text-4xl font-medium mb-10 ">
                        You can join with Edule and upgrade your skill for your bright future.
                        </h1>
                        <p className="text-base lg:text-lg text-gray-600 mt-4 mb-10">
                        Lorem Ipsum has been the industr’s standard dummy text ever since unknown printer took galley type and scmbled make type specimen book. It has survived not only five centuries.</p>

</div>
                    <div className='flex lg:justify-start justify-center'>
                    <Link to="/sign-in" className="font-semibold text-lg flex items-center gap-2 group " >
                        <div className="relative px-7 py-3 flex items-center duration-500 rounded-md bg-blue-600 justify-center overflow-hidden">
    
                        <div className="absolute w-0 h-0  bg-gray-800 rounded-full transition-all duration-700 opacity-0 group-hover:opacity-100 group-hover:w-40 group-hover:h-40 group-hover:scale-150" style={{ zIndex: 12 }}></div>

                        <span className="text-white relative flex items-end gap-2" style={{ zIndex: 13 }}><span >Find a Course</span> <BookOpen className="font-bold"/></span>
  
                         </div>
                        </Link></div>
                       
                </motion.div>
            </div>
            <div className="flex justify-center w-full mb-20 mt-16">

            <motion.div
                    ref={aboutRefSideLeft}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={side1}
                    transition={{ duration: 0.8 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 justify-center mx-6">
        {data.map((data,i) => (
            <div 
                key={i}
                ref={ref}
                className="relative duration-300 max-w-sm rounded-3xl border-gray-300 border-[1px] hover:bg-gray-100  hover:border-blue-600 shadow-lg group hover:shadow-2xl hover:border-gray-950 bg-white"
                >
    
                <div className="relative grid gap-1 p-5 pb-8 transform transition-all duration-300">
                <div className="flex items-center gap-3">
                  <div className='flex justify-center items-center bg-blue-100 rounded-full p-4'><img src={data.image} className='w-8 h-8' />  </div>
                                       
                <div>
                         <h3 className="text-xl font-bold text-gray-700">
                          {data.title}
                          </h3>
                         </div>
                         </div>
                    <div className="space-y-4 px-2 mt-4">      
                    <p className="text-md text-gray-700 leading-relaxed mt-0 ">{data.desc}</p>
                    </div>
                </div>
                
            </div>
        ))}
    </motion.div>
    </div>
            </div>
        </div>
  )
}

export default AboutSection
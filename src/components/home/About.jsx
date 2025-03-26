import { motion, useInView } from "framer-motion";
import { CircleCheckBig} from "lucide-react";
import { useRef } from "react";
import { Link } from "react-router-dom";


const About = () => {
    const aboutRefSideLeft = useRef(null);
    const isInView = useInView(aboutRefSideLeft);

    const side1 = {
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: -80 },
    };
    const data=[
        {
          title: "Flex Course Plan",
          desc: "Browse through our courses and choose the ones that best suit you to enroll and begin learning.",
          bg: "bg-blue-200"
        },
        {
          title: "Expert Mentors",
          desc: "Learn from industry experts who guide you every step of the way.",
          bg: "bg-green-200"
        },
        {
          title: "24/7 Support",
          desc: "Access help and support anytime, ensuring you're never stuck in your learning journey.",
          bg: "bg-yellow-200"
        },
        {
          title: "Lifetime Access",
          desc: "Enjoy lifetime access to course materials, so you can learn at your own pace whenever you like.",
          bg: "bg-purple-200"
        }
      ]
      

    return (
        <div  className=" w-full py-10 relative overflow-hidden  ">
            <div className="text-center mb-10">
                    <h2 className="text-3xl sm:text-4xl font-bold text-blue-600 mb-4">
                        About us
                    </h2>
                    <div className="flex justify-center items-center gap-2">
                        <span className="w-20 h-1 bg-blue-600"></span>
                        <span className="w-6 h-1 bg-blue-600"></span>
                        <span className="w-12 h-1 bg-blue-600"></span>
                    </div>
                </div>

            <div className="flex flex-col xl:flex-row xl:gap-20 items-center justify-center mx-auto max-w-screen-xl">
                <motion.div
                    ref={aboutRefSideLeft}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={side1}
                    transition={{ duration: 0.8 }}
                    className=" xl:w-1/2 w-full lg:w-2/3 text-left px-6 lg:px-12"
                >
                    <div className="text-left mb-8">
                    <p className="text-md text-blue-600 mb-1 ">
                    OVER 6500+ COURSES AVAILABLE
                        </p>
                        <h1 className="text-4xl font-bold mb-6 text-gray-700">
                        Boost your skills with  {' '}
                            <span className="relative inline-block">
                                <span className="text-blue-500">Eduverse</span>
                                <img
                                    src="/banner-2-title-vector.svg"
                                    alt="Banner Title"
                                    className="absolute left-0 -bottom-3 w-full"
                                />
                            </span>{' '}
                            top courses
                        </h1>
                        <p className="text-base lg:text-lg text-gray-600 mb-2 hidden sm:block">
                        Browse through all of our courses and select the ones that best fit your needs to enroll and begin learning with us! Enjoy flexible and easily accessible learning opportunities.                         </p>
                    </div>

                    <div className="flex justify-center items-center lg:block">
                    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-x-20 gap-y-4 text-sm font-medium text-gray-700 mt-3">
                        {data.map((item,i) => (
                            <motion.div  animate={{ y: [0, -5, 0] }} 
                            transition={{
                            repeat: Infinity, 
                            duration: 1.5, 
                            ease: "easeInOut"}} key={i}>
                            <li className="flex flex-col items-right gap-3 " >
                                <div className={`py-1 px-3 flex items-center gap-3 text-lg lg:text-xl ${item.bg} rounded-md`}>
                                    <CircleCheckBig size={18} />
                                <span className="text-md">{item.title}</span></div>
                                <p className="ml-5 text-base text-gray-600">{item.desc}</p>
                            </li>
                            </motion.div>
                        ))}
                    </ul>
                    </div>
                    
                    <div className='flex justify-start mt-5'>
                      <Link to="/sign-in" className="font-semibold text-lg flex items-center gap-2 group">
                        <div className="relative px-7 py-3 flex items-center duration-500 rounded-md bg-blue-600 justify-center overflow-hidden">
    
                        <div className="absolute w-0 h-0  bg-gray-800 rounded-full transition-all duration-700 opacity-0 group-hover:opacity-100 group-hover:w-40 group-hover:h-40 group-hover:scale-150" style={{ zIndex: 1 }}></div>

                        <span className="text-white relative " style={{ zIndex: 10 }}>Find a Course</span>
  
                         </div>
                        </Link></div>
                </motion.div>

               <motion.div
                    ref={aboutRefSideLeft}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={side1}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="  mt-12 lg:mt-0"   
                >
                    
                    <div className="xl:block hidden" style={{zIndex:0}}>
                        <img
                            src="/1111.png"
                            alt="Main Image"
                            className="object-cover"
                        />
                    </div>
                    
                </motion.div>
            </div>
        </div>
    );
};

export default About;

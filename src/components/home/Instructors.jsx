import { motion,useInView } from "framer-motion";
import { useRef } from "react";

const instructors = [
    { id: 1, person: "Brooklyn Simmons", img: "/instructor-1.jpg", role: "Software Engineer" },
    { id: 2, person: "Leslie Alexander", img: "/instructor-2.jpg", role: "UI/UX Designer" },
    { id: 3, person: "Ronald Richards", img: "/instructor-3.jpg", role: "WordPress Expert" },
    { id: 4, person: "Kristin Watson", img: "/instructor-4.jpg", role: "UI Designer" }
];



const Instructors = () => {
    const aboutRefSideLeft = useRef(null);
    const isInView = useInView(aboutRefSideLeft);

    const side1 = {
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: 80 },
    };
    return (
        <section id="instractors" className=" py-[120px] bg-blue-100 bg-cover  relative bg-center bg-no-repeat overflow-hidden"
    style={{
        backgroundImage: "url('/blotches.avif')", 
        backgroundSize: "cover",
        backgroundPosition: "center"
    }}
>
<div className="absolute inset-0 bg-white/90 backdrop-blur-xl"></div>
            <div className="max-w-screen-xl mx-auto px-6">
                <div className="text-center mb-20 relative" style={{zIndex:100}}>
                    <h2 className="text-3xl sm:text-4xl font-bold text-blue-600 mb-4">
                        Explore Our Expert Instructors
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
                    variants={side1}
                    transition={{ duration: 0.8 }}
                    className='flex justify-center'
                >
                    <div className="grid grid-cols-1 justify-center md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {instructors.map(instructor => (
                        <div
                            key={instructor.id}
                            className="group max-w-sm hover:bg-gray-100 border bg-white relative flex flex-col items-center rounded-xl overflow-hidden  transition-all "
                        >
                            <div className="relative w-full h-[400px] overflow-hidden">
                                <img
                                    src={instructor.img}
                                    alt={instructor.person}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 "
                                />
                            </div>
                    
                            <div className="text-center py-4 ">
                                <h4 className="text-xl  text-blue-600 transition-all duration-300 ">
                                    {instructor.person}
                                </h4>
                                <p className="text-sm text-blue-600 transition-all duration-300  ">
                                    {instructor.role}
                                </p>
                            </div>
                        </div>
                        
                    ))}</div>
                </motion.div>
            </div>
        </section>
    );
};

export default Instructors;

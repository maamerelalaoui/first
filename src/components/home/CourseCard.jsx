import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star, Clock, BarChart3, ExternalLink  } from "lucide-react";
import { Link } from "react-router-dom";


const CourseCard = () => {
    const ref = useRef(null);
    const aboutRefSideLeft = useRef(null);
    const isInView = useInView(aboutRefSideLeft);

    

    const side2 = {
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 80 },
    };

    const courses = [
        {
            id: 1,
            title: "Mastering React",
            price: 23.44,
            image: "https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg",
            desc:'Programming for Everybody (Getting Started with Python)',
            isLive: true,
        },
        {
            id: 2,
            title: "JavaScript Fundamentals",
            price: 19.99,
            image: "https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg",
            desc:'Programming for Everybody (Getting Started with Python)',
            isLive: false,
        },
        {
            id: 3,
            title: "UI/UX Design Basics",
            price: 15.50,
            image: "https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg",
            desc:'Programming for Everybody (Getting Started with Python)',
            isLive: true,
        },{
            id: 4,
            title: "UI/UX Design Basics",
            price: 15.50,
            image: "https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg",
            desc:'Programming for Everybody (Getting Started with Python)',
            isLive: false,
        },{
            id: 5,
            title: "UI/UX Design Basics",
            price: 15.50,
            image: "https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg",
            desc:'Programming for Everybody (Getting Started with Python)',
            isLive: true,
        },{
            id: 6,
            title: "UI/UX Design Basics",
            price: 15.50,
            image: "https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg",
            desc:'Programming for Everybody (Getting Started with Python)',
            isLive: false,
        },
    ];

    return (
        
        <div id="courses" className="flex justify-center w-full pt-[200px] pb-[200px] overflow-hidden bg-cover bg-bottom bg-no-repeat relative"
        style={{
            backgroundImage: "url('/2085.jpg')",  // Set the background image
            backgroundSize: "cover",
            backgroundPosition: "center"
        }}
    >
        <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 1440 320"
  className="wave-shape absolute -top-1 2xl:-top-[40px] w-full transform rotate-180" style={{zIndex:100}}
>
  <path
    fill="oklch(0.932 0.032 255.585)"
    d="M0,192L30,213.3C60,235,120,277,180,277.3C240,277,300,235,360,224C420,213,480,235,540,245.3C600,256,660,256,720,245.3C780,235,840,213,900,224C960,235,1020,277,1080,277.3C1140,277,1200,235,1260,213.3C1320,192,1380,192,1410,192L1440,192L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
  ></path>
</svg>
    <div className="absolute inset-0 bg-white/90 backdrop-blur-2xl"></div>
            <div>
            <div className="text-center mb-20 relative" style={{zIndex:100}}>
                    <h2 className="text-3xl sm:text-4xl font-bold text-blue-600 mb-4">
                        Explore our Courses
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
                className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12  mx-6">
        {courses.map((course) => (
            <div 
                key={course.id}
                ref={ref}
                className="relative duration-300 max-w-sm  rounded-3xl border-gray-300 border-2 hover:bg-gray-100  hover:border-gray-400 shadow-lg group hover:shadow-2xl hover:border-gray-950 transition-all bg-white"
                >
                <div className="absolute inset-0  opacity-0  transition-all duration-300"></div>
    
                <div className="relative grid gap-1 p-5 pb-8 transform transition-all duration-300">

                    <div className="aspect-[330/223] w-full overflow-hidden rounded-xl  relative ">
                        <img
                            src={course.image}
                            alt={course.title}
                            className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                        />
                        {course.isLive ?
                            <span className="text-white rounded-full bg-blue-700 px-3 py-1 absolute top-2 right-2">
                                Live 
                            </span>
                        :<span className="text-white rounded-full bg-blue-700 px-3 py-1 absolute top-2 right-2">
                        Recorded
                    </span>}
                    </div>
    
                    <div className="space-y-4 px-2">
                        <div className="w-full flex items-center justify-between space-x-1 text-sm px-2 mt-3 text-center">
                        <div className="flex items-center gap-1 justify-start">
                         <img src='https://randomuser.me/api/portraits/men/32.jpg' className="w-11 h-11 rounded-full  object-cover"/> <div>
                         <h3 className="text-gray-700">
                          <span >Pamela Foster</span>
                          </h3>
                         </div>
                         </div>
                            <span className="text-center flex hover:bg-blue-600 hover:text-white font-medium bg-blue-100 px-4 py-2 duration-500 rounded-md text-blue-700">Category</span>

                        </div> 
                        
                            
                        <p className=" text-lg hover:text-blue-600">{course.desc}</p>
                        <div className="flex justify-between items-center">
                            <div className="flex items-center gap-1  text-sm"><BarChart3 className="text-blue-600 h-4 w-4"/><span className="text-gray-600">Beginner</span> </div>
                            <div className="flex items-center gap-1  text-sm"><Clock className="text-blue-600 h-4 w-4"/>  <span className="text-gray-600">120 Hours</span></div>
                            </div>

                        <div className="w-full flex gap-1 items-center justify-between text-sm  py-2 rounded text-center">
                        <p className="font-bold text-xl hover:bg-blue-600 hover:text-white duration-500 text-blue-600 py-2 px-4 rounded-md bg-blue-100">${course.price.toFixed(2)}</p>
                        <div className="flex items-center font-medium gap-1 ">
                        <div className='flex justify-start'>
                      <Link to="/sign-in" className="font-semibold text-lg flex items-center gap-2 group/button">
                        <div className="relative px-5 py-2 flex items-center duration-500 rounded-md bg-blue-600 justify-center overflow-hidden">
    
                        <div className="absolute w-0 h-0  bg-gray-800 rounded-full transition-all duration-700 opacity-0 group-hover/button:opacity-100 group-hover/button:w-40 group-hover/button:h-40 group-hover/button:scale-150" style={{ zIndex: 1 }}></div>

                        <span className="text-white relative flex justify-center items-center gap-1 " style={{ zIndex: 10 }}>Read more <ExternalLink /></span>
  
                         </div>
                        </Link></div>                               
                        </div></div>
                    </div>
                </div>
                
            </div>
        ))}
    </motion.div>
    </div>
    </div>

    );
};

export default CourseCard;

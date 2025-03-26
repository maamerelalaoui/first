import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { GraduationCap   } from "lucide-react";
import { useRef } from "react";
import About from "../home/About";



const textContent = {
    header: "About Eduverse",
    welcome: {
        title: "Welcome to Eduverse!",
        description1: "At Eduverse, we believe in the power of learning to transform lives. As an all-in-one learning management platform, we aim to empower educators, students, and institutions to reach their full potential.",
        description2: "Our mission is to simplify education by providing tools that enhance collaboration, streamline course management, and deliver exceptional learning experiences in a digital-first world."
    },
    whoWeAre: {
        title: "Who We Are",
        description1: "Eduverse is a forward-thinking platform designed to bridge the gap between traditional education and the digital age. We provide educators and institutions with the resources they need to create, manage, and deliver courses effectively.",
        description2: "Founded by a team of education enthusiasts and technology experts, Eduverse is built on the belief that accessible and engaging learning tools can create a brighter future for learners worldwide."
    },
    products: {
        title: "What We Offer",
        intro: "Eduverse provides a comprehensive suite of tools and features to revolutionize learning, including:",
        list: [
            { name: "Earn certificates and degrees",bg: "bg-blue-300",image:'/calender-2.svg', description: "Explore all of our courses and pick your suitable ones to enroll and start learning." },
            { name: "Segment Your Learning",bg: "bg-green-300",image:'/segmant.svg', description: "Track progress and performance with detailed analytics that help educators make decisions." },
            { name: "Always Interactive Learning",bg: "bg-yellow-300",image:'/learning-2.svg', description: "Seamlessly create, organize, and engaging courses with intuitive tools for educators." },
            { name: "In-Demand Trendy Topics",bg: "bg-purple-300",image:'/memory-2.svg', description: "Interactive features like quizzes, discussions, and gamification to keep students motivated." }
        ]
        
        
        
    },
    commitment: {
        title: "Our Commitment",
        description: "At Eduverse, we're committed to fostering a love for learning and innovation. Our dedicated team ensures seamless support and continuous improvements, so you can focus on what matters most: education. Whether you're an educator, student, or institution, Eduverse is here to make your journey simpler and more impactful."
    }
};
const stats = [
    { label: "Joyful", value: 98 ,bg:'bg-yellow-300'},
    { label: "Engaging", value: 90 ,bg:'bg-red-500'},
    { label: "Case Study Success", value: 95,bg:'bg-green-400'},
  ];
  
  
  
const AboutPage = () => {
    
    const content = textContent;

    const ref = useRef(null);
    const refSide = useRef(null)
    const isInView = useInView(refSide)
    const side1 = {
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0.3, x: 80 },
    };
    return (
        <section className="mt-[65px]">
            <header className="bg-gradient-to-r   py-6 md:py-20  bg-cover bg-opacity-50 relative bg-center bg-no-repeat overflow-hidden"
        style={{ backgroundImage: `linear-gradient(rgba(29, 78, 216, 0.75), rgba(29, 78, 216, 1)), url(/2091.jpg)` }}>
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl md:text-6xl font-bold text-center text-white">{content.header}</h1>
                </div>
            </header>

            <main className="">
            <section className=" flex py-10  justify-center md:flex-row-reverse  items-center">
                    <About/>
                </section>
            

                <section className="py-16 flex justify-around flex-col items-center md:flex-row p-14 bg-cover bg-opacity-50 relative bg-center bg-no-repeat overflow-hidden"
        style={{ backgroundImage: `linear-gradient(rgba(29, 78, 216, 0.75), rgba(29, 78, 216, 1)), url(/2091.jpg)` }}>
                    <div className="flex flex-col justify-center items-center">
                        <div className=" mb-10">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                    {content.products.title}
                    </h2>
                    <div className="flex justify-center items-center gap-2">
                        <span className="w-20 h-1 bg-white"></span>
                        <span className="w-6 h-1 bg-white"></span>
                        <span className="w-12 h-1 bg-white"></span>
                    </div>
                </div>
                        <p className=" text-white hidden lg:block text-center text-xl font-semibold mb-5"> {content.products.intro} </p>
                        <div className="grid grid-cols-1 xl:grid-cols-2 items-center justify-center gap-6 text-lg text-gray-700">
                          {content.products.list.map((t, i) => (
               <div key={i} className="flex hover:shadow-2xl gap-5 max-w-xl bg-white p-10 items-center rounded-lg transition-all  hover:-translate-y-3 duration-300">
              <div className={`w-[150px] px-3 h-[100px] flex items-center justify-center rounded-md ${t.bg}`}>
                 <img src={t.image} alt="" />
                   </div>
                   <div>
                   <h1 className="text-2xl font-bold text-gray-700  mb-2">{t.name} :</h1>
                   <p className="text-base text-gray-600">{t.description}</p>
                   </div>
                    </div>
                         ))}
                       </div>

                    </div>
                </section>

                

                
                <div className="mb-16">
            <div className=" w-full  mt-10 py-10 px-6 bg-opacity-0 bg-no-repeat md:max-w-[80%] mx-auto flex flex-col justify-center items-center">
            <div className="text-center mb-10">
                    <h2 className="text-3xl sm:text-4xl font-bold text-blue-600 mb-4">
                    {content.welcome.title}
                    </h2>
                    <div className="flex justify-center items-center gap-2">
                        <span className="w-20 h-1 bg-blue-600"></span>
                        <span className="w-6 h-1 bg-blue-600"></span>
                        <span className="w-12 h-1 bg-blue-600"></span>
                    </div>
                </div>
                <div className="flex flex-col xl:flex-row gap-20 items-center justify-center mx-auto max-w-screen-xl">
                    <motion.div
                        ref={refSide}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        variants={side1}
                        transition={{ duration: 0.6 }}
                        className=" hidden xl:flex flex-col items-center lg:items-start  lg:w-1/2 mt-12 lg:mt-0  ml-10 max-w-[50%]  object-cover">
                        <img src='/l.png'
                            width={953}
                            height={989}
                            alt=""
                            className=" border-white  z-[1]"
                        />
                    </motion.div>
                    <motion.div
                        ref={refSide}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        variants={{
                            visible: { opacity: 1, x: 0 },
                            hidden: { opacity: 0.3, x: -100 }
                        }}
                        transition={{ duration: 0.6 }}
                        className="w-full xl:w-2/3 text-left px-6 lg:px-12">
                         <div ref={ref} className="lg:max-w-xl max-w-5xl p-4 space-y-4">
                         <h1 className="text-4xl font-bold mb-6 text-gray-700">
                         Differentiate your classroom What makes {' '}
                            <span className="relative inline-block">
                                <span className="text-blue-500">Eduverse</span>
                                <img
                                    src="/banner-2-title-vector.svg"
                                    alt="Banner Title"
                                    className="absolute left-0 -bottom-3 w-full"
                                />
                            </span>{' '}
                            special?
                        </h1>
                         <p className="text-base lg:text-lg">Our mission is to revolutionize education by providing intuitive and innovative tools that foster seamless collaboration, optimize course management, and create enriching learning experiences. We strive to empower educators, students, and institutions with a dynamic, digital-first platform that enhances accessibility, engagement, and efficiency, ensuring that learning is not only simplified but also more impactful and inspiring in an ever-evolving world.</p>
                                {stats.map((stat, index) => (
                                    <div key={index}>
                                    <div className="flex justify-between mb-1 text-sm font-medium text-gray-700">
                                    <span className="text-md">{stat.label}</span>
                                    <span className="text-md">{stat.value}%</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                                    <motion.div className={`${stat.bg} h-4 rounded-full`}
                                    initial={{ width: "0%" }} // Start from 0 width
                                     animate={{ width: isInView ? `${stat.value}%` : "0%" }} // Animate to full width
                                      transition={{ duration: 1, ease: "easeOut" }} // Smooth animation
                                      />
                                    </div>
                                    </div> ))}
                                    </div>
            
                    </motion.div>
                </div>
            </div>
        </div>



                <section className="mb-16 text-center max-w-7xl mx-auto px-6 py-12 bg-blue-200 rounded-lg shadow-md">
                <h2 className="text-3xl sm:text-4xl font-bold text-blue-600 mb-4">
                    {content.commitment.title}
                    </h2>
                    <div className="flex justify-center items-center gap-2">
                        <span className="w-20 h-1 bg-blue-600"></span>
                        <span className="w-6 h-1 bg-blue-600"></span>
                        <span className="w-12 h-1 bg-blue-600"></span>
                    </div>
  <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto mt-5">
    {content.commitment.description}
  </p>
</section>

            </main>

        </section>
    );
}

export default AboutPage;

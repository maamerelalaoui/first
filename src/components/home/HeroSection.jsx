import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {Star,PenTool,Laptop,BadgeCheck,Atom,BookOpen, Book} from "lucide-react";

import "./style.css";
import HomeNavBar from "./HomeNav";
const HeroSection = () => {
const subTitle = "Online education";
const title = <h2 className="title"><span className="d-lg-block">Learn The</span> Skills You Need <span className="d-lg-block">To Succeed</span></h2>;
const desc = "Free online courses from the world’s Leading experts. join 18+ million Learners today.";


const catagoryList = [
    {
        name: 'Figma',
        link: '#',
    },
    {
        name: 'Adobe XD',
        link: '#',
    },
    {
        name: 'illustration',
        link: '#',
    },
    {
        name: 'Photoshop',
        link: '#',
    },
]


const shapeList = [
    {
        name: '16M Students Happy',
        link: '#',
        className: 'ccl-shape shape-1',
    },
    {
        name: '130K+ Total Courses',
        link: '#',
        className: 'ccl-shape shape-2',
    },
    {
        name: '89% Successful Students',
        link: '#',
        className: 'ccl-shape shape-3',
    },
    {
        name: '23M+ Learners',
        link: '#',
        className: 'ccl-shape shape-4',
    },
    {
        name: '36+ Languages',
        link: '#',
        className: 'ccl-shape shape-5',
    },
]

const Banner = () => {
    return (
        <section className="banner-section relative mt-5 pt-[120px] bg-cover bg-center bg-no-repeat "
        style={{
            backgroundImage: "url('/blotches.avif')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex:10
        }}
    >
    <div className="absolute inset-0 bg-white/80 backdrop-blur-xl" style={{zIndex:-100}}></div>
            <div className="">
            
                <div className="flex w-full justify-center  relative">
                    <div className="lg:grid lg:grid-cols-2 flex flex-col-reverse  grid-cols-1 gap-10 xl:gap-0  lg:justify-between lg:items-center max-w-7xl ">

                            <div className=" w-full  lg:pl-10 lg:text-left  text-center relative mb-[200px] lg:mb-[120px]">
                                <h6 className="text-lg text-blue-600 font-bold">{subTitle}</h6>
                                <p className="text-7xl pl-4 lg:pl-0 font-bold">{title}</p>
                                <p className="text-xl mx-10 lg:mx-0">{desc}</p>
                            <div className='flex mt-16  xl:mt-16 lg:mt-6 justify-center w-full lg:justify-start absolute' style={{ zIndex: 200 }}>
                      <Link to="/sign-in" className="font-semibold text-lg flex items-center gap-2 group " >
                        <div className="relative px-7 py-3 flex items-center duration-500 rounded-md bg-blue-600 justify-center overflow-hidden">
    
                        <div className="absolute w-0 h-0  bg-gray-800 rounded-full transition-all duration-700 opacity-0 group-hover:opacity-100 group-hover:w-40 group-hover:h-40 group-hover:scale-150" style={{ zIndex: 12 }}></div>

                        <span className="text-white relative flex items-end gap-2" style={{ zIndex: 13 }}><span >Find a Course</span> <BookOpen className="font-bold"/></span>
  
                         </div>
                        </Link></div>
                        <motion.img
      src="/e-5.webp"
      className="absolute left-[290px] sm:left-[400px] md:left-[480px] lg:hidden xl:block xl:left-[160px] -bottom-14"
      initial={{ y: 0 }}
      animate={{ y: [-15, 0, -15] }} 
      transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
    />                        </div>
                        <div className="banner-thumb flex xl:justify-start justify-center">

                                <img className="h-15xl" src="/01.png" alt="img" />
                                </div>
                        <div className="all-shapes " style={{zIndex:-10}}></div>
                        
            <div className="cbs-content-list d-none hidden 2xl:block" style={{zIndex:-10}}>
            <ul className="lab-ul">
                    {shapeList.map((val, i) => (
                        <li className={val.className} key={i}><a >{val.name}</a></li>
                    ))}
                </ul>
            </div>
                    </div>
                </div>
            </div>
            <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 1440 320"
  className="wave-shape absolute -bottom-1 lg:-bottom-[10px] xl:-bottom-[40px] 2xl:-bottom-[60px] w-full " style={{zIndex:100}}
>
  <path
    fill="oklch(0.932 0.032 255.585)"
    d="M0,260L30,262C60,264,120,268,180,266C240,264,300,256,360,254C420,252,480,258,540,260C600,262,660,258,720,252C780,246,840,238,900,240C960,242,1020,252,1080,256C1140,260,1200,258,1260,254C1320,250,1380,242,1410,238L1440,236L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
  ></path>
</svg>

        </section>
    );
}
 
    return (
        <Banner/>
        

    );
}

export default HeroSection;

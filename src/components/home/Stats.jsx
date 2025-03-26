import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';  // Import CountUp

import {User, UserPlus} from 'lucide-react';
import { Link } from "react-router-dom";
import "./style.css";


const statistics = [
    { icon: '/stat-1.png', name: "Years of Experience", number: '50' },
    { icon: '/stat-2.png', name: "Classes Completed", number: '8321' },
    { icon: '/stat-3.png', name: "Learners report career benefits", number: '500' },
    { icon: '/stat-4.png', name: "Courses from top instructors", number: '9728' }
];

const Stats = () => {
    const [inView, setInView] = useState(false);
    const achieveList = [
        {
            imgUrl: '/1.png',
            imgAlt: 'achive thumb rajibraj91 rajibraj',
            title: 'Start Teaching Today',
            desc: 'Seamlessly engage technically sound coaborative reintermed goal oriented content rather than ethica',
            btnText: 'Become A Instructor',
            siteLink: '#',
        },
        {
            imgUrl: '/2.png',
            imgAlt: 'achive thumb rajibraj91 rajibraj',
            title: 'If You Join Our Course',
            desc: 'Seamlessly engage technically sound coaborative reintermed goal oriented content rather than ethica',
            btnText: 'Register For Free',
            siteLink: '#',
        },
    ]

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                }
            },
            { threshold: 0.5 } 
        );

        const section = document.querySelector("#statsSection");
        if (section) observer.observe(section);

        return () => {
            if (section) observer.unobserve(section);
        };
    }, []);

    return (
        <section 
    id="statsSection"
    className="py-[100px] px-12 sm:px-[110px] md:px-7 overflow-hidden bg-cover bg-center bg-no-repeat relative"
    style={{
        backgroundImage: "url('/blotches.avif')", 
        backgroundSize: "cover",
        backgroundPosition: "center"
    }}
>
<div className="absolute inset-0 bg-white/90 backdrop-blur-xl"></div>
<div className='mt-5 mb-10 relative z-10'>
        <p className='text-center text-blue-600'>START TO SUCCESS</p>
        <h1 className='text-center mt-1 text-5xl font-semibold'>Achieve Your Goals With Edukon</h1>
    </div>
    
    <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center relative z-10">
        {statistics.map((stat, index) => (
            <div
                key={index}
                className="flex flex-col items-center space-y-4 border-blue-400 text-white py-6 md:py-8 px-4"
            >
                <motion.h3
                    className="text-3xl font-bold"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: inView ? 1 : 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {inView ? (
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1.5 }}
                            whileInView={{ opacity: 1, scale: 1.2 }}
                            className="text-4xl font-bold"
                        >
                          +<CountUp start={0} end={parseInt(stat.number)} duration={2} />
                        </motion.span>
                    ) : (
                        '0'
                    )}
                </motion.h3>
                <h4 className="text-lg text-gray-700 font-base">{stat.name}</h4>
            </div>
        ))}
    </div>

    <div className="achieve-part flex justify-center relative z-10  ">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 max-w-7xl">
            {achieveList.map((val, i) => (
                <div key={i} className='mx-6'>
                    <div className="achieve-item">
                        <div className="achieve-inner">
                            <div className="achieve-thumb">
                                <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
                            </div>
                            <div className="achieve-content">
                                <h4 className='text-xl mb-3 font-bold'>{val.title}</h4>
                                <p className='text-md'>{val.desc}</p>
                                <div className='flex justify-start mt-5'>
                                    <Link to="/sign-in" className="font-semibold text-lg flex items-center gap-2 group">
                                        <div className="relative px-3 py-2 flex items-center duration-200 rounded-md bg-blue-600 justify-center overflow-hidden">
                                            <div className="absolute w-0 h-0  bg-gray-800 rounded-full transition-all duration-700 opacity-0 group-hover:opacity-100 group-hover:w-40 group-hover:h-40 group-hover:scale-150" style={{ zIndex: 1 }}></div>
                                            <span className="text-white relative flex gap-3 items-center" style={{ zIndex: 10 }}>{val.btnText}<UserPlus/></span>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
</section>

    );
};

export default Stats;

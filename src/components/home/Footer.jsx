import {
    ChevronsRight,
    Facebook,
    Linkedin,
    Mail,
    PhoneCall,
    Send,
    Twitter,
    Youtube,
} from "lucide-react";

export default function Footer() {
    return (
        <footer className="relative z-[1]  w-full py-20  inset-0 bg-cover bg-opacity-50  bg-center bg-no-repeat overflow-hidden"
        style={{ backgroundImage: `linear-gradient(rgba(29, 78, 216, 0.80), rgba(29, 78, 216, 1)), url(/2091.jpg)` }}>

            <div className="mx-auto max-w-[90%] md:max-w-[70%]">
                {/* Footer Content */}
                <div className="flex flex-wrap items-start justify-between gap-y-6 border-b-2 pb-6">
                    
                    {/* Left Section - Logo & Contact */}
                    <div className="w-full sm:w-1/2 md:w-1/3 space-y-4 text-center md:text-left">
                        <img 
                            src="https://edutics.temptics.com/assets/img/logo-light.png"
                            alt="Eduverse Logo"
                            className="w-40 mx-auto md:mx-0"
                        />
                        <p className="text-white">
                            Nullam interdum libero vitae pretium aliquam. Donec nibh purus, laoreet in ullamcorper vel, malesuada sit amet enim.
                        </p>
                        <p className="flex items-center justify-center md:justify-start gap-3 text-white">
                            <PhoneCall  />
                            +21268-666-011
                        </p>
                        <p className="flex items-center justify-center md:justify-start gap-3 text-white">
                            <Mail  />
                            info@gmail.com
                        </p>
                    </div>

                    {/* Center Section - Navigation Links */}
                    <div className="flex justify-around w-full sm:w-1/2 md:w-1/3 gap-10">
                        <div>
                            <h6 className="relative font-semibold mb-4 pb-2 text-lg text-white
                                before:absolute before:bottom-0 before:left-0 before:w-4 before:h-[3px] before:bg-gray-500 
                                after:absolute after:bottom-0 after:left-[30px] after:w-10 after:h-[3px] after:bg-white">
                                Quick Links
                            </h6>
                            <ul className="space-y-2 text-white">
                                {["Edutics About", "Contact Us", "Blog & News", "FAQ'S", "Login / Register"].map((item, index) => (
                                    <li key={index}>
                                        <a href="#" className="text-white flex items-center gap-2 text-sm opacity-80 hover:opacity-100 hover:text-gray-300 transition">
                                            <ChevronsRight size={16} className="text-white" />
                                            <span className="text-white">{item}</span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h6 className="relative font-semibold mb-4 pb-2 text-lg
                                before:absolute text-white before:bottom-0 before:left-0 before:w-4 before:h-[3px] before:bg-gray-500 
                                after:absolute after:bottom-0 after:left-[30px] after:w-10 after:h-[3px] after:bg-white">
                                Main Navigation
                            </h6>
                            <ul className="space-y-2">
                                {["Admission", "Research", "Academics", "Student Life", "Conferences"].map((item, index) => (
                                    <li key={index}>
                                        <a href="#" className="flex text-white items-center gap-2 text-sm opacity-80 hover:opacity-100 hover:text-gray-200 transition">
                                            <ChevronsRight size={16} className="text-white"/>
                                            <span className="text-white">{item}</span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Right Section - Newsletter */}
                    <div className=" w-full sm:w-1/2 md:w-1/3 text-center md:text-left">
                        <h6 className="relative font-semibold mb-4 pb-2 text-lg
                            before:absolute text-white before:bottom-0 before:left-0 before:w-4 before:h-[3px] before:bg-gray-500 
                            after:absolute after:bottom-0 after:left-[30px] after:w-10 after:h-[3px] after:bg-white">
                            Newsletter
                        </h6>
                        <p className="mb-4 text-white" >
                            Sign up for our weekly newsletter to get the latest updates.
                        </p>
                        <form className="flex text-white items-center justify-between border rounded-full h-[48px] p-1">
                            <input 
                                type="email"
                                className="border-0 text-white outline-0 bg-transparent text-sm indent-4 w-full placeholder-gray-300"
                                placeholder="Enter your Email Address"
                                required
                            />
                            <button 
                                className="border-0  rounded-full p-2 bg-gray-500 text-white hover:bg-blue-700 transition"
                                aria-label="Subscribe to newsletter">
                                <Send />
                            </button>
                        </form>

                        {/* Social Media Icons */}
                        <div className="flex items-center justify-center md:justify-start mt-4 gap-4">
                            <span className="w-8 bg-white h-1"></span>
                            <p className="text-white">Follow us</p>
                            <div className="flex items-center gap-4">
                                <a href="#" aria-label="Facebook" className=" text-white hover:text-gray-400">
                                    <Facebook className="text-white"/>
                                </a>
                                <a href="#" aria-label="Twitter" className="text-white hover:text-gray-400">
                                    <Twitter className="text-white"/>
                                </a>
                                <a href="#" aria-label="LinkedIn" className="text-white hover:text-gray-400">
                                    <Linkedin className="text-white"/>
                                </a>
                                <a href="#" aria-label="YouTube" className="text-white hover:text-gray-400">
                                    <Youtube className="text-white"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom Section */}
                <div className="flex flex-col text-white md:flex-row items-center justify-between text-center md:text-left mt-6 text-sm opacity-80">
                    <p className="text-white">All Copyright © 2025 by Eduverse, created by MNC Agency</p>
                    <div className="flex items-center gap-4 mt-2 md:mt-0">
                        <a href="#" className="hover:text-gray-400 text-white cursor-pointer transition"><span className="text-white">Terms & Conditions</span></a>
                        <a href="#" className="hover:text-gray-400 text-white cursor-pointer transition"><span className="text-white">Privacy Policy</span></a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

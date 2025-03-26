import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { GraduationCap, LogIn, Menu, UserPlus, X,Info,Home,Heart,BookOpen,Library,Mail,MessageCircle,PhoneCall } from "lucide-react";

//import { Button } from "../ui/button";
//import { useAuth } from "../../context/AuthContext";
//import NavProfile from "../protectedLayoutComps/NavProfile";

const menuItems = [
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const NavLinks = ({ closeMenu }) => {
 // const { user, logout } = useAuth();

  return (
    <>     
    <div className="flex justify-around items-center gap-3">
    <NavLink
          to="/"
          onClick={closeMenu}
          className=" group hover:bg-blue-600 block px-3 py-2 duration-300 text-blue-600  rounded-lg" >
            <div className="flex items-center gap-2">
                <Home size={24} className="text-blue-600 group-hover:text-white"/> 
          <span className="text-xl font-semibold text-blue-600 group-hover:text-white">Home</span>
          </div>
        </NavLink>
    <a href="#courses" onClick={closeMenu}
          className= "hover:text-white group hover:bg-blue-600 block px-3 py-2 duration-300 text-blue-600  rounded-lg">
                        <div className="flex items-center gap-2">

                    <BookOpen size={24} className="text-blue-600 group-hover:text-white"/> 
                      <span className="text-xl font-semibold text-blue-600 group-hover:text-white">Courses</span></div>
        </a>

        <NavLink
          to="/about"
          onClick={closeMenu}
          className="hover:text-white group hover:bg-blue-600 block px-3 py-2 duration-300 text-blue-600  rounded-lg" >
            <div className="flex items-center gap-2">
                <Info size={24} className="text-blue-600 group-hover:text-white"/> 
          <span className="text-xl font-semibold text-blue-600 group-hover:text-white">About</span>
          </div>
        </NavLink>
        <NavLink
          to="/contact"
          onClick={closeMenu}
          className="hover:text-white group hover:bg-blue-600 block px-3 py-2 duration-300 text-blue-600  rounded-lg"
        >
                             <div className="flex items-center gap-2">
                             <PhoneCall size={24} className="text-blue-600 group-hover:text-white"/> 

          <span className="text-xl font-semibold text-blue-600 group-hover:text-white">Contact</span></div>
        </NavLink>
        </div>
      
      {/*user ? (
        <NavProfile user={user} logout={logout} />
      ) : (*/
        <div className="flex justify-center items-center">
        <Link to="/sign-up" className="font-semibold border  text-lg flex  hover:border-black border-blue-600 items-center gap-2 group">
                        <div className="relative flex items-center duration-500   px-5 py-2   bg-blue-600 justify-center overflow-hidden">
    
                        <div className="absolute w-0 h-0  bg-gray-800 rounded-full transition-all duration-700 opacity-0 group-hover:opacity-100 group-hover:w-40 group-hover:h-40 group-hover:scale-150" style={{ zIndex: 1 }}></div>

                        <span className="text-white relative flex gap-1 items-center" style={{ zIndex: 10 }}>
                        <UserPlus /> Sign up 
                        </span>  
                         </div>
                        </Link>
          <Link to="/sign-in" className="font-semibold  text-lg flex items-center gap-2 group border border-blue-600 hover:border-black">
                        <div className="relative flex items-center duration-500   px-5 py-2  bg-white justify-center overflow-hidden">
                        <div className="absolute w-0 h-0  bg-gray-800 rounded-full transition-all duration-700 opacity-0 group-hover:opacity-100 group-hover:w-40 group-hover:h-40 group-hover:scale-150" style={{ zIndex: 1 }}></div>
                        <span className=" duration-500 text-blue-700 relative group-hover:text-white flex gap-1 items-center" style={{ zIndex: 10 }}>
                        <LogIn /> Log in
                        </span>  
                         </div>
                        </Link>
        </div>
      /*)*/}
    </>
  );
};

const MobileMenu = ({ isMenuOpen, closeMenu }) => {
  return (
    isMenuOpen && (
      <div className="flex flex-col gap-2 mt-4 py-3">     
    <NavLink
          to="/"
          onClick={closeMenu}
          className=" group hover:bg-blue-600 block px-3 py-2 duration-300 text-blue-600  rounded-lg" >
            <div className="flex items-center gap-2">
                <Home size={24} className="text-blue-600 group-hover:text-white"/> 
          <span className="text-xl font-semibold text-blue-600 group-hover:text-white">Home</span>
          </div>
        </NavLink>
    <a href="#courses" onClick={closeMenu}
          className= "hover:text-white group hover:bg-blue-600 block px-3 py-2 duration-300 text-blue-600  rounded-lg">
                        <div className="flex items-center gap-2">

                    <BookOpen size={24} className="text-blue-600 group-hover:text-white"/> 
                      <span className="text-xl font-semibold text-blue-600 group-hover:text-white">Courses</span></div>
        </a>

        <NavLink
          to="/about"
          onClick={closeMenu}
          className="hover:text-white group hover:bg-blue-600 block px-3 py-2 duration-300 text-blue-600  rounded-lg" >
            <div className="flex items-center gap-2">
                <Info size={24} className="text-blue-600 group-hover:text-white"/> 
          <span className="text-xl font-semibold text-blue-600 group-hover:text-white">About</span>
          </div>
        </NavLink>
        <NavLink
          to="/contact"
          onClick={closeMenu}
          className="hover:text-white group hover:bg-blue-600 block px-3 py-2 duration-300 text-blue-600  rounded-lg"
        >
                             <div className="flex items-center gap-2">
                             <PhoneCall size={24} className="text-blue-600 group-hover:text-white"/> 

          <span className="text-xl font-semibold text-blue-600 group-hover:text-white">Contact</span></div>
        </NavLink>
      
      {/*user ? (
        <NavProfile user={user} logout={logout} />
      ) : (*/
        <div className="flex justify-start items-center">
        <Link to="/sign-up" className="font-semibold border text-lg flex  hover:border-black border-blue-600 items-center gap-2 group">
                        <div className="relative flex items-center duration-500   px-5 py-2   bg-blue-600 justify-center overflow-hidden">
    
                        <div className="absolute w-0 h-0  bg-gray-800 rounded-full transition-all duration-700 opacity-0 group-hover:opacity-100 group-hover:w-40 group-hover:h-40 group-hover:scale-150" style={{ zIndex: 1 }}></div>

                        <span className="text-white relative flex gap-1 items-center" style={{ zIndex: 10 }}>
                        <UserPlus /> Sign up 
                        </span>  
                         </div>
                        </Link>
          <Link to="/sign-in" className="font-semibold  text-lg flex items-center gap-2 group border border-blue-600 hover:border-black">
                        <div className="relative flex items-center duration-500   px-5 py-2  bg-white justify-center overflow-hidden">
                        <div className="absolute w-0 h-0  bg-gray-800 rounded-full transition-all duration-700 opacity-0 group-hover:opacity-100 group-hover:w-40 group-hover:h-40 group-hover:scale-150" style={{ zIndex: 1 }}></div>
                        <span className=" duration-500 text-blue-700 relative group-hover:text-white flex gap-1 items-center" style={{ zIndex: 10 }}>
                        <LogIn /> Log in
                        </span>  
                         </div>
                        </Link>
        </div>
      /*)*/}
    </div>
    )
  );
};

const HomeNavBar = () => {
  //const { user } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    closeMenu();
  }, [location]);

  return (
    <nav className="fixed top-0 left-0  w-full py-3 bg-white  bg-white/10 backdrop-blur-lg backdrop-brightness-125 border border-white/20 shadow-lg" style={{zIndex:'500'}}>
      <div className="max-w-7xl mx-auto relative flex items-center justify-between h-full px-4">

        <Link to="/" className="flex lg:hidden items-center ">
          <GraduationCap className="h-10 w-8 text-blue-600" />
          <span className="ml-2 text-2xl font-bold text-blue-600">Eduverse</span>
        </Link>

        <div className="hidden lg:flex justify-between items-center gap-4 w-full">
        <Link to="/" className="flex items-center ">
          <GraduationCap className="h-10 w-8 text-blue-600" />
          <span className="ml-2 text-2xl font-bold text-blue-600">Eduverse</span>
        </Link>
          <NavLinks />
        </div>

        <button
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
          className="lg:hidden p-2 rounded-md text-blue-600 hover:text-blue-900 hover:bg-blue-100 focus:outline-none"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <MobileMenu isMenuOpen={isMenuOpen} closeMenu={closeMenu} />
    </nav>
  );
};

export default HomeNavBar;

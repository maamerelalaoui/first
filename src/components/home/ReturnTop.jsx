import { useState, useEffect } from "react";

export const ReturnTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Function to check scroll position and toggle button visibility
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);  // Show the button when the user scrolls down 300px
      } else {
        setIsVisible(false); // Hide the button when the user is at the top
      }
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Function to scroll to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling effect
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 p-1  w-10 h-10 flex items-center justify-center bg-blue-600  text-white rounded-full shadow-lg transition-opacity ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      style={{ transition: "opacity 0.3s ease-in-out",zIndex:1000 }}
    >
      <img src="/arrow.png" alt="" />
    </button>
  );
};



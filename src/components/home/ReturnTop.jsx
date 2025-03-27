import { useState, useEffect } from "react";

export const ReturnTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-[90px] right-6 p-1  w-10 h-10 flex items-center justify-center bg-blue-600  text-white rounded-full shadow-lg transition-opacity ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      style={{ transition: "opacity 0.3s ease-in-out",zIndex:1000 }}
    >
      <img src="/arrow.png" alt="" />
    </button>
  );
};



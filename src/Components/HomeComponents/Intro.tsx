import React, { useState, useEffect } from "react";
import "./IntroStyles.css"

const Intro = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  // Handle scroll event and update the scroll position
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="w-full flex items-center  bg-cover bg-center  my-24 py-52"
      
    >
      <div className="w-full h-full   text-white">
        <h1 className=" font-bold md:text-5xl text-center ">ფენიქსის შექმნილი თამაშები</h1>
      </div>
    </div>
  );
};

export default Intro;

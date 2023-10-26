import React, { useState, useEffect } from "react";
import "./Header.css";
import Navbar from "../Navbar/Navbar";
const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPosition, setPrevScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.scrollY;
      if (
        currentScrollPosition <= 60 ||
        currentScrollPosition < prevScrollPosition
      ) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
      setPrevScrollPosition(currentScrollPosition);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPosition]);
  return (
    <section className={`header ${isVisible ? "visible" : "hidden"}`}>
      <div id="poweredBy">
        <h1>Sony</h1>
      </div>
      <Navbar />
    </section>
  );
};

export default Header;

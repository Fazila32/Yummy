import React, { useState, useEffect } from "react";
import "./ScrollTop.css";
import { AiOutlineArrowUp } from "react-icons/ai";

function ScrollTop() {
  const [backtoTopButton, setbacktoTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setbacktoTopButton(true);
      } else {
        setbacktoTopButton(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 50,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {backtoTopButton && (
        <button
          className="scroll-top d-flex align-items-center justify-content-center"
          onClick={scrollUp}
        >
          <AiOutlineArrowUp size={20} />
        </button>
      )}
    </div>
  );
}

export default ScrollTop;

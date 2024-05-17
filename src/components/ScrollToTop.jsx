import React, { useState, useEffect } from "react";

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show scroll-to-top button when user scrolls down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  // Scroll to top when button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button className="scroll-to-top" onClick={scrollToTop}>
          <i class="fa-solid fa-circle-up"></i> Scroll to Top
        </button>
      )}
    </>
  );
};

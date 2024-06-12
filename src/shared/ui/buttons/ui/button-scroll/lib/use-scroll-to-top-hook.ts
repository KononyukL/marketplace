import { useEffect, useRef, useState } from "react";

export const useScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const prevScrollPos = useRef(0);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      const currentScrollPos = window.pageYOffset;
      if (currentScrollPos > 50 && currentScrollPos > prevScrollPos.current) {
        setIsVisible(true);
      } else if (isVisible && currentScrollPos < 50) {
        setIsVisible(false);
      }

      prevScrollPos.current = currentScrollPos;
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, [isVisible]);

  return { scrollToTop, isVisible };
};

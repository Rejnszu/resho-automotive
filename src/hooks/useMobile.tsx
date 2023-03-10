import React, { useState, useEffect } from "react";

const useMobile = (size: number) => {
  const [isMobile, setIsMobile] = useState(undefined);
  useEffect(() => {
    function checkIfMobile() {
      setIsMobile(window.innerWidth < size);
    }
    window.addEventListener("resize", checkIfMobile);
    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  });
  return isMobile;
};

export default useMobile;

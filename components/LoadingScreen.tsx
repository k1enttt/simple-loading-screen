"use client";
import { gsap } from "gsap";
import { useEffect } from "react";

const LoadingScreen = () => {
  useEffect(() => {
    gsap.fromTo(
      "#loading-screen",
      { opacity: 1 },
      {
        duration: 1,
        opacity: 0,
        display: "none",
        delay: 2,
      }
    );
    gsap.fromTo(
      ".loading-text",
      { scale: 1 },
      {
        duration: 1,
        scale: 1.1,
        delay: 2,
      }
    );
  }, []);

  return (
    <div
      id="loading-screen"
      className="absolute bg-gray-900 top-0 left-0 w-full h-screen text-8xl flex items-center justify-center"
    >
      <div className="loading-text">Hello, guys!</div>
    </div>
  );
};

export default LoadingScreen;

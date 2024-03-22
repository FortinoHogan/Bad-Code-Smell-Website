import React, { useEffect } from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import { useTheme } from "../Context/DarkModeContext";
import sr from "../Service/ScrollReveal";

const Dispensables = () => {
  const { darkMode } = useTheme();

  useEffect(() => {
    const config = {
      origin: "bottom",
      duration: 1000,
      delay: 150,
      distance: "100px",
      easing: "ease",
    };
    sr.reveal(`.content`, config);
  });
  return (
    <div className={`${darkMode ? "bgBlackDM " : ""} min-h-screen`}>
      <Navbar />
      <div className="content flex items-center justify-center flex-col min-h-screen relative overflow-hidden">
        {darkMode ? (
          ""
        ) : (
          <span className="hidden absolute bg-radial-gradient opacity-[.15] pointer-events-none lg:inline-flex left-[-15%] top-7 w-[640px] h-[640px]"></span>
        )}
        <h1
          className={`${darkMode ? "whiteDM" : "blackLM"} text-7xl font-bold`}
        >
          Dispensables
        </h1>
      </div>
      <Footer />
    </div>
  );
};

export default Dispensables;

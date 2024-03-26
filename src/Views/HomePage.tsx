import React, { useEffect } from "react";
import Navbar from "../Components/Navbar/Navbar";
import { useTheme } from "../Context/DarkModeContext";
import sr from "../Service/ScrollReveal";
import Footer from "../Components/Footer/Footer";
import ReferenceCard from "../Components/ReferenceCard/ReferenceCard";

const HomePage = () => {
  const { darkMode } = useTheme();
  useEffect(() => {
    const config = {
      origin: "bottom",
      duration: 1000,
      delay: 150,
      distance: "100px",
      easing: "ease",
    };

    sr.reveal(`.home`, config);
  });

  return (
    <div className={`${darkMode ? "bgBlackDM " : ""} min-h-screen`}>
      <Navbar />
      <div className="home flex items-center pt-48 justify-center flex-col gap-5 min-h-screen mx-8">
        {darkMode ? (
          ""
        ) : (
          <span className="hidden absolute bg-radial-gradient opacity-[.15] pointer-events-none lg:inline-flex left-[-15%] top-7 w-[640px] h-[640px]"></span>
        )}
        <h1
          className={`${
            darkMode ? "whiteDM" : "blackLM"
          } text-8xl font-bold break-words text-center`}
        >
          Bad Code Smell
        </h1>
        <h2
          className={`${
            darkMode ? "redDM" : "redLM"
          } text-7xl font-bold break-words text-center`}
        >
          Code Reengineering Project
        </h2>
        <div className="flex items-center justify-center flex-col mt-10 gap-2">
          <p className={`${darkMode ? "whiteDM" : "blackLM"} text-2xl`}>
            COMP6106001 - Code Reengineering
          </p>
          <p className={`${darkMode ? "whiteDM" : "blackLM"} text-2xl`}>
            Lecturer: Rezki Yunanda, S.Kom., M.Kom(D6665)
          </p>
        </div>
      </div>
      <div className="home relative flex flex-col items-center justify-center min-h-screen overflow-hidden">
        {darkMode ? (
          ""
        ) : (
          <span className="hidden absolute bg-radial-gradient opacity-[.15] pointer-events-none lg:inline-flex right-[-20%] top-0 w-[640px] h-[640px]"></span>
        )}
        <h1
          className={`${darkMode ? "whiteDM" : "blackLM"} text-7xl font-bold`}
        >
          Referensi
        </h1>
        <div className="flex items-center justify-center gap-10 mx-20 mt-16 referenceContainer">
          <ReferenceCard
            title="refactoring.guru"
            img="refactorGuru.png"
            href="https://refactoring.guru/refactoring/smells"
            text="For image source and content"
          />
          <ReferenceCard
            title="github.com"
            img="github.png"
            href="https://github.com/mrp130/smell"
            text="For code source"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;

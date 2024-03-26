import React, { useEffect } from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import { useTheme } from "../Context/DarkModeContext";
import sr from "../Service/ScrollReveal";
import { useNavigate } from "react-router-dom";
import Anchor from "../Components/Anchor/Anchor";
import data from "../Service/data";

const ContentPage = () => {
  const { darkMode } = useTheme();
  const nav = useNavigate();

  useEffect(() => {
    const config = {
      origin: "bottom",
      duration: 1000,
      delay: 150,
      distance: "100px",
      easing: "ease",
    };
    sr.reveal(`.title`, config);
    sr.reveal(`.card1`, { ...config, origin: "right", delay: 450 });
    sr.reveal(`.card2`, { ...config, origin: "left", delay: 450 });
  });

  return (
    <div className={`${darkMode ? "bgBlackDM " : ""} min-h-screen`}>
      <Navbar />
      <div className="flex items-center justify-center flex-col min-h-screen relative overflow-hidden">
        {darkMode ? (
          ""
        ) : (
          <span className="hidden absolute bg-radial-gradient opacity-[.15] pointer-events-none lg:inline-flex left-[-15%] top-7 w-[640px] h-[640px]"></span>
        )}
        <h1
          className={`${
            darkMode ? "whiteDM" : "blackLM"
          } title mt-48 text-7xl font-bold`}
        >
          Materi
        </h1>
        <div className="flex items-center flex-col justify-center gap-36 mt-48 w-2/3">
          <div className="card1 flex items-center justify-center w-full">
            <div className="w-full text-start flex flex-col gap-10">
              <h1
                className={`${
                  darkMode ? "whiteDM" : "blackLM"
                } text-5xl font-bold`}
              >
                Change Preventers
              </h1>
              <p
                className={`${
                  darkMode ? "whiteDM" : "blackLM"
                }  text-2xl break-words`}
              >
                {data[0].description}
              </p>
              <Anchor
                href="/changePreventers"
                className={`${
                  darkMode ? "bg-1A202C" : "bg-white"
                } card w-fit px-5 py-3 redLM tracking-wider font-bold transform transition-transform group-hover:-translate-y-1 group-hover:-translate-x-1 group-focus:-translate-y-1 group-focus:-translate-x-1`}
                classNameA="group w-fit border border-red-600 focus:outline-none"
              >
                VIEW CONTENT
              </Anchor>
            </div>
            <img
              src={require("../assets/Img/changePreventers.png")}
              alt="changPreventers"
              className="w-48"
            />
          </div>
          <div className="card2 flex items-center justify-center w-full gap-3">
            <img
              src={require("../assets/Img/dispensables.png")}
              alt="dispensables"
              className="w-48"
            />
            <div className="w-full text-end flex flex-col gap-10">
              <h1
                className={`${
                  darkMode ? "whiteDM" : "blackLM"
                } text-5xl font-bold`}
              >
                Dispensables
              </h1>
              <p
                className={`${
                  darkMode ? "whiteDM" : "blackLM"
                }  text-2xl break-words`}
              >
                {data[1].description}
              </p>
              <div className="flex self-end">
                <Anchor
                  href="/dispensables"
                  className={`${
                    darkMode ? "bg-1A202C" : "bg-white"
                  } card w-fit px-5 py-3 redLM tracking-wider font-bold transform transition-transform group-hover:-translate-y-1 group-hover:-translate-x-1 group-focus:-translate-y-1 group-focus:-translate-x-1`}
                  classNameA="group w-fit border border-red-600 focus:outline-none"
                >
                  VIEW CONTENT
                </Anchor>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContentPage;

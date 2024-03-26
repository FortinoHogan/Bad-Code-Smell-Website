import React, { useEffect, useRef } from "react";
import { IContentCard } from "./IContentCard";
import sr from "../../Service/ScrollReveal";
import { useTheme } from "../../Context/DarkModeContext";
const ContentCard = (props: IContentCard) => {
  const { title, img, onClick, delay } = props;
  const { darkMode } = useTheme();
  const cardRef = useRef(null);

  useEffect(() => {
    const config = {
      origin: "bottom",
      duration: 1000,
      delay: delay,
      distance: "100px",
      easing: "ease",
    };
    sr.reveal(cardRef.current, config);
  }, [delay]);

  return (
    <div
      ref={cardRef}
      className={`${
        darkMode ? "border-[#ff2d20]" : "border-[#171923]"
      } group border focus:outline-none w-full`}
      onClick={onClick}
    >
      <div
        className={`${
          darkMode ? "border-[#ff2d20] bg-1A202C" : "border-[#171923] bg-white"
        } border w-full p-10 tracking-wider font-bold transform transition-transform group-hover:-translate-y-1 group-hover:-translate-x-1 group-focus:-translate-y-1 group-focus:-translate-x-1 flex items-center gap-10`}
      >
        <img
          src={require(`../../assets/Img/${img}`)}
          alt="image"
          className="contentImg w-60"
        />
        <div>
          <h1
            className={`${
              darkMode ? "whiteDM" : "blackLM"
            } text-3xl font-semibold`}
          >
            {title}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ContentCard;

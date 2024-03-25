import React from "react";
import { IReferenceCard } from "./IReferenceCard";
import Anchor from "../Anchor/Anchor";
import { useTheme } from "../../Context/DarkModeContext";

const ReferenceCard = (props: IReferenceCard) => {
  const { img, title, text, href } = props;
  const { darkMode } = useTheme();
  return (
    <Anchor
      className={`${
        darkMode
          ? "border-[#ff2d20] bg-1A202C whiteDM"
          : "border-[#171923] bg-white"
      } flex flex-col items-center justify-center p-10 border-2 rounded-lg gap-5 referenceCard`}
      href={href}
      target="_blank"
    >
      <h1 className="text-3xl font-bold">{title}</h1>
      <img
        src={require("../../assets/Img/" + img)}
        alt="image"
        className="referenceImg"
      />
      <p className="text-xl">{text}</p>
    </Anchor>
  );
};

export default ReferenceCard;

import React from "react";
import { useTheme } from "../../Context/DarkModeContext";

const Footer = () => {
  const { darkMode } = useTheme();
  return (
    <footer className={`${darkMode ? "whiteDM" : "blackLM"} py-10`}>
      <div className="flex items-center justify-center text-xl break-words text-center px-2">
        &copy; This Website was created by Fortino Hogan Hadiprodjo & Kennard
        Norbert Sudiardjo
      </div>
    </footer>
  );
};

export default Footer;

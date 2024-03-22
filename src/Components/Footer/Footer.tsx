import React from "react";
import { useTheme } from "../../Context/DarkModeContext";

const Footer = () => {
  const { darkMode } = useTheme();
  return (
    <footer className={`${darkMode ? "whiteDM" : "blackLM"} py-10`}>
      <div className="flex items-center justify-center">
        &copy; This Website is Created By Fortino Hogan Hadiprodjo & Kennard
        Norbert Sudiardjo
      </div>
    </footer>
  );
};

export default Footer;

import React, { useState } from "react";
import Anchor from "../Anchor/Anchor";
import { useTheme } from "../../Context/DarkModeContext";
import "./Navbar.css";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { darkMode, toggleDarkMode } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const nav = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavContent = () => {
    nav("/content");
  };

  return (
    <header
      className={`${
        darkMode ? "bgBlackDM " : "bgWhiteLM"
      } w-full fixed top-0 left-0 z-50`}
    >
      <nav className="pt-10 pb-8 px-20 flex items-center justify-between z-50">
        <Anchor
          href="/"
          className={`${darkMode ? "redDM" : "redLM"} font-semibold text-5xl`}
        >
          Code Reengineering
        </Anchor>
        <div
          className="navMenu"
          style={{
            right: isMenuOpen ? "0" : "-100%",
            backgroundColor: darkMode ? "var(--blackDM)" : "var(--whiteLM)",
          }}
        >
          <div className="navList flex gap-20">
            <Anchor
              href="/"
              className={`${
                darkMode ? "whiteDM" : "blackLM"
              } text-2xl hover:text-red-500 transition`}
            >
              Home
            </Anchor>
            <Anchor
              href="https://github.com/FortinoHogan/Bad-Code-Smell"
              className={`${
                darkMode ? "whiteDM" : "blackLM"
              } text-2xl hover:text-red-500 transition`}
              target="_blank"
            >
              Repository
            </Anchor>
            <div className="dropdownContainer relative z-50 inline-block">
              <Button
                onClick={handleNavContent}
                text="Content"
                className={`${
                  darkMode ? "whiteDM" : "blackLM"
                } text-2xl w-fit hover:text-red-500 transition`}
              />
              <div
                className={`${
                  darkMode ? "bgBlackDM" : "bgWhiteLM"
                } dropdownMenus absolute flex flex-col w-72 px-5 rounded-lg`}
                style={{ display: isMenuOpen ? "none" : "" }}
              >
                <Anchor
                  href="/changePreventers"
                  className={`${
                    darkMode ? "whiteDM" : "blackLM"
                  } text-2xl py-3 w-full border-b-2 hover:text-red-500 transition`}
                >
                  Change Preventers
                </Anchor>
                <Anchor
                  href="/dispensables"
                  className={`${
                    darkMode ? "whiteDM" : "blackLM"
                  } text-2xl py-3 w-full hover:text-red-500 transition`}
                >
                  Dispensables
                </Anchor>
              </div>
            </div>
          </div>
          <div
            className={`${darkMode ? "whiteDM" : ""} closeBtn text-3xl`}
            onClick={toggleMenu}
          >
            <i className="ri-close-line size-24"></i>
          </div>
        </div>
        <div className="flex items-center gap-10">
          <label className="switch">
            <input
              type="checkbox"
              onChange={toggleDarkMode}
              checked={darkMode}
            ></input>
            <span
              className="slider round"
              style={{
                backgroundColor: darkMode ? "var(--whiteDM)" : "#CCC",
              }}
            ></span>
          </label>
          <div
            className={`${darkMode ? "whiteDM" : ""} hamburgerBtn text-3xl`}
            onClick={toggleMenu}
          >
            <i className="ri-menu-line"></i>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

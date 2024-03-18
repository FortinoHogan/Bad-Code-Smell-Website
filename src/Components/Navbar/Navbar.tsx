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
  }

  return (
    <header className="w-full fixed top-0 left-0 z-50">
      <nav className="py-8 px-20 flex items-center justify-between">
        <Anchor href="/" className="redLM font-semibold text-5xl">
          Code Reengineering
        </Anchor>
        <div className="navMenu" style={{ right: isMenuOpen ? "0" : "-100%" }}>
          <div className="navList flex gap-20">
            <Anchor href="/" className="blackLM text-2xl">
              Home
            </Anchor>
            <Anchor href="/" className="blackLM text-2xl">
              Repository
            </Anchor>
            <div className="dropdownContainer relative z-10 inline-block">
              <Button onClick={handleNavContent} text="Content" className="blackLM text-2xl w-fit" />
              <div className="dropdownMenus absolute flex flex-col w-72 px-5 rounded-lg">
                <Anchor
                  href="/"
                  className="blackLM text-2xl py-3 w-full border-b-2"
                >
                  Change Preventers
                </Anchor>
                <Anchor href="/" className="blackLM text-2xl py-3 w-full">
                  Dispensables
                </Anchor>
              </div>
            </div>
          </div>
          <div className="closeBtn text-3xl" onClick={toggleMenu}>
            <i className="ri-close-line size-24"></i>
          </div>
        </div>
        <label className="switch">
          <input
            type="checkbox"
            onChange={toggleDarkMode}
            checked={darkMode}
          ></input>
          <span className="slider round"></span>
        </label>
        <div className="hamburgerBtn text-3xl" onClick={toggleMenu}>
          <i className="ri-menu-line"></i>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

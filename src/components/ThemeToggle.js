import React from "react";
import Toggle from "react-toggle";
import "react-toggle/style.css";
import { BiSun, BiMoon } from "react-icons/bi";
import "./ThemeToggle.css";

function ThemeToggle({ theme, toggleTheme }) {
  const btn_size = 15;
  return (
    <Toggle
      onChange={toggleTheme}
      checked={theme === "dark"}
      icons={{
        checked: <BiMoon size={btn_size} />,
        unchecked: <BiSun size={btn_size} />,
      }}
      className="custom"
    />
  );
}

export default ThemeToggle;

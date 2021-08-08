import { useEffect, useState } from "react";
import { trackGA } from "../util/functions";

export const useDarkMode = () => {
  const [theme, setTheme] = useState("light");
  const [mountedComponent, setMountedComponent] = useState(false);

  const setMode = (mode) => {
    window.localStorage.setItem("theme", mode);
    setTheme(mode);
  };

  const themeToggler = () => {
    setMode(theme === "light" ? "dark" : "light");
    trackGA("Theme", `Switch to ${theme === "light" ? "dark" : "light"} mode`);
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    localTheme && setTheme(localTheme);
    setMountedComponent(true);
  }, []);
  return [theme, themeToggler, mountedComponent];
};

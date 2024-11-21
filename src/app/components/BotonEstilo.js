"use client";
import { useState, useEffect } from "react";
import { Switch } from "@material-tailwind/react";

const BotonEstilo = () => {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const preferredTheme = storedTheme || "dark";
    setTheme(preferredTheme);
    document.documentElement.classList.add(preferredTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <div className="flex items-center">
      <label htmlFor="theme-switch" className="mr-2 text-sm">
        {theme === "light" ? "☀️" : "🌙"}
      </label>
      <Switch
        id="theme-switch"
        ripple={false}
        checked={theme === "dark"}
        onChange={toggleTheme}
        className="h-full w-full bg-dark1 checked:bg-light3"
        containerProps={{
          className: "w-11 h-6",
        }}
        circleProps={{
          className: "before:hidden left-0.5 border-none bg-light3 dark:bg-dark1",
        }}
      />
    </div>
  );
};

export default BotonEstilo;
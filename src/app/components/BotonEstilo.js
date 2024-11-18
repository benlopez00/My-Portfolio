import { useState, useEffect } from "react";

const BotonEstilo = () => {
  const [theme, setTheme] = useState("light");

  // Cargar el tema desde el localStorage al iniciar
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "light";
    setTheme(storedTheme);
    document.documentElement.classList.add(storedTheme);
  }, []);

  // Cambiar el tema y guardar en localStorage
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-lightPrimary dark:bg-darkPrimary text-lightText dark:text-darkText"
    >
      {theme === "light" ? "🌙 Modo Oscuro" : "☀️ Modo Claro"}
    </button>
  );
};

export default BotonEstilo;

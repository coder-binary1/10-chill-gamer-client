import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext(null);

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  const ThemeValues = {
    theme,
    setTheme,
  };

  return (
    <ThemeContext.Provider value={ThemeValues}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;

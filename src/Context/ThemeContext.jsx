// cpc(create,Provider,consume)

import { createContext, useState } from "react";

export const ThemeContext = createContext();

export function ThemeContextProvider({ children }) {
  const [color, setColor] = useState("light");

  const toggleTheme = () => {
    setColor(color === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ color, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

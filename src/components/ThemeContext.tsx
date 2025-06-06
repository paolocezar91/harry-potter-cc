import React, { createContext, useContext, useEffect, useState } from "react";
import { type Theme, themes } from "../themes";

type ThemeContextType = {
  theme: Theme;
  setTheme: (house: keyof typeof themes) => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>(themes.gryffindor);
  
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as keyof typeof themes;
    if (savedTheme) setTheme(themes[savedTheme]);
  }, []);

  const updateTheme = (house: keyof typeof themes) => {
    localStorage.setItem("theme", house);
    setTheme(themes[house]);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme: updateTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within a ThemeProvider");
  return context;
};
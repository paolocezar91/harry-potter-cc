import { useTheme } from "./ThemeContext";

export const GlobalStyles = () => {
  const { theme } = useTheme();

  return (
    <style jsx="true" global="true">{`
      :root {
        --primary: ${theme.primary};
        --secondary: ${theme.secondary};
        --background: ${theme.background};
        --text: ${theme.text};
      }
      body {
        background: var(--background);
        color: var(--text);
      }
    `}</style>
  );
};
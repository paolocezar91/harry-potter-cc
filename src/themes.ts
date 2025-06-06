export type Theme = {
  name: string;
  primary: string;
  secondary: string;
  background: string;
  text: string;
};

export const themes: Record<string, Theme> = {
  gryffindor: {
    name: "Gryffindor",
    primary: "#740001",
    secondary: "#D3A625",
    background: "#FFF5E5",
    text: "#2E2E2E",
  },
  hufflepuff: {
    name: "Hufflepuff",
    primary: "#FFDB00",
    secondary: "#000000",
    background: "#FFFDE7",
    text: "#333333",
  },
  ravenclaw: {
    name: "Ravenclaw",
    primary: "#0E1A40",
    secondary: "#946B2D",
    background: "#F0F7FF",
    text: "#1A1A1A",
  },
  slytherin: {
    name: "Slytherin",
    primary: "#1A472A",
    secondary: "#5D5D5D", // Silver
    background: "#F0FFF0",
    text: "#2E2E2E",
  },
};
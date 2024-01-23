import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

interface LightTheme {
  pageBackground: string;
  titleColor: string;
}

interface DarkTheme {
  pageBackground: string;
  titleColor: string;
}

interface ThemeContextProps {
  theme: string;
  setTheme: Dispatch<SetStateAction<"light" | "dark">>;
  themes: {
    light: LightTheme;
    dark: DarkTheme;
  };
}

const themes = {
  light: {
    pageBackground: "#E6E6E6",
    titleColor: "#393939",
  },
  dark: {
    pageBackground: "#202020",
    titleColor: "#D9D9D9",
  },
};

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<keyof typeof themes>("light");

  const value: ThemeContextProps = {
    theme,
    setTheme,
    themes,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

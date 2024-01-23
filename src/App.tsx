import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { ThemeProvider } from "styled-components";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Footer from "./Footer";

interface Theme {
  bodyColor: string;
  pageBackground: string;
  componentsBackground: string;
  color: string;
  colorOnHover: string;
  name: string;
}

const LightTheme: Theme = {
  bodyColor: "#D9D9D9",
  pageBackground: "#F4F4F4",
  componentsBackground: "#E1E1E1",
  color: "#393939",
  colorOnHover: "#000000",
  name: "light",
};

const DarkTheme: Theme = {
  bodyColor: "#393939",
  pageBackground: "#141212",
  componentsBackground: "#202020",
  color: "#D9D9D9",
  colorOnHover: "#ffffff",
  name: "dark",
};

const themes: Record<string, Theme> = {
  light: LightTheme,
  dark: DarkTheme,
};

function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const body = document.body;
    body.style.backgroundColor = themes[theme].componentsBackground;

    return () => {
      body.style.backgroundColor = "";
    };
  }, [theme]);

  return (
    <ThemeProvider theme={themes[theme]}>
      <Navbar theme={theme} setTheme={setTheme} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/projects"></Route>
          <Route path="/contact"></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </ThemeProvider>
  );
}

export default App;

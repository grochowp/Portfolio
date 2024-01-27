import { useState } from "react";
import Navbar from "../Navigation/Navbar";
import { ThemeProvider } from "styled-components";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import Footer from "./Footer";
import GlobalStyle from "../styles/globalStyles";
import Projects from "../pages/Projects/Projects";

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
  color: "#C3C3C3",
  colorOnHover: "#ffffff",
  name: "dark",
};

const themes: Record<string, Theme> = {
  light: LightTheme,
  dark: DarkTheme,
};

function App() {
  const [theme, setTheme] = useState("dark");

  return (
    <ThemeProvider theme={themes[theme]}>
      <GlobalStyle />
      <BrowserRouter>
        <Navbar theme={theme} setTheme={setTheme} />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/contact"></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </ThemeProvider>
  );
}

export default App;

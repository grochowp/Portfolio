import { Suspense, lazy, useState } from "react";
import Navbar from "./Navigation/Navbar";
import { ThemeProvider } from "styled-components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import GlobalStyle from "./styles/globalStyles";
import { Spinner } from "./pages/Contact/Components/Spinner";

const Home = lazy(() => import("./pages/Home/Home"));
const Projects = lazy(() => import("./pages/Projects/Projects"));
const Contact = lazy(() => import("./pages/Contact/Contact"));

interface Theme {
  bodyColor: string;
  pageBackground: string;
  componentsBackground: string;
  color: string;
  colorOnHover: string;
  name: string;
}

const LightTheme: Theme = {
  bodyColor: "#ADACAC",
  pageBackground: "#F9FFFF",
  componentsBackground: "#F3F3F3",
  color: "#212121",
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
  const [theme, setTheme] = useState<string>("dark");

  return (
    <ThemeProvider theme={themes[theme]}>
      <GlobalStyle />

      <BrowserRouter>
        <Navbar theme={theme} setTheme={setTheme} />
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/projects" element={<Projects />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
      <Footer />
    </ThemeProvider>
  );
}

export default App;

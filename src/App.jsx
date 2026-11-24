
import "./App.css";

import { useState } from "react";

import { ThemeProvider } from "./context/ThemeContext";

import { LoadingScreen } from "./components/LoadingScreen";
import { Navbar } from "./components/Navbar";
import { MobileMenu } from "./components/MobileMenu";
import { NetworkBackground } from "./components/NetworkBackground";

import { Home } from "./components/sections/Home";
import { About } from "./components/sections/About";
import { Projects } from "./components/sections/Projects";
import { Contact } from "./components/sections/Contact";

function Portfolio() {
  const [isLoading, setIsLoading] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <NetworkBackground />
      {!isLoading && (
        <LoadingScreen
          onComplete={() => setIsLoading(true)}
        />
      )}

      <div
        className={`min-h-screen transition-opacity duration-700 ${
          isLoading ? "opacity-100" : "opacity-0"
        } bg-background text-foreground`}
      >
        <Navbar
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
        />

        <MobileMenu
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
        />

        <Home />
        <About />
        <Projects />
        <Contact />
      </div>
    </>
  );
}

function App() {
  return (
    <ThemeProvider>
      <Portfolio />
    </ThemeProvider>
  );
}

export default App;

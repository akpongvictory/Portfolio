import { useContext } from "react";
import { ThemeProvider, ThemeContext } from "./ThemeContext";
import AnimatedBackground from "./components/AnimatedBackground.jsx";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// Inner app reads the theme context
function AppInner() {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: theme === "dark" ? "#0a0a0a" : "#f8fafc",
        color: theme === "dark" ? "#ffffff" : "#0f172a",
        transition: "background 0.3s ease, color 0.3s ease",
        position: "relative",
      }}
    >
      <AnimatedBackground />
      <Navbar />
      <main style={{ position: "relative", zIndex: 1 }}>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

// Wrap everything in ThemeProvider
export default function App() {
  return (
    <ThemeProvider>
      <AppInner />
    </ThemeProvider>
  );
}
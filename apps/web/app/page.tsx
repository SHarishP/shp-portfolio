"use client";
import About from "../components/about";
import Contact from "../components/contact";
import Footer from "../components/footer";
import Header from "../components/header";
import Navbar from "../components/navbar";
import Services from "../components/services";
import Work from "../components/work";
import { DarkModeProvider } from "../utility/darkModeContext";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Services />
      <Work />
      <Contact />
      <Footer />
    </>
  );
}

/* 
  Catatan

  useEffect(() => {
    if (
      localStorage.theme === "dark"
      // || (!("theme" in localStorage) &&
      //   window.matchMedia("(prefers-color-scheme:dark)").matches)
    ) {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }
  }, []);

*/

import "./App.scss";
import Bloggers from "./components/Bloggers/Bloggers";
import Cabinet from "./components/Cabinet/Cabinet";
import Center from "./components/Center/Center";
import { Faq } from "./components/FAQ/Faq";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import HowBlock from "./components/HowBlock/HowBlock";
import Monet from "./components/Monet/Monet";
import WhyBlock from "./components/WhyBlock/WhyBlock";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    let rafId: number | null = null;

    try {
      const url = new URL(window.location.href);
      const scrollToId = url.searchParams.get("scrollTo");
      const faqParam = url.searchParams.get("faq");

      if (!scrollToId) return;

      const doScroll = () => {
        if (scrollToId === "faq" && faqParam) {
          const itemEl = document.getElementById(`faq-${faqParam}`);
          if (itemEl) {
            itemEl.scrollIntoView({
              behavior: "auto",
              block: "start",
            });
            return;
          }
        }

        const el = document.getElementById(scrollToId);
        if (!el) return;

        el.scrollIntoView({
          behavior: "auto",
          block: "start",
        });
      };

      rafId = window.requestAnimationFrame(doScroll);
    } catch (e) {
      console.error(e);
    }

    return () => {
      if (rafId !== null) {
        window.cancelAnimationFrame(rafId);
      }
    };
  }, []);

  return (
    <div className="App">
      <Header />
      <Hero />
      <WhyBlock />
      <HowBlock />
      <Cabinet />
      <Bloggers />
      <Monet />
      <Center />
      <Faq />
      <Footer />
    </div>
  );
}

export default App;

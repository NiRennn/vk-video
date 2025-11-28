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

const SECTION_IDS = [
  "features",
  "how-become-author",
  "cabinet",
  "bloggers",
  "monetization",
  "center-of-actions",
  "faq",
];

const SCROLL_PARAM = "scrollTo";

function App() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const params = new URLSearchParams(window.location.search);
    const scrollToId = params.get(SCROLL_PARAM);

    if (scrollToId) {
      let attempts = 0;
      const maxAttempts = 10;

      const tryScroll = () => {
        const el = document.getElementById(scrollToId);
        if (!el) {
          if (attempts < maxAttempts) {
            attempts += 1;
            setTimeout(tryScroll, 100);
          }
          return;
        }

        el.scrollIntoView({
          behavior: "auto",
          block: "start",
        });
      };

      requestAnimationFrame(tryScroll);
    }

    const sections = SECTION_IDS.map((id) => {
      const el = document.getElementById(id);
      return el ? { id, el } : null;
    }).filter(
      (item): item is { id: string; el: HTMLElement } => item !== null
    );

    if (!sections.length) return;

    let currentId: string | null = null;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (!visible.length) return;

        const newId = (visible[0].target as HTMLElement).id;
        if (!newId || newId === currentId) return;

        currentId = newId;

        const url = new URL(window.location.href);
        url.searchParams.set(SCROLL_PARAM, newId);
        url.hash = "";

        window.history.replaceState(null, "", url.toString());
      },
      {
        threshold: 0.6,
      }
    );

    sections.forEach(({ el }) => observer.observe(el));

    return () => {
      observer.disconnect();
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

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

  const hash = window.location.hash;
  // если в урле есть якорь faq-..., даём FAQ самому рулить скроллом
  if (hash && hash.slice(1).startsWith("faq-")) {
    return;
  }

  const params = new URLSearchParams(window.location.search);
  const scrollToId = params.get("scrollTo");

  if (!scrollToId) return;

  let attempts = 0;
  const maxAttempts = 20;

  const scroll = () => {
    const el = document.getElementById(scrollToId);
    if (!el) {
      if (attempts < maxAttempts) {
        attempts += 1;
        setTimeout(scroll, 50);
      }
      return;
    }

    const rect = el.getBoundingClientRect();
    const top = rect.top + window.pageYOffset;

    window.scrollTo({
      top,
      behavior: "auto",
    });
  };

  requestAnimationFrame(scroll);
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

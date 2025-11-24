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
    if (!window.location.hash) return;

    const id = window.location.hash.slice(1); // убираем "#"
    const el = document.getElementById(id);
    if (!el) return;

    el.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
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
      <Faq/>
      <Footer />
    </div>
  );
}

export default App;

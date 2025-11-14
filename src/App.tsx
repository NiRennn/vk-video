import "./App.scss";
import Bloggers from "./components/Bloggers/Bloggers";
import Cabinet from "./components/Cabinet/Cabinet";
import Center from "./components/Center/Center";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import HowBlock from "./components/HowBlock/HowBlock";
import Monet from "./components/Monet/Monet";
import WhyBlock from "./components/WhyBlock/WhyBlock";

function App() {


  
  return (
    <div className="App">
      <Header />

      <Hero />
      <WhyBlock />
      <HowBlock/>
      <Cabinet/>
      <Bloggers/>
      <Monet/>
      <Center/>
      <Footer />
    </div>
  );
}

export default App;

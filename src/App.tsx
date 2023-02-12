import FAQ from "./components/FAQ/FAQ";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navigation from "./components/Navigation/Navigation";
import Offers from "./components/Offers/Offers";
import Services from "./components/Services/Services";
import Survey from "./components/Survey/Survey";

const App: React.FC = () => {
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <Services />
      <Offers />
      <Survey />
      <FAQ />
      <Footer />
    </div>
  );
};

export default App;

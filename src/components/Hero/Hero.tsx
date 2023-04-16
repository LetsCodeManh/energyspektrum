import "./styles.css";
import theFuck from "../../assets/TheFuck.png";
import HoverButton from "../Reuse/Button/HoverButton";
import HoverCard from "../Reuse/Card/HoverCard";
import TypewriterComponent from "typewriter-effect";

const Hero: React.FC = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero__left__side">
        <h1 className="section__header">
          Die schnelle & einfache Grünstrom-Lösung für Ihr{" "}
          <TypewriterComponent
            options={{
              strings: ["Unternehmen", "Gewerbe", "Eigenheim"],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>
        <a href="#survey">
          <HoverButton text="zur Lösung" />
        </a>
      </div>
      <div className="hero__right__side">
        <HoverCard />
        {/* <img src={theFuck} alt="something" className="hero__image"/> */}
      </div>
    </section>
  );
};

export default Hero;

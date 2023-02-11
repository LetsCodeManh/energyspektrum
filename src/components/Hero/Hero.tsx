import "./styles.css";
import theFuck from "../../assets/TheFuck.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Hero: React.FC = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero__left__side">
        <h1 className="section__header">
          Die schnelle & einfache Grünstrom-Lösung für Ihr Unternehmen
        </h1>
        <a href="#survey" className="hero__button">
          <FontAwesomeIcon icon={faArrowRight} /> zur Lösung
        </a>
      </div>
      <div className="hero__right__side">
        <img src={theFuck} alt="something" className="hero__image"/>
      </div>
    </section>
  );
};

export default Hero;

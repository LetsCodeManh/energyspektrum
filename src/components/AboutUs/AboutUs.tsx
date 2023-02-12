import Building from "../../assets/Building.png";
import Spaceship from "../../assets/Spaceship.png";
import "./styles.css";

const AboutUs: React.FC = () => {
  return (
    <section id="about" className="about">
      <h2 className="section__header">About Us</h2>
      <div className="about__container">
        <img src={Building} alt="This is building" className="about__image" />
        <div className="about__text__container">
          <h3 className="about__subheader">Unternehmen</h3>
          <div className="line" />

          <p className="text">
            Bei Energiespektrum bieten wir einfache und zugängliche Lösungen für
            die Energieversorgung der Zukunft. Wir verstehen, dass die
            Umstellung auf erneuerbare Energien für viele Menschen eine
            Herausforderung darstellen kann und wollen deshalb Lösungen
            anbieten, die einfach zu verstehen und zu nutzen sind.
          </p>
          <p className="text">
            Unser Team setzt sich aus erfahrenen Fachleuten zusammen, die
            ständig daran arbeiten, innovative Lösungen für unsere Kunden zu
            entwickeln. Wir bieten individuell angepasste Energiekonzepte, die
            auf die Bedürfnisse und Ressourcen unserer Kunden abgestimmt sind.
          </p>
        </div>
      </div>
      <div className="about__container">
        <img src={Spaceship} alt="This is building" className="about__image" />
        <div className="about__text__container">
          <h3 className="about__subheader">Vision & Werte</h3>
          <div className="line" />

          <p className="text">
            Wir sind überzeugt, dass die Energieversorgung der Zukunft einfach,
            nachhaltig und zugänglich sein muss. Mit unseren erneuerbaren
            Energielösungen wollen wir dazu beitragen, die Welt zu einem
            besseren Ort zu machen.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

import Beratung from "../../assets/Beratung.png";
import Information from "../../assets/Information.png";
import Vermittlung from "../../assets/Vermittlung.png";
import "./styles.css"

interface Service {
  service: string;
  description: string;
  image: string;
}

const services: Service[] = [
  {
    service: "Persönliche Beratung",
    description:
      "Unsere Tools, Checklisten und Kundenberater:innen stehen Ihnen jederzeit Beratend zur Verfügung",
    image: Beratung,
  },
  {
    service: "Information",
    description: "Expertenwissen und Tools Alles aus einer Hand!",
    image: Information,
  },
  {
    service: "Vermittlung",
    description:
      "Auf Wunsch vermittlen wir an ausgewählte Fachfirmen, damit Sie ihre Träume verwirklichen können",
    image: Vermittlung,
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="services">
      <div className="services__left__side">
        <h2 className="section__header">Services</h2>
        <h3 className="services__subheader">Das bietet Ihre Energiespektrum</h3>
        <p className="text">
          Wir bieten unseren Kundinen Orientierung und helfen bei der
          Vermittlung an passende Fach firmen. Das alles kostenlos &
          unverbindlich!
        </p>
      </div>
      <div className="services__right__side">
        {services.map((service, index) => (
          <div className="services__box" key={index}>
            <img src={service.image} alt={service.service} className="services__image" />
            <div className="services__box__right__side">
              <h4 className="services__box__header">{service.service}</h4>
              <p className="text">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;

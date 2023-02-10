import Photovoltaik from "../../assets/Photovoltaik-Anlage.jpg";
import Balkonkraftwerk from "../../assets/Balkonkraftwerk.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import "./styles.css"

interface Offer {
  header: string;
  description: string;
  benefits: string[];
  image: string;
}

const offers: Offer[] = [
  {
    header: "Photovoltaik-Anlage",
    description:
      "Anzahl der Module je nach Bedarf, Speichereinheit inklusive, Wahlweise Cloudspeicher",
    benefits: [
      "Cloudspeicher nutzbar",
      "Für große Gebäude/Freiflächen",
      "Hohe Stromproduktion",
    ],
    image: Photovoltaik,
  },
  {
    header: "Balkonkraftwerk",
    description:
      "Bestehend aus 1-4 Modulen, Speichereinheit nicht intergrierbar",
    benefits: [
      "für Einsteiger",
      "Geringe Anschaffungskoten",
      "Return of Invest bereits nach 3-4 Jahren",
    ],
    image: Balkonkraftwerk,
  },
  {
    header: "Offer 3",
    description: "Description of Offer 3",
    benefits: ["Benefit 1", "Benefit 2", "Benefit 3"],
    image: Balkonkraftwerk,
  },
];

const Offers: React.FC = () => {
  return (
    <section id="offers" className="offers">
      <h2 className="section__header">Angebot</h2>
      <div className="line"/>
      <div className="offers__box__container">
        {offers.map((offer, index) => (
          <div
            className="offers__box"
            key={index}
          >
            <img
              src={offer.image}
              alt={offer.header}
              className="offers__box__image"
            />
            <h3 className="offers__box__header">{offer.header}</h3>
            <p className="text">{offer.description}</p>
            <ul className="offers__box__list">
              {offer.benefits.map((benefit, index) => (
                <li key={index} className="offers__box__list__item">
                  <FontAwesomeIcon icon={faCheck} className="text-greenMedium" /> {benefit}
                </li>
              ))}
            </ul>
            <button
              className="offers__box__button"
            >
              More Infos
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Offers;
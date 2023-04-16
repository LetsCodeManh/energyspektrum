import Photovoltaik from "../../assets/Photovoltaik-Anlage.png";
import Balkonkraftwerk from "../../assets/Balkonkraftwerk.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import "./styles.css";

type Offer = {
  header: string;
  description: string;
  benefits: string[];
  image: string;
  affiliate: string;
  button: string;
};

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
    affiliate: "#survey",
    button: "Angebot anforden",
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
    affiliate: "https://www.solar-volt.de/?ref=oE16Wkg-9mbnRD",
    button: "Zum Angebot",
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
    affiliate: "https://www.solar-volt.de/?ref=oE16Wkg-9mbnRD",
    button: "Zum Angebot",
  },
];

const Offers: React.FC = () => {
  return (
    <section id="offers" className="offers">
      <h2 className="section__header">Angebot</h2>
      <div className="offers__box__container">
        {offers.map((offer, index) => (
          <div className="offers__box" key={index}>
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
                  <FontAwesomeIcon
                    icon={faCheck}
                    style={{ color: "var(--color-greenMedium)" }}
                  />{" "}
                  {benefit}
                </li>
              ))}
            </ul>
            <a
              className="offers__box__button"
              href={offer.affiliate}
              target={offer.affiliate !== "#survey" ? "_blank" : "_self"}
            >
              {offer.button}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Offers;

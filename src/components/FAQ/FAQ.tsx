import Fragezeichen from "../../assets/Fragezeichen.png";
import Ausrufezeichen from "../../assets/Ausrufezeichen.png";
import { useEffect, useState } from "react";
import "./styles.css";

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "Was bietet Energiespektrum an?",
    answer:
      "Energiespektrum ist eine Empfehlungsplattform für große sowie kleine Grünstrom-Projekte speziell für Unternehmen. Wir bieten relevantes Fachwissen und geben Orientierung, beraten persönlich und individuell und vermitteln auf Wunsch Fachfirmen in Ihrer Umgebung. Für eine zielorientierte Vermittlung.",
  },
  {
    question: "Warum muss ich meine Kontaktdaten hinterlassen?",
    answer:
      "Wir wollen Ihre Zeit nicht vergeuden, indem wir Ihnen Fachfirmen empfehlen, die nicht zu Ihrem Projekt passen. Deswegen ist es uns wichtig, Ihre Angaben aus dem Fragebogen an relevanten Stellen in einem persönlichen Gespräch zu spezifizieren. Dazu werden Sie im Anschluss an Ihre Anfrage von unseren Kundenberater:innen kontaktiert. Diese gleichen das Projekt mit potenziellen Fachfirmen aus Ihrer Region ab. Natürlich unverbindlich und kostenlos.",
  },
  {
    question: "Warum sollte ich Energiespektrum nutzen?",
    answer:
      "Wir von Energiespektrum haben verstanden, wie wichtig die autarke Energieversorgung ist. Wir stellen smarte Service-Tools wie Checklisten, Bedarfsrechner und hochwertige Inhalte bereit, die Empfehlungen für passende und zukunftssichere Lösungen und somit eine gute Orientierung für Sie bieten. Die Suche nach einer passenden Fachfirma, der man vertraut, ist mühsam, zeitaufwendig und kompliziert. Vor allem eins wollen wir Ihnen bieten: Einfachheit. Wir helfen Ihnen mit unserer Erfahrung und unserem Netzwerk, genau die richtige Fachfirma in Ihrer Nähe zu finden - kostenlos.",
  },
  {
    question: "Ist meine Anfrage bei Energiespektrum wirklich kostenlos?",
    answer:
      "Ja. Unser Service kostet Sie nichts und ist absolut unverbindlich. Wir finanzieren den Service über die Provision unserer Anbieter.",
  },
  {
    question: "Warum muss ich einen Fragebogen ausfüllen?",
    answer:
      "Wir haben lange überlegt, wie Sie uns Ihr Projekt am einfachsten beschreiben können und sind zu dem Schluss gekommen, dass unser Fragebogen die perfekte Form ist. Ihre Antworten helfen uns dabei, die Auswahl der richtigen Fachfirmen für Sie zu erleichtern. Individuelle Details können Sie mit unseren Kundenberater:innen persönlich besprechen.",
  },
  {
    question:
      "Was ist, wenn ich nach Beendigung des Projekts noch Fragen habe und/oder Hilfe benötige?",
    answer:
      "Selbstverständlich stehen wir von Energiespektrum Ihnen auch nach Beendigung Ihres Projektes zur Verfügung. bei Fragen und/oder Hilfsbedarf können Sie uns jederzeit über unser Kontaktformular kontaktieren.",
  },
  {
    question: "Werden die Daten noch anderweitig genutzt?",
    answer:
      "Nein. Ihre Daten geben wir an Partnerfirmen weiter, damit diese Ihnen ein Angebot unterbreiten können. Niemals werden wir Ihre Daten für andere Zwecke an Dritte weiterleiten.",
  },
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="FAQ" className="FAQ">
      <h2 className="section__header">FAQs</h2>
      <div className="FAQ__container">
        {faqs.map((faq, index) => (
          <div key={index} className="FAQ__box">
            <button className="FAQ__button" onClick={() => handleClick(index)}>
              <h3 className="FAQ__question">{faq.question}</h3>
              <img
                src={openIndex === index ? Ausrufezeichen : Fragezeichen}
                alt="answer and question icons"
                className="FAQ__image"
              />
            </button>
            {openIndex === index && (
              <div
                className="section__answer text"
                style={{
                  maxHeight: openIndex === index ? "100%" : "0",
                  transition: "max-height 600ms ease",
                }}
              >
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;

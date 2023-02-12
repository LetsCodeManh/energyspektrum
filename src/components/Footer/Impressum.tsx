import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, RouteProps } from "react-router-dom";

const Impressum: React.FC<RouteProps> = () => {
  return (
    <main className="datenschutz">
      <Link to="/energyspektrum/" className="back__button">
        <FontAwesomeIcon icon={faArrowLeft} /> Back
      </Link>
      <h1>Impressum</h1>
      <section>
        <div>
          <h3>Angaben gemäß § 5 TMG</h3>
          <p>Oskar Agovic, Energiespektrum, Unterm Hagen 11, 37079 Göttingen</p>
        </div>
        <div>
          <h3>Kontakt</h3>
          <p>
            Telefon: 017673882007 E-Mail: <br />
            info@energiespektrum.com
          </p>
        </div>
        <div>
          <h3>EU-Streitschlichtung</h3>
          <p>
            Die Europäische Kommission stellt eine Plattform zur
            Online-Streitbeilegung (OS) bereit:
            https://ec.europa.eu/consumers/odr/. Unsere E-Mail-Adresse finden
            Sie oben im Impressum.
          </p>
        </div>
        <div>
          <h3>Verbraucherstreitbeilegung/Universalschlichtungsstelle</h3>
          <p>
            Wir sind nicht bereit oder verpflichtet, an
            Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
            teilzunehmen.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Impressum;

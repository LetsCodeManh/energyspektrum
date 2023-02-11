import { useState } from "react";
import "./styles.css";

interface Link {
  href: string;
  label: string;
}

const links: Link[] = [
  {
    href: "#services",
    label: "Services",
  },
  {
    href: "#mitglied",
    label: "Mitglied werden",
  },
  {
    href: "#contact",
    label: "Kontakt",
  },
];

const Navigation: React.FC = () => {
  return (
    <header className="navigation">
      <a href="#" className="navigation__logo">
        Energyspektrum
      </a>

      <nav className="navigation__list">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.href}
            className="navigation__link"
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Navigation;

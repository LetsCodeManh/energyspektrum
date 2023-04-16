import "./styles.css";
import Logo from "../../assets/Logo.png";
import HoverButton from "../Reuse/Button/HoverButton";

type Link = {
  href: string;
  label: string;
}

const links: Link[] = [
  {
    href: "#services",
    label: "Services",
  },
  {
    href: "#survey",
    label: "Kontakt",
  },
];

const Navigation: React.FC = () => {
  return (
    <header className="navigation">
      <a href="#" className="navigation__logo">
        <img src={Logo} alt="Energyspektrum Logo" className="navigation__image" />
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
        <a href="#mitglied">
          <HoverButton text="Partner werden" />
        </a>
      </nav>
    </header>
  );
};

export default Navigation;
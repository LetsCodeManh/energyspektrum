import {
  faFacebookF,
  faInstagram,
  faTwitter,
  IconDefinition,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "./styles.css";

type SocialLink = {
  link: string;
  icon: IconDefinition;
  color: string;
}

type FooterLink = {
  label: string;
  href: string;
}

const socialLinks: SocialLink[] = [
  {
    link: "https://www.instagram.com/energiespektrum/",
    icon: faInstagram,
    color: "#000000e3",
  },
  {
    link: "https://www.facebook.com/energiespektrum/",
    icon: faFacebookF,
    color: "#4267B2",
  },
  {
    link: "https://twitter.com/energiespektrum",
    icon: faTwitter,
    color: "#00acee",
  },
];

const footerLinks: FooterLink[] = [
  {
    label: "Datenschutz",
    href: "/energyspektrum/datenschutz",
  },
  {
    label: "Impressum",
    href: "/energyspektrum/impressum",
  },
];

const Footer: React.FC = () => {
  return (
    <footer id="footer" className="footer">
      <p className="footer__text">
        &#169; Energiespektrum 2023. Alle Rechte vorbehalten.
      </p>
      <div className="footer__container">
        {footerLinks.map((link, index) => (
          <a key={index} href={link.href} className="footer__link">
            {link.label}
          </a>
        ))}
      </div>
      <div className="footer__container">
        {socialLinks.map((link, index) => (
          <Link
            to={link.link}
            target="_blank"
            rel="noopener noreferrer"
            className="footer__sociallink"
            key={index}
            style={{ backgroundColor: link.color }}
          >
            <FontAwesomeIcon icon={link.icon} size="xl" />
          </Link>
        ))}
      </div>
    </footer>
  );
};

export default Footer;

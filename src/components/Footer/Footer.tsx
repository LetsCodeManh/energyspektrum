import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faTwitter,
  IconDefinition,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles.css";

interface SocialLink {
  link: string;
  icon: IconDefinition;
  color: string;
}

interface FooterLink {
  label: string;
  href: string;
}

const socialLinks: SocialLink[] = [
  {
    link: "https://www.instagram.com/",
    icon: faInstagram,
    color: "#000000e3",
  },
  {
    link: "https://www.facebook.com/",
    icon: faFacebookF,
    color: "#4267B2",
  },
  {
    link: "https://www.twitter.com/",
    icon: faTwitter,
    color: "#00acee",
  },
  {
    link: "https://www.linkedin.com/",
    icon: faLinkedinIn,
    color: "#0072b1",
  },
];

const footerLinks: FooterLink[] = [
  {
    label: "Datenschutz",
    href: "#",
  },
  {
    label: "Impressum",
    href: "#",
  },
  {
    label: "Über Uns",
    href: "#",
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
          <a
            href={link.link}
            target="_blank"
            rel="noopener noreferrer"
            className="footer__sociallink"
            key={index}
            style={{ backgroundColor: link.color }}
          >
            <FontAwesomeIcon icon={link.icon} size="xl" />
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;

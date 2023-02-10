import { useState } from "react";

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
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="flex items-center justify-between p-4">
      <a href="#" className="font-bold text-xl uppercase">
        Energyspektrum
      </a>

      <div className="block sm:hidden">
        <a className="cursor-pointer" onClick={handleToggle} />
      </div>

      <div
        className={`${
          isOpen ? "block" : "hidden"
        } sm:flex sm:items-center w-full sm:w-auto`}
      >
        <nav className="text-sm">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="block mt-4 sm:inline-block sm:mt-0 mr-4"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navigation;

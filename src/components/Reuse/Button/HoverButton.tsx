import "./styles.css"

type props = {
  text: string;
};

const HoverButton = ({ text }: props) => {
  return <button className="hoverButton">{text}</button>;
};

export default HoverButton;

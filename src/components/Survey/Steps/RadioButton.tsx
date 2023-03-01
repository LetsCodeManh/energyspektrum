interface OptionProps {
  image: string;
  text: string;
  value: string;
  selected: boolean;
  onClick: (value: string) => void;
}

const Option: React.FC<OptionProps> = ({
  image,
  text,
  value,
  selected,
  onClick,
}) => {
  return (
    <div
      className={`option ${selected ? "selected" : ""}`}
      onClick={() => onClick(value)}
    >
      <img src={image} alt={text} className="option__image" />
      <p className="text">{text}</p>
    </div>
  );
};

interface RadioButtonProps {
  options: Array<{
    image: string;
    text: string;
    value: string;
  }>;
  selectedValue: string;
  onChange: (value: string) => void;
}

const RadioButton: React.FC<RadioButtonProps> = ({
  options,
  selectedValue,
  onChange,
}) => {
  return (
    <div className="radio__button__container">
      {options.map((option) => (
        <Option
          key={option.value}
          image={option.image}
          text={option.text}
          value={option.value}
          selected={option.value === selectedValue}
          onClick={onChange}
        />
      ))}
    </div>
  );
};

export default RadioButton;

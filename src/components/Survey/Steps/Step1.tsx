import { useState } from "react";
import FormWrapper from "./FormWrapper";
import RadioButton from "./RadioButton";
import Something from "../../../assets/Something.svg";
import Spaceship from "../../../assets/Spaceship.png";
import { useMultistepForm } from "../../customHooks/useMultistepFrom";

type SurveyData = {
  WoPhotovoltaik: string;
  next: () => void
};

type SurveyFormProps = SurveyData & {
  updateFields: (fields: Partial<SurveyData>) => void;
};

const options = [
  {
    image: Spaceship,
    text: "Ein-/Zweifamilienhaus",
    value: "Ein-/Zweifamilienhaus",
  },
  {
    image: Something,
    text: "Mehrfamilienhaus",
    value: "Mehrfamilienhaus",
  },
  {
    image: Something,
    text: "Firmengebäude",
    value: "Firmengebäude",
  },
  {
    image: Something,
    text: "Freilandfläche",
    value: "Freilandfläche",
  },
  {
    image: Something,
    text: "Sonstiges",
    value: "Sonstiges",
  },
];

const Step1 = ({
  WoPhotovoltaik,
  updateFields,
  next
}: SurveyFormProps) => {
  const [selectedValue, setSelectedValue] = useState(WoPhotovoltaik);

  const handleRadioClick = (value: string) => {
    setSelectedValue(value);
    updateFields({ WoPhotovoltaik: value });
    next()
  };

  return (
    <FormWrapper title="Wo möchten Sie die Photovoltaik installieren?">
      <RadioButton
        options={options}
        selectedValue={selectedValue}
        onChange={(value) => {
          handleRadioClick(value);
        }}
      />
    </FormWrapper>
  );
};

export default Step1;

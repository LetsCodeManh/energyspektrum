import { useState } from "react";
import FormWrapper from "./FormWrapper";
import RadioButton from "./RadioButton";
import Something from "../../../assets/Something.svg";

type SurveyData = {
  When: string;
  next: () => void
};

type SurveyFormProps = SurveyData & {
  updateFields: (fields: Partial<SurveyData>) => void;
};

const Step9 = ({ When, updateFields, next }: SurveyFormProps) => {
  const [selectedValue, setSelectedValue] = useState(When);

  return (
    <FormWrapper title="Wann soll die Photovoltaik installiert werden?">
      <RadioButton
        options={[
          {
            image: Something,
            text: "So schnell wie möglich",
            value: "So schnell wie möglich",
          },
          {
            image: Something,
            text: "1-3 Monate",
            value: "1-3 Monate",
          },
          {
            image: Something,
            text: "4-6 Monate",
            value: "4-6 Monate",
          },
          {
            image: Something,
            text: "Mehr als 6 Monate",
            value: "Mehr als 6 Monate",
          },
        ]}
        selectedValue={selectedValue}
        onChange={(value) => {
          setSelectedValue(value);
          updateFields({ When: value });
          next()
        }}
      />
    </FormWrapper>
  );
};

export default Step9;

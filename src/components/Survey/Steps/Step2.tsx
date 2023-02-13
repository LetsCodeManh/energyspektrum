import { useState } from "react";
import FormWrapper from "./FormWrapper";
import RadioButton from "./RadioButton";
import Something from "../../../assets/Something.svg";

type SurveyData = {
  Type: string;
};

type SurveyFormProps = SurveyData & {
  updateFields: (fields: Partial<SurveyData>) => void;
};

const Step2 = ({ Type, updateFields }: SurveyFormProps) => {
  const [selectedValue, setSelectedValue] = useState(Type);

  return (
    <FormWrapper title="Um welchen Gebäudetyp handelt es sich?">
      <RadioButton
        options={[
          {
            image: Something,
            text: "freistehendes Haus",
            value: "freistehendes Haus",
          },
          {
            image: Something,
            text: "Doppelhaushälfte",
            value: "Doppelhaushälfte",
          },
          {
            image: Something,
            text: "Reihenmittelhaus",
            value: "Reihenmittelhaus",
          },
          {
            image: Something,
            text: "Reihenendhaus",
            value: "Reihenendhaus",
          },
        ]}
        selectedValue={selectedValue}
        onChange={(value) => {
          setSelectedValue(value);
          updateFields({ Type: value });
        }}
      />
    </FormWrapper>
  );
}

export default Step2;

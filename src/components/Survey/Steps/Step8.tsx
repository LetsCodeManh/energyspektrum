import { useState } from "react";
import FormWrapper from "./FormWrapper";
import RadioButton from "./RadioButton";
import Something from "../../../assets/Something.svg";

type SurveyData = {
  Age: string;
};

type SurveyFormProps = SurveyData & {
  updateFields: (fields: Partial<SurveyData>) => void;
};

const Step8 = ({ Age, updateFields }: SurveyFormProps) => {
  const [selectedValue, setSelectedValue] = useState(Age);

  return (
    <FormWrapper title="Wie alt sind Sie? (Relevant für Finanzierungsoptionen)?">
      <RadioButton
        options={[
          {
            image: Something,
            text: "20-40 Jahre",
            value: "20-40 Jahre",
          },
          {
            image: Something,
            text: "41-50 Jahre",
            value: "41-50 Jare",
          },
          {
            image: Something,
            text: "51-70 Jahre",
            value: "51-70 Jahre",
          },
          {
            image: Something,
            text: "Über 70 Jahre",
            value: "Über 70 Jahre",
          },
          {
            image: Something,
            text: "Keine Angabe",
            value: "Keine Angabe",
          },
        ]}
        selectedValue={selectedValue}
        onChange={(value) => {
          setSelectedValue(value);
          updateFields({ Age: value });
        }}
      />
    </FormWrapper>
  );
}

export default Step8;

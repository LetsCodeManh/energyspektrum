import { useState } from "react";
import FormWrapper from "./FormWrapper";
import RadioButton from "./RadioButton";
import Something from "../../../assets/Something.svg";

type SurveyData = {
  Owner: string;
};

type SurveyFormProps = SurveyData & {
  updateFields: (fields: Partial<SurveyData>) => void;
};

const Step4 = ({ Owner, updateFields }: SurveyFormProps) => {
  const [selectedValue, setSelectedValue] = useState(Owner);

  return (
    <FormWrapper title="Sind Sie Eigentümer der Immobilie?">
      <RadioButton
        options={[
          {
            image: Something,
            text: "Ja",
            value: "Ja",
          },
          {
            image: Something,
            text: "Nein",
            value: "Nein",
          },
        ]}
        selectedValue={selectedValue}
        onChange={(value) => {
          setSelectedValue(value);
          updateFields({ Owner: value });
        }}
      />
    </FormWrapper>
  );
}

export default Step4;

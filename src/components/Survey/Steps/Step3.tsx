import { useState } from "react";
import FormWrapper from "./FormWrapper";
import RadioButton from "./RadioButton";
import Something from "../../../assets/Something.svg";

type SurveyData = {
  Living: string;
  next: () => void
};

type SurveyFormProps = SurveyData & {
  updateFields: (fields: Partial<SurveyData>) => void;
};

const Step3 = ({ Living, updateFields, next }: SurveyFormProps) => {
  const [selectedValue, setSelectedValue] = useState(Living);

  return (
    <FormWrapper title="Bewohnen Sie die Immobilie selbst?">
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
          updateFields({ Living: value });
          next()
        }}
      />
    </FormWrapper>
  );
}

export default Step3;

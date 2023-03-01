import { useState } from "react";
import FormWrapper from "./FormWrapper";
import RadioButton from "./RadioButton";
import Something from "../../../assets/Something.svg";

type SurveyData = {
  PowerStorage: string;
  next: () => void
};

type SurveyFormProps = SurveyData & {
  updateFields: (fields: Partial<SurveyData>) => void;
};

const Step6 = ({ PowerStorage, updateFields, next }: SurveyFormProps) => {
  const [selectedValue, setSelectedValue] = useState(PowerStorage);

  return (
    <FormWrapper title="Möchten Sie die Photovoltaik-Anlage durch einen Stromspeicher ergänzen?">
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
          {
            image: Something,
            text: "Weiß nicht",
            value: "Weiß nicht",
          },
        ]}
        selectedValue={selectedValue}
        onChange={(value) => {
          setSelectedValue(value);
          updateFields({ PowerStorage: value });
          next()
        }}
      />
    </FormWrapper>
  );
}

export default Step6;

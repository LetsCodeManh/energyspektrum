import { useState } from "react";
import FormWrapper from "./FormWrapper";
import RadioButton from "./RadioButton";
import Something from "../../../assets/Something.svg";

type SurveyData = {
  RoofShape: string;
  next: () => void
};

type SurveyFormProps = SurveyData & {
  updateFields: (fields: Partial<SurveyData>) => void;
};

const Step5 = ({ RoofShape, updateFields, next }: SurveyFormProps) => {
  const [selectedValue, setSelectedValue] = useState(RoofShape);

  return (
    <FormWrapper title="Welche Dachform hat das Haus?">
      <RadioButton
        options={[
          {
            image: Something,
            text: "Satteldach",
            value: "Satteldach",
          },
          {
            image: Something,
            text: "Pultdach",
            value: "Pultdach",
          },
          {
            image: Something,
            text: "Flachdach",
            value: "Flachdach",
          },
          {
            image: Something,
            text: "Walmdach",
            value: "Walmdach",
          },
          {
            image: Something,
            text: "Sonstiges",
            value: "Sonstifes",
          },
        ]}
        selectedValue={selectedValue}
        onChange={(value) => {
          setSelectedValue(value);
          updateFields({ RoofShape: value });
          next()
        }}
      />
    </FormWrapper>
  );
}

export default Step5;

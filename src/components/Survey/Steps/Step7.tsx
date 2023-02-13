import { useState } from "react";
import FormWrapper from "./FormWrapper";
import RadioButton from "./RadioButton";
import Something from "../../../assets/Something.svg";

type SurveyData = {
  Finanze: string;
};

type SurveyFormProps = SurveyData & {
  updateFields: (fields: Partial<SurveyData>) => void;
};

const Step7 = ({ Finanze, updateFields }: SurveyFormProps) => {
  const [selectedValue, setSelectedValue] = useState(Finanze);

  return (
    <FormWrapper title="Welche Finanzierung kommt für Sie in Frage?">
      <RadioButton
        options={[
          {
            image: Something,
            text: "Kaufen",
            value: "Kaufen",
          },
          {
            image: Something,
            text: "Mieten",
            value: "Mieten",
          },
          {
            image: Something,
            text: "Beides Interessant",
            value: "Beides Interessant",
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
          updateFields({ Finanze: value });
        }}
      />
    </FormWrapper>
  );
}

export default Step7;

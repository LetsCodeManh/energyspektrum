import { useState } from "react";
import FormWrapper from "./FormWrapper";
import RadioButton from "./RadioButton";
import Something from "../../../assets/Something.svg";

type SurveyData = {
  WoPhotovoltaik: string;
};

type SurveyFormProps = SurveyData & {
  updateFields: (fields: Partial<SurveyData>) => void;
};

const Step1 = ({ WoPhotovoltaik, updateFields }: SurveyFormProps) => {
  const [selectedValue, setSelectedValue] = useState(WoPhotovoltaik);

  return (
    <FormWrapper title="Wo möchten Sie die Photovoltaik installieren?">
      <RadioButton
        options={[
          {
            image: Something,
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
        ]}
        selectedValue={selectedValue}
        onChange={(value) => {
          setSelectedValue(value);
          updateFields({ WoPhotovoltaik: value });
        }}
      />
    </FormWrapper>
  );
};

export default Step1;

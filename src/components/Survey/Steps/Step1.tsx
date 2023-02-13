import FormWrapper from "./FormWrapper";

type UserData = {
  WoPhotovoltaik: string;
};

type UserFormProps = UserData & {
  updateFields: (fields: Partial<UserData>) => void;
};

function Step1({ WoPhotovoltaik, updateFields }: UserFormProps) {
  return (
    <FormWrapper title="Wo möchten Sie die Photovoltaik installieren?">
      <div>
        <input
          type="radio"
          id="step1"
          name="step1"
          value={WoPhotovoltaik}
          onChange={(e) => updateFields({ step1: e.target.value })}
        />
        <label htmlFor="">Ein-/Zweifamilienhaus</label>
      </div>

      <div>
        <input
          type="radio"
          id="step2"
          name="step1"
          value={WoPhotovoltaik}
          onChange={(e) => updateFields({ step1: e.target.value })}
        />
        <label htmlFor="">Mehrfamilienhaus</label>
      </div>

      <div>
        <input
          type="radio"
          id="step3"
          name="step1"
          value={WoPhotovoltaik}
          onChange={(e) => updateFields({ step1: e.target.value })}
        />
        <label htmlFor="">Firmengebäude</label>
      </div>

      <div>
        <input
          type="radio"
          id="step3"
          name="step1"
          value={WoPhotovoltaik}
          onChange={(e) => updateFields({ step1: e.target.value })}
        />
        <label htmlFor="">Freilandfläche</label>
      </div>
    </FormWrapper>
  );
}

export default Step1;

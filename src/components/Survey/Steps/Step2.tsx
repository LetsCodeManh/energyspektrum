import FormWrapper from "./FormWrapper";

type UserData = {
  step1: string;
};

type UserFormProps = UserData & {
  updateFields: (fields: Partial<UserData>) => void;
};

function Step2({ step1, updateFields }: UserFormProps) {
  return (
    <FormWrapper title="Step 2">
      <input type="radio" id="step1" name="step2" value="step1" />
      <label htmlFor="">Step1</label>
      <input type="radio" id="step2" name="step2" value="step2" />
      <label htmlFor="">Step2</label>
      <input type="radio" id="step3" name="step2" value="step3" />
      <label htmlFor="">Step3</label>
    </FormWrapper>
  );
}

export default Step2;

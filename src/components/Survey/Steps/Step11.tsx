import FormWrapper from "./FormWrapper";

type SurveyData = {
  name: string;
  email: string;
};

type SurveyFormProps = SurveyData & {
  updateFields: (fields: Partial<SurveyData>) => void;
};

const Step11 = ({ name, email, updateFields }: SurveyFormProps) => {
  return (
    <FormWrapper title="Wir werden uns bei Ihnen melden!">
      <div className="survey__form__container">
        <div className="survey__form__information">
          <label htmlFor="name" className="text">
            Name
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => updateFields({ name: e.target.value })}
            required
            className="survey__input"
          />
        </div>
        <div className="survey__form__information">
          <label htmlFor="email" className="text">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => updateFields({ email: e.target.value })}
            required
            className="survey__input"
          />
        </div>
      </div>
    </FormWrapper>
  );
};

export default Step11;

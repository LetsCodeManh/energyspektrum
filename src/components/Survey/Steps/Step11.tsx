import FormWrapper from "./FormWrapper";

type SurveyData = {
  vorname: string;
  nachname: string;
  tel: string;
  email: string;
};

type SurveyFormProps = SurveyData & {
  updateFields: (fields: Partial<SurveyData>) => void;
};

const Step11 = ({ vorname, nachname, tel, email, updateFields }: SurveyFormProps) => {
  return (
    <FormWrapper title="Super! Das wäre geschafft! Bitte hinterlasse uns Deine Kontaktdaten.">
      <div className="survey__form__container">
        <div className="survey__form__information">
          <input
            id="name"
            type="text"
            value={vorname}
            onChange={(e) => updateFields({ vorname: e.target.value })}
            required
            placeholder="Vorname"
            className="survey__input"
          />
        </div>
        <div className="survey__form__information">
          <input
            id="name"
            type="text"
            value={nachname}
            onChange={(e) => updateFields({ nachname: e.target.value })}
            required
            placeholder="Nachname"
            className="survey__input"
          />
        </div>
        <div className="survey__form__information">
          <input
            id="tel"
            type="tel"
            defaultValue="+49"
            pattern="\d*"
            value={tel}
            onChange={(e) => updateFields({ tel: e.target.value })}
            placeholder="🇩🇪 +49"
            required
            className="survey__input"
          />
        </div>
        <div className="survey__form__information">
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => updateFields({ email: e.target.value })}
            required
            placeholder="E-Mail"
            className="survey__input"
          />
        </div>
      </div>
    </FormWrapper>
  );
};

export default Step11;

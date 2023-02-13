import { FormEvent, useState } from "react";
import { useMultistepForm } from "../customHooks/useMultistepFrom";
import Step1 from "./Steps/Step1";
import Step2 from "./Steps/Step2";
import "./styles.css";

type FormData = {
  WoPhotovoltaik: string;
  step2: string;
};

const INITIAL_DATA: FormData = {
  WoPhotovoltaik: "",
  step2: "",
};

const Survey: React.FC = () => {
  const [data, setData] = useState(INITIAL_DATA);

  function updateFields(fields: Partial<FormData>) {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  }

  const { steps, step, currentStepIndex, isFirstStep, isLastStep, back, next } =
    useMultistepForm([
      <Step1 {...data} updateFields={updateFields} />,
      <Step2 {...data} updateFields={updateFields} />,
    ]);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!isLastStep) return next();
    alert("Successful!");
  }

  return (
    <section id="survey" className="survey">
      <form onSubmit={onSubmit} className="survey-container">
        <div className="survey__progressBar">
          <p className="text">{`${
            (currentStepIndex / steps.length) * 100
          }%`}</p>
          <div className="progressBar">
            <div
              className="progressBar__fill"
              style={{
                width: `${(currentStepIndex / steps.length) * 100}%`,
              }}
            />
          </div>
        </div>
        {step}
        <div className="survey__button__container">
          {isFirstStep && (
            <button type="button" onClick={back} className="survey__button">
              Back
            </button>
          )}
          <button type="submit" className="survey__button">
            {isLastStep ? "Confirm" : "Next"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Survey;

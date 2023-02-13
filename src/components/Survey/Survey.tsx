import { FormEvent, useState } from "react";
import { useMultistepForm } from "../customHooks/useMultistepFrom";
import Step1 from "./Steps/Step1";
import Step10 from "./Steps/Step10";
import Step11 from "./Steps/Step11";
import Step2 from "./Steps/Step2";
import Step3 from "./Steps/Step3";
import Step4 from "./Steps/Step4";
import Step5 from "./Steps/Step5";
import Step6 from "./Steps/Step6";
import Step7 from "./Steps/Step7";
import Step8 from "./Steps/Step8";
import Step9 from "./Steps/Step9";
import "./styles.css";

type FormData = {
  WoPhotovoltaik: string;
  Type: string;
  Living: string;
  Owner: string;
  RoofShape: string;
  PowerStorage: string;
  Finanze: string;
  Age: string;
  When: string;
  name: string;
  email: string;
};

const INITIAL_DATA: FormData = {
  WoPhotovoltaik: "",
  Type: "",
  Living: "",
  Owner: "",
  RoofShape: "",
  PowerStorage: "",
  Finanze: "",
  Age: "",
  When: "",
  name: "",
  email: "",
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
      <Step3 {...data} updateFields={updateFields} />,
      <Step4 {...data} updateFields={updateFields} />,
      <Step5 {...data} updateFields={updateFields} />,
      <Step6 {...data} updateFields={updateFields} />,
      <Step7 {...data} updateFields={updateFields} />,
      <Step8 {...data} updateFields={updateFields} />,
      <Step9 {...data} updateFields={updateFields} />,
      <Step10 {...data} />,
      <Step11 {...data} updateFields={updateFields} />,
    ]);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!isLastStep) return next();
    alert("Successful!");
  }

  return (
    <section id="survey" className="survey">
      <h1 className="section__header">Survey</h1>
      <form onSubmit={onSubmit} className="survey__container">
        {step}
        <div className="survey__progressBar">
          <p className="text">{`${
            (currentStepIndex / (steps.length - 1)) * 100
          }%`}</p>
          <div className="progressBar">
            <div
              className="progressBar__fill"
              style={{
                width: `${(currentStepIndex / (steps.length - 1)) * 100}%`,
              }}
            />
          </div>
        </div>
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

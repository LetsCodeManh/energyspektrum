import { useState } from "react";
import FormWrapper from "./FormWrapper";

type SurveyData = {
  WoPhotovoltaik: string;
  Type: string;
  Living: string;
  Owner: string;
  RoofShape: string;
  PowerStorage: string;
  Finanze: string;
  Age: string;
  When: string;
};

type suveyQuestionAnswer = {
  question: string;
  answer: string;
};

const Step10 = ({
  WoPhotovoltaik,
  Type,
  Living,
  Owner,
  RoofShape,
  PowerStorage,
  Finanze,
  Age,
  When,
}: SurveyData) => {
  const surveyQuestionsAnswers: suveyQuestionAnswer[] = [
    {
      question: "Wo möchten Sie die Photovoltaik installieren?",
      answer: WoPhotovoltaik,
    },
    {
      question: "Um welchen Gebäudetyp handelt es sich?",
      answer: Type,
    },
    {
      question: "Bewohnen Sie die Immobilie selbst?",
      answer: Living,
    },
    {
      question: "Sind Sie Eigentümer der Immobilie?",
      answer: Owner,
    },
    {
      question: "Welche Dachform hat das Haus?",
      answer: RoofShape,
    },
    {
      question:
        "Möchten Sie die Photovoltaik-Anlage durch einen Stromspeicher ergänzen?",
      answer: PowerStorage,
    },
    {
      question: "Welche Finanzierung kommt für Sie in Frage?",
      answer: Finanze,
    },
    {
      question: "Wie alt sind Sie? (Relevant für Finanzierungsoptionen)?",
      answer: Age,
    },
    {
      question: "Wann soll die Photovoltaik installiert werden?",
      answer: When,
    },
  ];

  return (
    <FormWrapper title="Bestätigen Sie die Informationen?">
      <div className="survey__confirm__container">
        {surveyQuestionsAnswers.map((survey, index) => (
          <div key={index} className="survey__confirm">
            <h3 className="survey__confirm__header">{survey.question}</h3>
            <p className="text">{survey.answer}</p>
          </div>
        ))}
      </div>
    </FormWrapper>
  );
};

export default Step10;

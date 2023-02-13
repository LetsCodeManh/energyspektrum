interface SurveyProps {
  nextStep: () => void;
  prevStep: () => void;
}

const Step3: React.FC<SurveyProps> = ({ nextStep, prevStep }) => {
  return (
    <div>
      <h1>Step 1</h1>
      <button onClick={nextStep}>Next Step</button>
      <button onClick={prevStep}>Prev Step</button>
    </div>
  );
};

export default Step3
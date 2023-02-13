import { ReactNode } from "react";

type FormWrapperProps = {
  title: string;
  children: ReactNode;
};

const FormWrapper = ({ title, children }: FormWrapperProps) => {
  return (
    <>
      <h2 className="survey__title">{title}</h2>
      <div>{children}</div>
    </>
  );
};

export default FormWrapper;

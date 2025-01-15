import RegisterForm from "@/components/RegisterForm";
import React from "react";

const SignUp: React.FC = () => {
  return (
    <div className="h-[calc(100vh-95px)] grid place-items-center">
      <RegisterForm />
    </div>
  );
};

export default SignUp;

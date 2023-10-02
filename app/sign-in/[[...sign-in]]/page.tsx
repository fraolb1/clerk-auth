import React from "react";
import { SignIn } from "@clerk/nextjs";

const SignInPage = () => {
  return (
    <>
      <div className='flex self-center items-center justify-between'>
        <SignIn />
      </div>
    </>
  );
};

export default SignInPage;

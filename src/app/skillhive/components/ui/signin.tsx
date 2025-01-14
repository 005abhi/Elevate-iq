"use client";
import { signIn } from "next-auth/react";
import React from "react";

const SignIn = ({ url, className }: { url: string; className: string }) => {
  return (
    <button
      className={className}
      onClick={() => signIn(undefined, { callbackUrl: url })}
    >
      Sign In
    </button>
  );
};

export default SignIn;

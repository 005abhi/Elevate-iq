"use client";
import { signOut } from "next-auth/react";
import React from "react";

const SignOut = () => {
  return (
    <button onClick={() => signOut({ callbackUrl: "/skillhive" })}>
      Sign out
    </button>
  );
};

export default SignOut;

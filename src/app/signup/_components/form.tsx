"use client";

import React from "react";
import { useRouter } from "next/navigation";

const Form = ({ role }: { role: string }) => {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    if (data.fullname && data.username && data.password && data.role) {
      fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => {
          if (!res.ok) {
            return res.json().then((err) => {
              throw new Error(err.error || "Something went wrong");
            });
          }
          return res.json();
        })
        .then((data) => {
          if (data.message === "success") {
            alert("User registered successfully");
            router.replace("/api/auth/signin");
          }
        })
        .catch((error) => {
          console.error("Error:", error.message);
          alert("An error occurred: " + error.message);
        });
    } else {
      alert("Please fill all the fields");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-900 text-gray-200 p-6 rounded-md shadow-md max-w-md mx-auto"
    >
      <h1 className="text-2xl font-semibold mb-4 text-center">Register</h1>
      <div className="flex flex-col gap-y-4">
        {/* Full Name Field */}
        <div>
          <label htmlFor="fullname" className="block mb-2 font-medium">
            Full Name:
          </label>
          <input
            type="text"
            name="fullname"
            className="w-full p-2 rounded border border-gray-700 bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            pattern="[A-Za-z ]{3,}"
            title="Full name must contain at least three characters"
            placeholder="Enter your full name"
          />
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="username" className="block mb-2 font-medium">
            Email:
          </label>
          <input
            type="email"
            name="username"
            className="w-full p-2 rounded border border-gray-700 bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            pattern=".{3,}"
            title="Email must contain at least three characters"
            placeholder="Enter your email"
          />
        </div>

        {/* Password Field */}
        <div>
          <label htmlFor="password" className="block mb-2 font-medium">
            Password:
          </label>
          <input
            type="password"
            name="password"
            className="w-full p-2 rounded border border-gray-700 bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            title="Must contain at least one number, one uppercase and lowercase letter, and at least 8 or more characters"
            placeholder="Create a password"
          />
        </div>

        {/* Role Field */}
        <div>
          <label htmlFor="role" className="block mb-2 font-medium">
            Role:
          </label>
          <select
            name="role"
            className="w-full p-2 rounded border border-gray-700 bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            defaultValue={role}
          >
            <option value="student" selected={role === "student"}>
              Student
            </option>
            <option value="company" selected={role === "company"}>
              Company
            </option>
            <option value="college" selected={role === "college"}>
              College
            </option>
          </select>
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full mt-4 p-2 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        Register
      </button>
    </form>
  );
};

export default Form;

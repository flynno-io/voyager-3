"use client";
import { useState } from "react";
import clsx from "clsx";

interface InputProps {
  id: string
  name: string;
  type: string;
  value: string;
  handleChange: Function;
}

const Input = ({ id, name, type, value, handleChange }: InputProps) => {
  // Managed state: error
  const [error, setError] = useState("");

  // Function to validate each input value
  function validate(name: string, value: string) {
    if (value === "") {
      setError("This field is required");
    } else if (name === "email") {
      // Regex to validate email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      !emailRegex.test(value)
        ? setError("Invalid email address")
        : setError("");
    } else {
      setError("");
    }
  }

  // Function to update state with input values
  function handleOnChange(event: React.ChangeEvent<HTMLInputElement>) {
    event.preventDefault();
    const { id, value } = event.target as HTMLInputElement;
    handleChange(id, value);
  }

  // Function to validate inputs on blur
  function handleOnBlur(event: React.FocusEvent<HTMLInputElement>) {
    event.preventDefault();
    const { id, value } = event.target as HTMLInputElement;
    validate(id, value);
  }

  // Placeholder text based on input name
  const placeholder = (id: string) => {
    switch (id) {
      case "firstName":
        return "Alan";
      case "lastName":
        return "Shepard";
      case "email":
        return "a.shepard@nasa.com";
      case "password":
        return "Enter a password";
      case "confirm":
        return "Confirm password";
      default:
        return "";
    }
  };

  return (
    <div className={`m-0 p-0 w-full flex flex-col justify-right items-center`}>
      <div
        className={clsx(
          `mx-0.5 flex h-auto w-full items-baseline rounded-md border-2 border-black align-middle focus-within:ring-4`,
          {
            "border-red-500": error,
          }
        )}
      >
        <label
          htmlFor={name}
          className={clsx(
            `text leading-2 py-1 ps-3 pe-0 leading-4 font-medium text-black`,
            {
              "text-red-500": error,
            }
          )}
        >
          {name.toUpperCase()}
        </label>
        <input
          id={id}
          type={type}
          value={value}
          name={name}
          placeholder={placeholder(id)}
          onChange={handleOnChange}
          onBlur={handleOnBlur}
          className={`w-full flex-1 rounded-md border-none leading-4 font-light text-slate-800 placeholder-gray-500 placeholder- shadow-none focus:outline-none focus:ring-0`}
        />
      </div>
      <span
          className={`w-full h-4 pt-0.5 pb-0 ps-3 text-red-500 text-sm self-start`}
        >
          {error}
        </span>
    </div>
  );
};

export default Input;

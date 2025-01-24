"use client"
import { useState } from "react"
import clsx from "clsx"

interface InputProps {
  id: string
  name: string
  type: string
  value: string
  valueToCompare?: string
  isLogin?: boolean
  required?: boolean
  handleChange: (id: string, value: string) => void
}

const Input = ({
  id,
  name,
  type,
  value,
  valueToCompare,
  isLogin,
  required,
  handleChange,
}: InputProps) => {
  // Managed state: error
  const [error, setError] = useState("")

  // Function to validate each input value
  function validate(name: string, value: string, otherValue?: string) {
    if (!value) {
      setError("This field is required")
      return
    }

    const validators: { [key: string]: (value: string) => string } = {
      firstName: (value) =>
        /^[a-zA-Z]+$/.test(value) ? "" : "Must contain only letters",
      lastName: (value) =>
        /^[a-zA-Z]+$/.test(value) ? "" : "Must contain only letters",
      email: (value) =>
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? "" : "Invalid email address",
      password: (value) =>
        !isLogin && value.length <= 8
          ? "Password must be 8 or more characters"
          : "",
      confirm: (value) =>
        value !== otherValue ? "Passwords do not match" : "",
    }

    setError(validators[name] ? validators[name](value) : "")
  }

  // Function to update state with input values
  function handleOnChange(event: React.ChangeEvent<HTMLInputElement>) {
    event.preventDefault()
    const { id, value } = event.target as HTMLInputElement
    handleChange(id, value)
  }

  // Function to validate inputs on blur
  function handleOnBlur(event: React.FocusEvent<HTMLInputElement>) {
    event.preventDefault()
    const { id, value } = event.target as HTMLInputElement
    validate(id, value, id === "confirm" ? valueToCompare : undefined)
  }

  // Placeholder text based on input name
  const placeholder = (id: string) => {
    switch (id) {
      case "firstName":
        return "Alan"
      case "lastName":
        return "Shepard"
      case "email":
        return "a.shepard@nasa.com"
      case "password":
        return "Enter a password"
      case "confirm":
        return "Confirm password"
      default:
        return ""
    }
  }

  return (
    <div className={`justify-right m-0 flex w-full flex-col items-center p-0`}>
      <div
        className={clsx(
          `mx-0.5 flex h-auto w-full items-baseline rounded-md border-2 border-black align-middle focus-within:ring-4`,
          {
            "border-red-500": error,
          },
        )}
      >
        <label
          htmlFor={name}
          className={clsx(
            `leading-2 py-1 pe-0 ps-3 text-sm font-medium leading-4 text-black`,
            {
              "text-red-500": error,
            },
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
          required={required}
          onChange={handleOnChange}
          onBlur={handleOnBlur}
          className={`placeholder- w-full flex-1 rounded-md border-none font-light leading-4 text-slate-800 placeholder-gray-500 shadow-none focus:outline-none focus:ring-0`}
        />
      </div>
      <span className={`h-4 w-full self-start p-1 ps-3 text-sm text-red-500`}>
        {error}
      </span>
    </div>
  )
}

export default Input

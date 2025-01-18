"use client";
import { useState } from "react";
import VoyagerLogo from "@/ui/voyager-logo";
import Input from "../Input";
import Button from "../button";
import Link from "next/link";

export default function SignUpForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirm: "",
  });

  // Function to Update the form values upon change
  function handleChange(name: string, value: string) {
    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  // Function to handle the form submission
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log(formData);
  }

  return (
    <>
    <form
      onSubmit={handleSubmit}
      className={`m-0 flex h-auto w-full flex-col gap-1 space-y-2 p-0`}
    >
      <Input
        id="firstName"
        name="First Name"
        value={formData["firstName"]}
        type="text"
        handleChange={handleChange}
        required={true}
      />
      <Input
        id="lastName"
        name="Last Name"
        value={formData["lastName"]}
        type="text"
        handleChange={handleChange}
        required={true}
      />
      <Input
        id="email"
        name="Email"
        value={formData.email}
        type="email"
        handleChange={handleChange}
        required={true}
      />
      <Input
        id="password"
        name="Password"
        isLogin={false}
        value={formData.password}
        type="password"
        handleChange={handleChange}
        required={true}
      />
      <Input
        id="confirm"
        name="Confirm"
        value={formData.confirm}
        valueToCompare={formData.password}
        type="password"
        handleChange={handleChange}
        required={true}
      />
      <div className={`mx-4 pb-2 flex flex-row items-center justify-start`}>
        <input className={`rounded-sm`} type="checkbox" id="terms" name="terms" value="terms" required />
        <label
          htmlFor="terms"
          className={`flex gap-1 leading-2 py-1 pe-0 ps-3 text-sm font-medium leading-4 text-black`}
        >
          <p>I agree to the terms and conditions</p>
          <a className={`text-blue-500 underline`} href="/terms-and-conditions">here</a>
        </label>
      </div>
      <Button isPrimary={true} type="submit">
        Sign Up
      </Button>
    </form>
    <div className={`flex flex-row gap-2 my-2 ms-2 text-sm`}>
      <p>Already have an account?</p>
      <Link href="/login" className={`text-blue-500`}>
        Login
      </Link>
    </div>
    </>
  );
}

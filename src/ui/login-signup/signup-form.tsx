"use client";
import { useState } from "react";
import VoyagerLogo from "@/ui/voyager-logo";
import Input from "../Input";
import Button from "../button";

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
      />
      <Input
        id="lastName"
        name="Last Name"
        value={formData["lastName"]}
        type="text"
        handleChange={handleChange}
      />
      <Input
        id="email"
        name="Email"
        value={formData.email}
        type="email"
        handleChange={handleChange}
      />
      <Input
        id="password"
        name="Password"
        value={formData.password}
        type="password"
        handleChange={handleChange}
      />
      <Input
        id="confirm"
        name="Confirm"
        value={formData.confirm}
        type="password"
        handleChange={handleChange}
      />
      <Button isPrimary={true} type="submit">
        Login
      </Button>
    </form>
  );
}

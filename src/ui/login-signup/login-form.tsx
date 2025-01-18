"use client";
import { useState } from "react";
import VoyagerLogo from "@/ui/voyager-logo";
import Input from "../Input";
import Button from "../button";

export default function LoginForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
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
    <form onSubmit={handleSubmit} className={`m-0 p-0 flex h-auto w-full gap-1 flex-col space-y-2`}>
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
      <Button className={`m`} isPrimary={true} type="submit">Login</Button>
    </form>
  );
}

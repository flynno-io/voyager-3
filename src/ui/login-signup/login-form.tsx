"use client";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import Input from "../Input";
import Button from "../button";
import clsx from "clsx";
import Link from "next/link";

export default function LoginForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [failedLogin, setFailedLogin] = useState(false);

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
    setFailedLogin(true);
    console.log(formData);
  }

  return (
    <div className={`relative m-0`}>
      <form
        onSubmit={handleSubmit}
        className={`m-0 flex h-auto w-full flex-col gap-1 space-y-2 p-0`}
      >
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
          isLogin={true}
          type="password"
          handleChange={handleChange}
        />
        <Button className={`m`} isPrimary={true} type="submit">
          Login
        </Button>
      </form>
      <div className={`my-2 ms-2 flex flex-row gap-2 text-sm`}>
        <p>Don't have an account?</p>
        <Link href="/sign-up" className={`text-blue-500`}>
          Sign up
        </Link>
      </div>
      <div
        className={clsx(
          `visible absolute my-5 flex flex-row items-center justify-center gap-2 rounded-md border-2 border-red-500 p-4 text-base`,
          {
            hidden: !failedLogin,
          },
        )}
      >
        <FontAwesomeIcon
          icon={faCircleInfo}
          size="lg"
          className={`text-red-500`}
        />
        <p>Pssss...</p>
        <a href="/forgot-password" className={`text-blue-500`}>
          forgot your Password?
        </a>
      </div>
    </div>
  );
}

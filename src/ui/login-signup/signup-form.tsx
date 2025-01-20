"use client";
import { useRouter } from "next/navigation";
import { useActionState, useEffect, useState } from "react";
import Link from "next/link";
import Input from "@/ui/input";
import Button from "@/ui/button";
import Error from "@/ui/error";
import { signup } from "@/utils/actions";

export default function SignUpForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirm: "",
  });
  const [signUpState, signUpAction, isPending] = useActionState(signup, {
    success: false,
    message: "",
  });

  // Redirect to blog page if login is successful
  useEffect(() => {
    function redirectToBlog() {
      router.push("/transmissions");
    }
    if (signUpState.success) {
      redirectToBlog();
    }
  }, [signUpState]);

  // Function to Update the form values upon change
  function handleChange(name: string, value: string) {
    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  return (
    // relative class is added to the parent div to make the error message absolute
    <div className={`relative flex h-auto flex-col gap-1 space-y-2`}>
      <form
        action={signUpAction}
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
        <div className={`mx-4 flex flex-row items-center justify-start pb-2`}>
          <input
            className={`rounded-sm`}
            type="checkbox"
            id="terms"
            name="terms"
            value="terms"
            required
          />
          <label
            htmlFor="terms"
            className={`leading-2 flex gap-1 py-1 pe-0 ps-3 text-sm font-medium leading-4 text-black`}
          >
            <p>I agree to the terms and conditions</p>
            <a
              className={`text-blue-500 underline`}
              href="/terms-and-conditions"
            >
              here
            </a>
          </label>
        </div>
        <Button
          className={`disabled:opacity-50 disabled:hover:cursor-wait`}
          disabled={isPending}
          isPrimary={true}
          type="submit"
        >
          {isPending ? "Loading..." : "Sign Up"}
        </Button>
      </form>
      <div className={`my-2 ms-2 flex flex-row gap-2 text-sm`}>
        <p>Already have an account?</p>
        <Link href="/login" className={`text-blue-500`}>
          Login
        </Link>
      </div>
      <Error message={signUpState.message} />
    </div>
  );
}

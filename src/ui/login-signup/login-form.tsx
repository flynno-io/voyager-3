"use client"
import { useRouter } from "next/navigation"
import { useActionState, useEffect, useState } from "react"
import Link from "next/link"
import Input from "@/ui/input"
import Button from "@/ui/button"
import Error from "@/ui/error"
import { login } from "@/lib/actions"

export default function LoginForm() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  // Login Function to authenticate the user
  const [loginState, loginAction, isPending] = useActionState(login, {
    success: false,
    message: "",
    attempts: 0,
  })

  // Redirect to blog page if login is successful
  useEffect(() => {
    function redirectToBlog() {
      router.push("/transmissions")
    }
    if (loginState.success) {
      redirectToBlog()
    }
  }, [loginState])

  // Function to Update the form values upon change
  function handleChange(name: string, value: string) {
    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      }
    })
  }

  // Function to handle form submission
  // function handleSubmit(event) {
  //   event.preventDefault();
  //   loginAction(formData);
  // }

  return (
    // relative class is added to the parent div to make the error message absolute
    <div className={`relative flex h-auto flex-col gap-1 space-y-2`}>
      <form
        action={loginAction}
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
        <Button
          className={`disabled:opacity-50 disabled:hover:cursor-wait`}
          disabled={isPending}
          isPrimary={true}
          type="submit"
        >
          {isPending ? "Loading..." : "Login"}
        </Button>
      </form>
      <div className={`my-2 ms-2 flex flex-row gap-2 text-sm`}>
        <p>Don't have an account?</p>
        <Link href="/sign-up" className={`text-blue-500`}>
          Sign up
        </Link>
      </div>
      <Error message={loginState.message} />
    </div>
  )
}

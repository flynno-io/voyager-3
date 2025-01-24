"use server"

import {
  LoginFormState,
  LoginFormSchema,
  SignupFormSchema,
  SignUpFormState,
} from "@/lib/definitions"
import { createSession, deleteSession } from "@/lib/session"
import connectDB from "@/lib/connectDB"
import { User } from "@/lib/models"
import { redirect } from "next/navigation"

// Login the user
export async function login(state: LoginFormState, formData: FormData) {
  // Validate the form data
  const validatedFields = LoginFormSchema.safeParse({
    email: formData.get("Email"),
    password: formData.get("Password"),
  })

  // If the form data is invalid, return the errors
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      attempts: 0,
    }
  }

  // Extract the form data
  const { email, password } = validatedFields.data

  try {
    // Connect to the database
    await connectDB()

    // Check if the user exists
    const user = await User.findOne({ email })

    // If the user does not exist, return error
    if (!user) {
      return {
        message: "Could not authenticate user. Please try again.",
        attempts: state.attempts + 1,
      }
    }

    // Check if the provided password is correct
    const correctPw = await user.isCorrectPassword(password)

    // If the password is incorrect, return error
    if (!correctPw) {
      return {
        message: "Could not authenticate user.",
        attempts: state.attempts + 1,
      }
    }

    // Create a session for the user
    await createSession(user._id.toString())
  } catch (error) {
    return {
      message: "Internal Server Error. Please try again.",
      attempts: 0,
    }
  }

  // Redirect user to '/transmissions' page
  redirect("/transmissions")
}

export async function logout() {
  await deleteSession()
  redirect("/login")
}

// Create a new user and login
export async function signup(state: SignUpFormState, formData: FormData) {
  // Validate the form data
  const validatedFields = SignupFormSchema.safeParse({
    firstName: formData.get("First Name"),
    lastName: formData.get("Last Name"),
    email: formData.get("Email"),
    password: formData.get("Password"),
    confirm: formData.get("Confirm"),
  })

  // If the form data is invalid, return the errors
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }

  // Extract the form data
  const { firstName, lastName, email, password } = validatedFields.data

  try {
    // Connect to the database
    await connectDB()

    // Check if user exists, if yes, return error
    const userExists = await User.findOne({ email })

    if (userExists) {
      return {
        message: "User already exists. Please update info and try again.",
      }
    }

    // Create user
    const user = await User.create({ firstName, lastName, email, password })

    // If user creation fails, return error
    if (!user) {
      return {
        message:
          "An error occurred while creating your account. Please try again.",
      }
    }

    // Create a session for the user
    await createSession(user._id.toString())
  } catch (error) {
    return { message: "Internal Server Error. Please try again." }
  }

  // Redirect user to '/transmissions' page
  redirect("/transmissions")
}

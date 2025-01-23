"use server"

import { SignupFormSchema, SignUpFormState } from "@/lib/definitions"
import connectDB from "@/lib/connectDB"
import { User } from "@/lib/models"

// Login the user
export async function login(prevState, formData) {
  const email = formData.get("Email")
  const password = formData.get("Password")
  return {
    success: true,
    message: "",
  }
  return {
    success: false,
    message: "Unable to authenticate user",
    attempts: prevState.attempts + 1,
  }
}

// Create a new user and login
export async function signup(state: SignUpFormState, formData: FormData) {
  // Validate the form data
  const validatedFields = SignupFormSchema.safeParse({
    firstName: formData.get("First Name"),
    lastName: formData.get("Last Name"),
    email: formData.get("Email"),
    password: formData.get("Password"),
  })

  // If the form data is invalid, return the errors
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      success: false,
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
        success: false,
        message: "User already exists. Please update info and try again.",
      }
    }

    // Create user
    const user = await User.create({ firstName, lastName, email, password })

    // If user creation fails, return error
    if (!user) {
      return {
        success: false,
        message:
          "An error occurred while creating your account. Please try again.",
      }
    }

    // Return success
    return { success: true, message: "" }
  } catch (error) {
    return { success: false, message: "Internal Server Error" }
  }
}

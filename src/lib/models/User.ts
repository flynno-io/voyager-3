import { Schema, model, models } from "mongoose"
import bcrypt from "bcrypt"

// for user roles
enum UserRole {
  User = "user",
  Admin = "admin",
}

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
  role: {
    type: {
      type: String,
      enum: Object.values(UserRole),
      default: UserRole.User,
    },
  },
})

// set up pre-save middleware to create password
userSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10
    this.password = await bcrypt.hash(this.password, saltRounds)
  }

  next()
})

// compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function (password) {
  return await bcrypt.compare(password, this.password)
}

const User = models.User || model("User", userSchema)

export default User

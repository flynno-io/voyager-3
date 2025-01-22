import mongoose from "mongoose"

const uri = process.env.MONGODB_URI || "mongodb://localhost:27017/voyager3"

let cached = global.mongoose

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null }
}

export default async function connectDB() {
  // Check if the connection is already cached
  if (cached.conn) {
    return cached.conn
  }

  // Create a new connection promise
  cached.promise = mongoose.connect(uri).then((mongoose) => {
    return mongoose
  })
}

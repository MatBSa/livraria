import mongoose, { mongo } from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

async function conectaDatabase() {
  const username = process.env.DB_USERNAME
  const password = process.env.DB_PASSWORD
  const dbUrl = process.env.DB_URL

  mongoose.connect(`mongodb+srv://${username}:${password}@${dbUrl}`)

  return mongoose.connection
}

export default conectaDatabase

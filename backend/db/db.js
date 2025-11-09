import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

let isDbConnected = false

const db = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL)
    console.log('Connecting to database...')
  } catch (error) {
    console.log('❌ Database Connection Error:', error.message)
    process.exit(1)
  }
}

export { db, isDbConnected }

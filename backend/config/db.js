import mongoose from 'mongoose'

export const connectDB = () => {
    mongoose.connect(process.env.MONGO_URL)
    .then(con=> console.log(`Database connected : ${con.connection.host}`))
    .catch(err => console.log(err))
}
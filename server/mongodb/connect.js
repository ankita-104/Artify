import mongoose from 'mongoose';



// Connect to MongoDB

const connectDB =(url) => {
    mongoose.set('strictQuery', true);


    mongoose.connect(url)
    .then(() => console.log("MongoDB connected!"))
    .catch((err)=> console.log(err));
    
}
// console.log("Welcome to Mongo")

export default connectDB;
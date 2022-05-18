import mongoose from 'mongoose';
import 'dotenv/config';

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true, 
      useNewUrlParser: true 
    });
    
    console.log('MongoDB connection SUCCESS');
  } catch(error) {
    console.log('MongoDB connection FAILURE', error);
  }
};

export default connectDB;
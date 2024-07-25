import { connect } from 'mongoose';
import { config } from 'dotenv';
const mongoURI = process.env.MONGODB_URI
export const dbConnection = connect('mongodb://127.0.0.1:27017/JobSearch').then(() => {
    console.log('connected to database ✔');
}).catch(() => {
    console.log('connection failed ✘');
})

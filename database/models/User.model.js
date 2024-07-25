import { model, Schema } from "mongoose";

let userSchema = new Schema({
    firstName: String,
    lastName: String,
    username: String,
    email: String,
    password: String,
    recoveryEmail: String,
    DOB: Date,
    mobileNumber: String,
    role: {
        type: String,
        enum: ["user", "company_HR"],
        default: "user"
    },
    status: {
        type: String,
        enum: ["offline", "online"],
        default: "offline"
    }
})

let User = model('User', userSchema)
export default User
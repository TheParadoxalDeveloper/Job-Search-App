import { model, Schema } from "mongoose";

let companySchema = new Schema({
    companyName: String,
    description: String,
    industry: String,
    address: String,
    numberOfEmployees: Number,
    companyEmail: String,
    companyHR: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }

})

let Company = model('Company', companySchema)
export default Company

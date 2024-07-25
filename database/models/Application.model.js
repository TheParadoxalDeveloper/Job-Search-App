import { model, Schema } from "mongoose";

let applicationSchema = new Schema({
    jobId: {
        type: Schema.Types.ObjectId,
        ref: 'Job'
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    userTechSkills: Array,
    userSoftSkills: Array

})

let Application = model('Application', applicationSchema)
export default Application


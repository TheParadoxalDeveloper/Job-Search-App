import { model, Schema } from "mongoose";

let jobSchema = new Schema({
    jobTitle: String,
    jobLocation: {
        type: String,
        enum: ["onsite", "remotely", "hybrid"]
    },
    workiingTime: {
        type: String,
        enum: ["part-time", "full-time"]
    },
    seniorityLevel: {
        type: String,
        enum: ["junior", "mid-level", "senior", "team-lead", "cto"]
    },
    jobDescription: String,
    technicalSkills: Array,
    softSkills: Array,
    addedBy: {
        type: Schema.Types.ObjectId,
        ref: 'Company'
    }
})

let Job = model('Job', jobSchema)
export default Job



import joi from 'joi'

export let jobValidation = joi.object({
    jobTitle: joi.string().min(2).required(),
    jobLocation: joi.string().required().valid("onsite").valid("remotely").valid("hybrid"),
    workingTime: joi.string().required().valid("part-time").valid("full-time"),
    seniorityLevel: joi.string().required().valid("junior").valid("mid-level").valid("senior").valid("team-lead").valid("cto"),
    jobDescription: joi.string().min(3).max(2500).required(),
    technicalSkills: joi.array().required(),
    softSkills: joi.array().required(),
    addedBy: joi.string().hex().length(24).required()
})
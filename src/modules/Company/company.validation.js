import joi from 'joi'

export let companyValidation = joi.object({
    companyName: joi.string().min(2).required(),
    description: joi.string().min(10).max(2000).required(),
    industry: joi.string().min(2).required(),
    address: joi.string().min(4).required(),
    numberOfEmployees: joi.number().min(3).max(2500).required(),
    companyEmail: joi.string().email().required(),
    companyHR: joi.string().hex().length(24).required()
})
import joi from 'joi'

export let userValidation = joi.object({
    firstname: joi.string().min(2).required(),
    lastName: joi.string().min(2).required(),
    username: joi.string().min(2).required(),
    email: joi.string().email().required(),
    password: joi.string().min(4).max(40).required(),
    recoveryEmail: joi.string().email().required(),
    DOB: joi.date().required(),
    role: joi.string().required().valid('user').valid('company_HR'),
    status: joi.string().required().valid('offline').valid('online')
})
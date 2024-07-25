import Company from "../../database/models/Company.model.js"

export const verifyRole = async (req, res, next) => {
    let role = req.user.role
    if (role != 'company_HR') return res.status(401).json({ message: "You are not authorized to perform this action" })
    next()
}

export const verifyRole2 = async (req, res, next) => {
    let role = req.user.role
    if (role != 'company_HR' && role != 'user') return res.status(401).json({ message: "You are not authorized to perform this action" })
    next()
}

export const verifyRole3 = async (req, res, next) => {
    let role = req.user.role
    if (role != 'user') return res.status(401).json({ message: "You are not authorized to perform this action" })
    next()
}

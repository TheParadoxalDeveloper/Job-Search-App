import User from "../../database/models/User.model.js"

export const checkEmail = async (req, res, next) => {
    let checkEmail = await User.findOne({ email: req.body.email })
    let checkPhone = await User.findOne({ mobileNumber: req.body.mobileNumber })
    if (checkEmail || checkPhone) return res.status(400).json({ message: "Email or Phone Already Exists In A Previous User" })
    next()
}
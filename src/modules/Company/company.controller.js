import Company from "../../../database/models/Company.model.js"
import { errorHandling } from "../../middleware/errorHandling.js"
import { AppError } from "../../utils/AppError.js"

// - API for adding data of company.

export const addCompany = errorHandling(async (req, res) => {
    let checkName = await Company.findOne({ companyName: req.body.companyName })
    if (checkName) return res.status(400).json({ message: "Company Already Exists!" })
    let newCompany = await Company.insertMany(req.body)
    res.status(200).json({ message: "Hello HR!, Company added successfully", data: newCompany })
})

// - API for updating data of company.

export const updateCompany = errorHandling(async (req, res, next) => {
    let updatedCompany = await Company.findByIdAndUpdate(req.user.id, req.body, { new: true })
    if (!updatedCompany) return next(new AppError('Company not found!', 404))
    res.status(200).json({ message: "Hello HR!, Company updated successfully", data: updatedCompany })
})

// - API for deleting data of company.

export const deleteCompany = errorHandling(async (req, res, next) => {
    let deletedCompany = await Company.findByIdAndDelete(req.user.id)
    if (!deleteCompany) return next(new AppError('Company not found!', 404))
    res.status(200).json({ message: "Hello HR!, Company deleted successfully", data: deletedCompany })
})

// - API for getting data of company.

export const getCompanyData = errorHandling(
    async (req, res, next) => {
        let companyData = await Company.findById(req.params.id)
        if (!companyData) return next(new AppError('Company not found!', 404))
        res.status(200).json({ message: "all company data is retrieved!", data: companyData })
    }
)

// - API for getting data of company with companyName.

export const getCompanyByName = errorHandling(async (req, res, next) => {
    let companyData = await Company.findOne({ companyName: req.body.companyName })
    if (!companyData) return next(new AppError('Company not found!', 404))
    res.status(200).json({ message: "all company data is retrieved!", data: companyData })
})
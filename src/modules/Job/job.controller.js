import { Query } from "mongoose"
import Job from "../../../database/models/Job.model.js"
import { errorHandling } from "../../middleware/errorHandling.js"
import { AppError } from "../../utils/AppError.js"
import Company from "../../../database/models/Company.model.js"
import Application from "../../../database/models/Application.model.js"

// - API for adding data of a job.

export const addJob = errorHandling(async (req, res) => {
    let newJob = await Job.insertMany(req.body)
    res.status(200).json({ message: "Hello HR!, Job added successfully", data: newJob })
})

// - API for updating data of a job.


export const updateJob = errorHandling(async (req, res, next) => {
    let updatedJob = await Job.findByIdAndUpdate(req.params.id, req.body, { new: true })
    if (!updatedJob) return next(new AppError('Job not found!', 404))
    res.status(200).json({ message: "Hello HR!, Job updated successfully", data: updatedJob })
})

// - API for deleting data of a job.

export const deleteJob = errorHandling(async (req, res, next) => {
    let deletedJob = await Job.findByIdAndDelete(req.params.id)
    if (!deletedJob) return next(new AppError('Job not found!', 404))
    res.status(200).json({ message: "Hello HR!, Job Deleted successfully", data: deletedJob })
})

// - API for getting data of a job along with company data.

export const getJobAndCompany = errorHandling(async (req, res, next) => {
    let allJobs = await Job.find().populate('addedBy', ['_id', 'companyName', 'industry'])
    if (!allJobs) return next(new AppError('Jobs not found!', 404))
    res.status(200).json({ message: 'All Jobs Retrieved', allJobs: allJobs })
})

// - API for getting data of a job with companyName.

export const getJobByName = errorHandling(async (req, res, next) => {
    let { _id } = await Company.findOne({ companyName: req.query.companyName })
    let allJobs = await Job.find({ addedBy: _id }).populate('addedBy', ['_id', 'companyName', 'industry'])
    if (!allJobs) return next(new AppError('Jobs not found!', 404))
    res.status(200).json({ message: 'All Jobs Retrieved', allJobs: allJobs })
})

// - API for applying to a job with an application.

export const ApplyToJob = errorHandling(async (req, res, next) => {
    let newApply = await Application.insertMany(req.body)
    res.status(200).json({ message: "Hello Applicant!, Application added successfully", data: newApply })
})

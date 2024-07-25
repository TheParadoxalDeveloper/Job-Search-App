import { Router } from "express";
import { verifyToken } from "../../middleware/verifyToken.js";
import { verifyRole, verifyRole2, verifyRole3 } from "../../middleware/verifyRole.js";
import { addJob, ApplyToJob, deleteJob, getJobAndCompany, getJobByName, updateJob } from "./job.controller.js";
import { dataValidate } from "../../middleware/dataValidate.js";
import { jobValidation } from "./job.validation.js";

let jobRouter = Router()

jobRouter.post('/', verifyToken, verifyRole, addJob)
jobRouter.put('/:id', verifyToken, verifyRole,dataValidate(jobValidation), updateJob)
jobRouter.delete('/:id', verifyToken, verifyRole, deleteJob)
jobRouter.get('/', verifyToken, verifyRole2, getJobAndCompany)
jobRouter.get('/none', verifyToken, verifyRole2, getJobByName)

jobRouter.post('/new/application', verifyToken, verifyRole3, ApplyToJob)



export default jobRouter
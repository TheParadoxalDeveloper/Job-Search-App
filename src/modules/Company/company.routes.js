import { Router } from "express";
import { addCompany, deleteCompany, getCompanyByName, getCompanyData, updateCompany } from "./company.controller.js";
import { verifyToken } from "../../middleware/verifyToken.js";
import { verifyRole, verifyRole2 } from "../../middleware/verifyRole.js";
import { companyValidation } from "./company.validation.js";
import { dataValidate } from "../../middleware/dataValidate.js";

let companyRouter = Router()

companyRouter.post('/', verifyToken, verifyRole, dataValidate(companyValidation), addCompany)
companyRouter.put('/', verifyToken, verifyRole, updateCompany)
companyRouter.delete('/', verifyToken, verifyRole, deleteCompany)
companyRouter.get('/:id', verifyToken, verifyRole, getCompanyData)
companyRouter.get('/', verifyToken, verifyRole2, getCompanyByName)


export default companyRouter
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const employee_controller_1 = require("../controller/employee.controller");
const validar_campos_1 = require("../middlewares/validar-campos");
const DB_Validator_1 = require("../helpers/DB-Validator");
const router = express_1.Router();
router.get('/', [validar_campos_1.validarCampos], employee_controller_1.getEmployees);
router.get('/:id', [
    express_validator_1.check('id').isNumeric().withMessage('El id debe ser numeric').notEmpty().withMessage('No puede ir vacio'),
    express_validator_1.check('id').custom(DB_Validator_1.existeID),
    validar_campos_1.validarCampos
], employee_controller_1.getEmployee);
router.get('/:id', [
    express_validator_1.check('id').isNumeric().withMessage('El id debe ser numeric').notEmpty().withMessage('No puede ir vacio'),
    express_validator_1.check('id').custom(DB_Validator_1.existeID),
    validar_campos_1.validarCampos
], employee_controller_1.makeBoosAEmployee);
router.post('/', [
    express_validator_1.check('name', 'El campo name es obligatorio').notEmpty(),
    express_validator_1.check('last_name', 'El campo last name es obligatorio').notEmpty(),
    express_validator_1.check('email').custom(DB_Validator_1.existeEmail),
    validar_campos_1.validarCampos
], employee_controller_1.saveEmployee);
router.put('/:id', [
    express_validator_1.check('id').isNumeric().withMessage('El id debe ser numeric').notEmpty().withMessage('No puede ir vacio'),
    express_validator_1.check('id').custom(DB_Validator_1.existeID),
    validar_campos_1.validarCampos
], employee_controller_1.editEmployee);
router.delete('/:id', [
    express_validator_1.check('id').isNumeric().withMessage('El id debe ser numeric').notEmpty().withMessage('No puede ir vacio'),
    express_validator_1.check('id').custom(DB_Validator_1.existeID),
    validar_campos_1.validarCampos
], employee_controller_1.deleteEmployee);
router.get('/MakeaBoss/:id', [
    express_validator_1.check('id').isNumeric().withMessage('El id debe ser numeric').notEmpty().withMessage('No puede ir vacio'),
    express_validator_1.check('id').custom(DB_Validator_1.existeID),
    express_validator_1.check('id').custom(DB_Validator_1.existeEsteJefe),
    validar_campos_1.validarCampos
], employee_controller_1.makeBoosAEmployee);
//router.delete('/:id', eliminarProducto);
exports.default = router;
//# sourceMappingURL=employee.routes.js.map
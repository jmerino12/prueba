"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const employee_controller_1 = require("../controller/employee.controller");
const validar_campos_1 = require("../middlewares/validar-campos");
const router = express_1.Router();
router.get('/', [validar_campos_1.validarCampos], employee_controller_1.getEmployees);
router.get('/:id', [validar_campos_1.validarCampos], employee_controller_1.getEmployee);
router.post('/', [validar_campos_1.validarCampos], employee_controller_1.saveEmployee);
router.put('/:id', [validar_campos_1.validarCampos], employee_controller_1.editEmployee);
router.delete('/:id', [validar_campos_1.validarCampos], employee_controller_1.deleteEmployee);
//router.delete('/:id', eliminarProducto);
exports.default = router;
//# sourceMappingURL=employee.routes.js.map
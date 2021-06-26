
import { Router } from "express";
import { getEmployee, saveEmployee, editEmployee, getEmployees, deleteEmployee } from '../controller/employee.controller';
import { validarCampos } from '../middlewares/validar-campos';


const router = Router();

router.get('/', [validarCampos], getEmployees);

router.get('/:id', [validarCampos], getEmployee);

router.post('/', [validarCampos], saveEmployee);

router.put('/:id', [validarCampos], editEmployee);

router.delete('/:id', [validarCampos], deleteEmployee);


//router.delete('/:id', eliminarProducto);

export default router;
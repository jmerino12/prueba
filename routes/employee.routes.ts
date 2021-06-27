
import { Router } from "express";
import { check } from "express-validator";
import { getEmployee, saveEmployee, editEmployee, getEmployees, deleteEmployee, makeBoosAEmployee } from '../controller/employee.controller';
import { validarCampos } from '../middlewares/validar-campos';
import { existeEmail, existeID, existeEsteJefe } from '../helpers/DB-Validator';


const router = Router();

router.get('/', [validarCampos], getEmployees);

router.get('/:id', [ 
    check('id').isNumeric().withMessage('El id debe ser numeric').notEmpty().withMessage('No puede ir vacio'),
    check('id').custom(existeID),
    validarCampos], getEmployee);

router.get('/:id', [
    check('id').isNumeric().withMessage('El id debe ser numeric').notEmpty().withMessage('No puede ir vacio'),
    check('id').custom(existeID)
    ,validarCampos], makeBoosAEmployee);

router.post('/', [
    check('name', 'El campo name es obligatorio').notEmpty(),
    check('last_name', 'El campo last name es obligatorio').notEmpty(),
    check('email').custom(existeEmail),
    validarCampos], saveEmployee);

router.put('/:id', [
    check('id').isNumeric().withMessage('El id debe ser numeric').notEmpty().withMessage('No puede ir vacio'),
    check('id').custom(existeID),
    validarCampos], editEmployee);

router.delete('/:id', [
    check('id').isNumeric().withMessage('El id debe ser numeric').notEmpty().withMessage('No puede ir vacio'),
    check('id').custom(existeID)
    ,validarCampos], deleteEmployee);

router.get('/MakeaBoss/:id', [
    check('id').isNumeric().withMessage('El id debe ser numeric').notEmpty().withMessage('No puede ir vacio'),
    check('id').custom(existeID),
    check('id').custom(existeEsteJefe)

    ,validarCampos], makeBoosAEmployee);


//router.delete('/:id', eliminarProducto);

export default router;
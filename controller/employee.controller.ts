import { Request, Response } from "express";
import Employee from "../models/employees";
import employee from "../models/employees";


export const getEmployees = async (req: Request, res: Response) => {
    const empleado = await employee.findAll({
        where:{
            status:1
        }
    });
    if (!empleado) return res.status(404).json({ msg: `No registros en la BD` })
    res.json({
        msg: 'getEmployees',
        empleados:empleado
    })

}

export const getEmployee = async (req: Request, res: Response) => {
    const { id } = req.params;

    const empleado = await employee.findOne({
        where: {  status: 1 },
    });
    if (!empleado) return res.status(404).json({ msg: `No existe el empleado con el id ${id}` })
    res.json({
        msg: 'getEmployee',
        empleado
    })

}


export const editEmployee = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { body } = req;

    try {
        const empleado = await employee.findByPk(id);
        await empleado!!.update(body);
        res.json({
            msg: 'editEmployee',
            empleado
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: 'Hable con el administrador',
        });
    }
}

export const deleteEmployee = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const empleado = await employee.findByPk(id);
         empleado!!.status = 0;
         await empleado!!.save();
        res.json({
            msg: 'deleteEmployee',
            empleado
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: 'Hable con el administrador',
        });
    }
}

export const saveEmployee = async (req: Request, res: Response) => {
    const { id_boss, name, last_name, email} = req.body;
    try {
        const existeEmail = await Employee.findOne({
            where:{
                email
            }
        })
        if(existeEmail){
            return res.status(400).json({
                msg: `Error, ya existe en usuario con el email: ${email} registrado `,
            });
        }
        const empleado =  Employee.build({ id_boss  , name, last_name, email});
        await empleado.save();
        res.status(200).json({
            msg: 'saveEmployee',
            empleado
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: 'Hable con el administrador',
        });
    }
}
import Boss from "../models/bosses";
import Employee from "../models/employees";



export const existeEmail = async (email = '') => {
    const exiteEmail = await Employee.findOne({ where: { email } });
    if (exiteEmail) {
        throw new Error(`El email ${email} ya existe.`);
    }
}

export const existeID = async (id: number) => {
    const existeID = await Employee.findOne({
        where:{
            idemployee:id,
            status:1
        }});
    if (!existeID) {
        throw new Error(`El id:${id} no existe.`)
    }
}

export const existeEsteJefe = async (id: number) => {
    const existeID = await Boss.findOne({
        where:{
            id_Employee:id,
        }});
    if (existeID) {
        throw new Error(`Ya existe este jefe:${id}`)
    }
}
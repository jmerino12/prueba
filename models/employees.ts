import { DataTypes, Model } from "sequelize";
import db from "../db/connection";

interface EmployeesAttributes extends Model {
    idemployee: number;
    id_boss: number;
    name: string;
    last_name: string;
    email: string;
    status: number;
}

const Employee = db.define<EmployeesAttributes>('employee',{
    idemployee: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true
    },
    id_boss: {
        type: DataTypes.INTEGER.UNSIGNED,
        unique: true,
    },
    name: {
        type: DataTypes.STRING
    },
    last_name: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
    },
    status: {
        type: DataTypes.INTEGER,
        defaultValue: 1
    },
},{
    tableName: 'employees',
    timestamps: false,
    getterMethods:{
        fullName(){
            return this.getDataValue('name') + " " + this.getDataValue('last_name');
        }
    }
});

/*Employee.prototype.toJSON = function (){
    const {}
}*/

export default Employee;
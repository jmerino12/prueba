import { DataTypes, Model } from "sequelize";
import db from "../db/connection";
import employee from "./employees";

interface BossesAttributes extends Model {
    idbosses: number;
    id_Employee: number;
}

const Employee = db.define<BossesAttributes>('boss',{
    idbosses: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true
    },
    id_Employee: {
        type: DataTypes.INTEGER.UNSIGNED,
        references: {
            model: employee,
            key: 'id_Employee'
        }
    }
},{
    tableName: 'bosses',
});

export default Employee;


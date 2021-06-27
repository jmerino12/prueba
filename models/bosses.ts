import { DataTypes, Model } from "sequelize";
import db from "../db/connection";
import employee from "./employees";

interface BossesAttributes extends Model {
    idbosses: number;
    id_Employee: number;
}

const Boss = db.define<BossesAttributes>('boss',{
    idbosses: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
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
    timestamps: false,
});

export default Boss;


"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Employee = connection_1.default.define('employee', {
    idemployee: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true
    },
    id_boss: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        unique: true,
    },
    name: {
        type: sequelize_1.DataTypes.STRING
    },
    last_name: {
        type: sequelize_1.DataTypes.STRING
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        unique: true,
    },
    status: {
        type: sequelize_1.DataTypes.INTEGER,
        defaultValue: 1
    },
}, {
    tableName: 'employees',
    timestamps: false,
    getterMethods: {
        fullName() {
            return this.getDataValue('name') + " " + this.getDataValue('last_name');
        }
    }
});
/*Employee.prototype.toJSON = function (){
    const {}
}*/
exports.default = Employee;
//# sourceMappingURL=employees.js.map
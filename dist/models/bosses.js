"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const employees_1 = __importDefault(require("./employees"));
const Employee = connection_1.default.define('boss', {
    idbosses: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true
    },
    id_Employee: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        references: {
            model: employees_1.default,
            key: 'id_Employee'
        }
    }
}, {
    tableName: 'bosses',
});
exports.default = Employee;
//# sourceMappingURL=bosses.js.map
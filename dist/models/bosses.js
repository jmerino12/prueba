"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const employees_1 = __importDefault(require("./employees"));
const Boss = connection_1.default.define('boss', {
    idbosses: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
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
    timestamps: false,
});
exports.default = Boss;
//# sourceMappingURL=bosses.js.map
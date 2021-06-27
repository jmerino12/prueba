"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db = new sequelize_1.Sequelize('mydb', 'bancouser', 'bancopass', {
    host: 'banco-mysql-app',
    dialect: 'mysql',
    port: 3306,
    logging: true,
});
exports.default = db;
//# sourceMappingURL=connection.js.map
import { Sequelize } from "sequelize";

const db = new Sequelize('mydb', 'bancouser', 'bancopass', {
    host: 'banco-mysql-app',
    dialect: 'mysql',
    port:3306,
    logging:true,
    
});

export default db;
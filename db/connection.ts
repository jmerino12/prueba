import { Sequelize } from "sequelize";

const db = new Sequelize('mydb', 'root', '99010409329Jo', {
    host: 'localhost',
    dialect: 'mysql',
    //logging:false
});

export default db;
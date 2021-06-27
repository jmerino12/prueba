import express, { Application, json } from "express";
import employeesRoute from "../routes/employee.routes";
import db from "../db/connection";
import cors from "cors";



class Server {

    private app: Application;
    private port: String;
    private apiPaths = {
        empleyee: '/api/employee',
    };

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '8005';

        this.dbConnection();
        this.middlewares();
        this.routes();
        this.associations();
    }

    async dbConnection() {
        try {
            await db.authenticate();
            console.log('DB ONLINE')
        } catch (error) {
            throw new Error(error)
        }
    }

    middlewares() {
        //CORS
        this.app.use(cors());
        //LECTURA BODY
        this.app.use(json());
        //CARPETA PUBLICA
        this.app.use(express.static('public'));
    }

    routes() {
       this.app.use(this.apiPaths.empleyee, employeesRoute);
    }

    associations() {

    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto', this.port)
        })
    }

}

export default Server;
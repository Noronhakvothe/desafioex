import 'reflect-metadata'
import { DataSource } from "typeorm";



export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "L:92>Lr16",
    database:  "parrot",
    synchronize: true,
    logging: false,
    migrations: [],
    subscribers: [],

})

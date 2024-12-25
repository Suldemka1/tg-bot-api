import { Sequelize } from 'sequelize';
import dotenv from "dotenv"
dotenv.config()

const connectToDatabase = () => {
    const DB_HOST=process.env.DB_HOST
    const DB_PORT=process.env.DB_PORT
    const DB_NAME=process.env.DB_NAME
    const DB_USERNAME=process.env.DB_USERNAME
    const DB_PASSWORD=process.env.DB_PASSWORD

    const db = new Sequelize(
        DB_NAME, 
        DB_USERNAME, 
        DB_PASSWORD, {
      host: DB_HOST,
      port: DB_PORT,
      dialect: 'postgres'
    });

    return db
}

const db = connectToDatabase()

export {db}
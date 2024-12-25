import { DataTypes, Model, Sequelize } from "sequelize";
import { db } from "../database/connection.js";

class User extends Model{}

User.init({
    id: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
    },
    telegramId: {
        type: DataTypes.STRING,
    },
    surname: {
        type: DataTypes.STRING
    },
    name: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING,
        unique: true
    },
    password: {
        type: DataTypes.STRING
    }
}, {
    sequelize: db,
    modelName: "User",
    
})

User.sync()

export {User}
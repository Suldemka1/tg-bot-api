import { User } from "./user.model.js"

class UserRepository {
    db
    constructor(db) {
        this.db = db
    }

    create = async (body) => {
        const user = await User.create({
            telegramId: "213712847",
            surname: body.surname,
            name: body.name,
            email: body.email,
            password: body.password
        })

        return user
    }

    findAll = async () => {
        const users = await User.findAll()
        return users
    }

    findById = async (id) => {
        const user = await User.findByPk(id)
        return user
    }

    update = async (id, userModel) => {
        const updatedUser = await User.update(userModel, {
            where: {
                id,
            }
        })
        return updatedUser
    }

    
}

export {UserRepository}
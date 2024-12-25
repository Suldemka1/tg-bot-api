import { User } from "./user.model.js"

class UserRepository {
    db
    constructor(db) {
        this.db = db
    }

    create = async () => {
        const user = await User.create({
            telegramId: "213712847",
            surname: "Хирлиг-оол",
            name: "Сулдем",
            email: "suldemka1@gmail.com",
            password: "asfnalsfbl"
        })


        return user
    }

    findOne = async (id) => {

    }

    findAll = async () => {

    }
}

export {UserRepository}
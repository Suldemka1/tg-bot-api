class UserService {
    userRepository
    constructor(userRepository) {
        this.userRepository = userRepository
    }

    create = async (body) => {
        const createResult = await this.userRepository.create(body)
        return createResult
    }

    getAll = async () => {
        const users = await this.userRepository.findAll()
        return users
    }

    getById = async (id) => {
        const user = await this.userRepository.findById(id)
        return user
    }

    update = async (id, body) => {
        const updatedUser = await this.userRepository.update(id, body)
        return updatedUser
    }
}

export {UserService}
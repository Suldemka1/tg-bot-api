class UserService {
    userRepository
    constructor(userRepository) {
        this.userRepository = userRepository
    }

    create = async () => {
        const createResult = await this.userRepository.create()
        return createResult
    }

    getById = async () => {

    }

    update = async () => {

    }
}

export {UserService}
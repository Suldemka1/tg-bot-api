class UserController {
    userService
    constructor(userService) {
        this.userService = userService
    }

    signUp = async (req, res) => {
        const user = await this.userService.create()
        res.json({
            data: user
        })
    }

    signIn = async (req, res) => {
        res.json({
            data: "Успешно авторизованы"
        })
    }
}

export {UserController}
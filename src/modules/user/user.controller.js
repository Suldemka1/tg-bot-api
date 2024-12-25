class UserController {
    signUp = async (req, res) => {
        res.json({
            data: "Успешно зарегистрированы"
        })
    }

    signIn = async (req, res) => {
        res.json({
            data: "Успешно авторизованы"
        })
    }
}

export {UserController}
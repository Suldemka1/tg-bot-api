class UserController {
    userService
    constructor(userService) {
        this.userService = userService
    }

    signUp = async (req, res) => {
        const {body} = req

        const user = await this.userService.create(body)

        res.json({
            data: user
        })
    }

    signIn = async (req, res) => {
        res.json({
            data: "Успешно авторизованы"
        })
    }

    getAll = async(req,res) =>{
        const users = await this.userService.getAll()
        res.json({
            data: users
        })
    }
    
    getById = async(req,res) =>{
        const {id} = req.params
        const user = await this.userService.getById(id)
        res.json({
            data: user
        })
    }

    update = async (req, res) => {
        res.json({
            data: "updated user"
        })
    }

    delete = async(req,res) =>{
        res.json({
            data: "/deleteUser/"
        })
    }
}

export {UserController}
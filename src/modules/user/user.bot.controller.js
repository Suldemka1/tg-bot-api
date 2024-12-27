import { Context} from "telegraf"

class UserBotController {
    userService
    constructor(userService) {
        this.userService = userService
    }

    /** 
     * @param {Context} ctx 
     */ 
    signUp = async (ctx) => {
        ctx.session = {
            lastCommand: "signup"
        }
        ctx.reply("Представьтесь")
        console.log(ctx?.session)
    }

    /** 
     * @param {Context} ctx 
     */ 
    signIn = async (ctx) => {
        
    }
}

export {UserBotController}
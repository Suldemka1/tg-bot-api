import express from "express"
import dotenv from "dotenv"
dotenv.config()
import { db } from "./src/modules/database/connection.js";
import { router } from "./src/router/index.js";
import { Telegraf, session } from "telegraf";
import { message } from "telegraf/filters";
import { UserBotController } from "./src/modules/user/user.bot.controller.js";

const PORT = process.env.PORT
const TG_BOT_TOKEN = process.env.TG_BOT_TOKEN
const TG_BOT_WEBHOOK = process.env.TG_BOT_WEBHOOK

const bot = new Telegraf(TG_BOT_TOKEN)

bot.use(session())
const app = express()

app.use(await bot.createWebhook({domain: TG_BOT_WEBHOOK}))
app.use(express.json())
app.use("/api", router)

const userBotController = new UserBotController()

bot.command("signup", userBotController.signUp)

bot.command("signin", userBotController.signIn)

bot.on(message("text"), async (ctx) => {
    if (ctx.session.lastCommand && ctx.session.lastCommand === "signup") {
        ctx.reply(`Вас зовут ${ctx.update.message.text}`)
    }
    console.log(ctx)
})

app.listen(PORT, () => {
    db.authenticate()
    console.log("server is running on port", PORT)
})
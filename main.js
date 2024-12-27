import express from "express"
import dotenv from "dotenv"
dotenv.config()
import { db } from "./src/modules/database/connection.js";
import { router } from "./src/router/index.js";

const PORT = process.env.PORT
const app = express()

app.use(express.json())
app.use("/api", router)

app.listen(PORT, () => {
    db.authenticate()
    console.log("server is running on port", PORT)
})
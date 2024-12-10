import express from "express"
import cors from "cors"
import reviews from "./api/reviews.route.js"
import exp from "constants"
import { error } from "console"
import e from "express"

const app = express()

app.use(cors())
app.use(express.json())

app.use("/api/v1/reviews",reviews)
app.use("*",(req,res) =>
res.status(404).json({error: "not found"}))

export default app



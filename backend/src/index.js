import express from "express"
import dotenv from "dotenv"
import cors from "cors";

import homeRoutes from "./routes/home.route.js"
import itemRoutes from "./routes/items.route.js";
import netAmtRoutes from "./routes/netAmt.route.js"

import { connectDB } from "./lib/db.js"

const app = express()

app.use(cors());  
app.use(express.json())

dotenv.config()

const PORT = process.env.PORT

app.use("/api/home", homeRoutes)
app.use("/api/items", itemRoutes);
app.use("/api/netamt", netAmtRoutes)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
    connectDB()
})

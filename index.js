import express from "express"
import mongoose from "mongoose"
import router from "./router.js"

const PORT = process.env.PORT || 8000
const DB_URL = `mongodb+srv://user:user@cluster0.ufbvjk0.mongodb.net/?retryWrites=true&w=majority`

const app = express()

app.use(express.json())
app.use('/api', router)

async function startApp() {
    try {
        await mongoose.connect(DB_URL)
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    } catch(err) {
        console.log(err)
    }
}

startApp()
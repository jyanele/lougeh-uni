import app from './src/index.js'
import dotenv from 'dotenv'
dotenv.config()

const port = 3000 | process.env.PORT
const hostname = '127.0.0.1' | process.env.HOSTNAME
const server = app

server.listen(port, hostname, () => {
    console.log(`Server is running at http://${hostname}:${port}`)
})
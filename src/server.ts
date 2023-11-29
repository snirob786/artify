import express from "express"

const app = express()
const PORT = Number(process.env.port) || 3000
const start = async () => {
    const payload = await getPayloadClient()
}

start()
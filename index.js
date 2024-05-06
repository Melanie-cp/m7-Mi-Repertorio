import express from 'express'
import { Canciones } from './models/repertorio.model.js'
const app = express()

app.use(express.static('public'))

app.get('/cancion', async (req, res) => {
    try {
        const canciones = await Canciones.findAll()
        return res.json(canciones)
    } catch (error) {
        console.log(error)
        return res.status(500).json(error)
    }
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Servidor encendido http://localhost:${PORT}`)
})
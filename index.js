import express from 'express'
import { Canciones } from './models/repertorio.model.js'
const app = express()

app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.get('/canciones', async (req, res) => {
    try {
        const canciones = await Canciones.findAll()
        return res.json(canciones)
    } catch (error) {
        console.log(error)
        return res.status(500).json(error)
    }
})

app.post('/cancion', async (req, res) => {
    try {
        const { titulo, artista, tono } = req.body
        const cancion = await Canciones.create({ titulo, artista, tono })
        return res.json(cancion)
    } catch (error) {
        console.log(error)
        return res.status(500).json(error)
    }
})

app.delete('/cancion', async (req, res) => {
    try {
        const { id } = req.query
        const cancion = await Canciones.remove(id)
        return res.json(cancion)
    } catch (error) {
        console.log(error)
        return res.status(500).json(error)
    }
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Servidor encendido http://localhost:${PORT}`)
})
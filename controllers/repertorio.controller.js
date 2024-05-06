import { Canciones } from '../models/repertorio.model.js'

export const getAllCanciones = async (req, res) => {
    try {
        const canciones = await Canciones.findAll()
        return res.json(canciones)
    } catch (error) {
        console.log(error)
        return res.status(500).json(error)
    }
}

export const createCancion = async (req, res) => {
    try {
        const { titulo, artista, tono } = req.body
        const cancion = await Canciones.create({ titulo, artista, tono })
        return res.json(cancion)
    } catch (error) {
        console.log(error)
        return res.status(500).json(error)
    }
}

export const removeCancion = async (req, res) => {
    try {
        const { id } = req.query
        const cancion = await Canciones.remove(id)
        return res.json(cancion)
    } catch (error) {
        console.log(error)
        return res.status(500).json(error)
    }
}

export const editCancion = async (req, res) => {
    try {
        const { id } = req.params;
        const { titulo, artista, tono } = req.body;
        const cancion = await Canciones.update({ titulo, artista, tono, id })
        return res.json(cancion)
    } catch (error) {
        console.log(error)
        return res.status(500).json(error)
    }
}
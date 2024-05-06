import { Router } from 'express'
import { createCancion, editCancion, getAllCanciones, removeCancion } from '../controllers/repertorio.controller.js'

const router = Router()

router.get('/canciones', getAllCanciones)
router.post('/cancion', createCancion)
router.delete('/cancion', removeCancion)
router.put('/cancion/:id', editCancion)

export default router
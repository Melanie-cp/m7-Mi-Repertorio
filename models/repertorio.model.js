import { pool } from '../database/connection.js'

const findAll = async () => {
    const { rows } = await pool.query('SELECT * FROM CANCIONES')
    return rows
}

const create = async ({ titulo, artista, tono }) => {
    const query = {
        text: `INSERT INTO CANCIONES (TITULO, ARTISTA, TONO)
        VALUES ($1, $2, $3)`,
        values: [titulo, artista, tono]
    }
    const { rows } = await pool.query(query)
    return rows[0]
}

export const Canciones = {
    findAll,
    create
}
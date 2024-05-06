import { pool } from '../database/connection.js'

const findAll = async () => {
    const { rows } = await pool.query('SELECT * FROM CANCIONES')
    return rows
}

const create = async ({ titulo, artista, tono }) => {
    const query = {
        text: `INSERT INTO CANCIONES (TITULO, ARTISTA, TONO)
        VALUES ($1, $2, $3) RETURNING *`,
        values: [titulo, artista, tono]
    }
    const { rows } = await pool.query(query)
    return rows[0]
}

const remove = async (id) => {
    const query = {
        text: `DELETE FROM CANCIONES WHERE ID = $1
        RETURNING *`,
        values: [id]
    }
    const { rows } = await pool.query(query)
    return rows[0]
}

const update = async ({ titulo, artista, tono, id }) => {
    const query = {
        text: 'UPDATE canciones SET titulo = $1, artista = $2, tono = $3 WHERE id = $4 RETURNING *',
        values: [titulo, artista, tono, id]
    };
    const { rows } = await pool.query(query)
    return rows[0]
}

export const Canciones = {
    findAll,
    create,
    remove,
    update
}
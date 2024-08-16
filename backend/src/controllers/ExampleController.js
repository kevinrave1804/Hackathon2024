const { getConnection, sql } = require('../config/database');

exports.getDatos = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query('SELECT * FROM tu_tabla');
        res.json(result.recordset);
    } catch (error) {
        console.error('Error al obtener datos:', error);
        res.status(500).json({ message: 'Error del servidor' });
    }
};
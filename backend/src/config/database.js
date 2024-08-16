const sql = require('mssql');
require('dotenv').config();

const config = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    server: process.env.DB_SERVER, // Normalmente es el nombre del host o dirección IP
    database: process.env.DB_NAME,
    options: {
        encrypt: true, // Para conexiones seguras
        trustServerCertificate: true // Cambia a false si tienes un certificado válido
    }
};

async function getConnection() {
    try {
        const pool = await sql.connect(config);
        return pool;
    } catch (error) {
        console.error('Error al conectar a SQL Server:', error);
        throw error;
    }
}

module.exports = { getConnection, sql };
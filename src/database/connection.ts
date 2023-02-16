import dotenv from 'dotenv';
import mysql from 'mysql2/promise';
import { executeQueries, readQueries } from './queryUtils';
dotenv.config();

const conn = mysql.createPool({
    host: process.env.MYSQLHOST,
    user: process.env.MYSQLUSER,
    password: process.env.MYSQLPASSWORD,
    port: Number(process.env.MYSQLPORT || 3306),
})

// SE ESTIVER EM AMBIENTE DE DESENVOLVIMENTO, VOU 'DROPAR' O BANCO E EXECUTAR MINHAS QUERIES DE TESTE
if (['dev', 'development'].includes(process.env.NODE_ENV || 'development')) {
    const dropQuery = readQueries('dropDatabase.sql');

    executeQueries(conn, dropQuery).then(() => 
        executeQueries(conn)
    );
}

export default conn;

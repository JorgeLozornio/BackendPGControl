import { createPool, Pool } from 'mysql2/promise';

export async function connect(){

    const connection = await createPool({
        host: 'but6yhxncgcrzofcdddv-mysql.services.clever-cloud.com',
        user: 'uzz6achzhg5tk3lx',
        password: 'cOhJhYxDOYI4VxL3wpPz',
        database: 'but6yhxncgcrzofcdddv',
        connectionLimit: 10
    });

    return connection;

}
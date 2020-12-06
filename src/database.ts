import { createPool, Pool } from 'mysql2/promise';

export async function connect(){

    const connection = await createPool({
        host: 'us-cdbr-east-02.cleardb.com',
        user: 'bb93c626648c28',
        password: '99618098',
        database: 'heroku_fb41df5eff76aba',
        connectionLimit: 10
    });

    // --Usuario: bb93c626648c28
    // --Contraseña: 99618098 @
    // ---Host: us-cdbr-east-02.cleardb.com/
    // --Name: heroku_fb41df5eff76aba

    return connection;

}
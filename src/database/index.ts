import { createConnection } from 'typeorm';

createConnection({
    type: 'postgres',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: 'secure_car',
    entities: [
        './src/modules/**/entities/*.ts'
    ],
    migrations: ['./src/database/migrations/*.ts'],
    cli: {
        migrationsDir: './src/database/migrations'
    }
});


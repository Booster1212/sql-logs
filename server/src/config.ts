import * as mysql from 'mysql';

export const dbConfig: mysql.ConnectionConfig = {
    host: 'localhost', // Your Database Host
    user: 'root', // Your Username
    password: 'root', // Your User Password
    database: 'rebar-ascended', // Your Database to use.
};

export const SQL_Definitions = {
    general: `
        id INT AUTO_INCREMENT PRIMARY KEY,
        timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        account_id INT,
        char_id INT,
        charname VARCHAR(255),
        action VARCHAR(255)
    `,
};

export const TABLES = {
    player: 'logs_player',
};

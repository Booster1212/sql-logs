import * as alt from 'alt-server';

import { BoosterSQL } from 'booster-sql';
import { SQL_Definitions, dbConfig } from './src/config.js';
import { useRebar } from '@Server/index.js';

import './src/api.js';

const Rebar = useRebar();

async function createDatabaseTable(player: alt.Player) {
    const db = new BoosterSQL(dbConfig);
    const rPlayer = Rebar.document.character.useCharacter(player).get();
    try {
        await db.createTable(rPlayer.name.toLowerCase(), SQL_Definitions.general);
    } catch (err) {
        console.error(err);
    } finally {
        await db.close();
    }
}

Rebar.events.useEvents().on('character-bound', createDatabaseTable);

import * as alt from 'alt-server';
import { useRebar } from '@Server/index.js';

import { BoosterSQL } from 'booster-sql';
import { dbConfig } from './config.js';

const Rebar = useRebar();

export async function logSQL(player: alt.Player, action: string): Promise<void> {
    try {
        const accountData = Rebar.document.account.useAccount(player).get();
        const rPlayer = Rebar.document.character.useCharacter(player).get();
        if (!accountData || !accountData.id) {
            console.error('Error: Account data or account ID is undefined.');
            return;
        }

        const accountLogData = {
            account_id: accountData.id,
            char_id: rPlayer.id,
            charname: rPlayer.name,
            action: action,
        };

        const db = new BoosterSQL(dbConfig);
        try {
            await db.create(rPlayer.name.toLowerCase(), accountLogData);
            alt.logWarning(`[TS-SQL] => Log entry successfully created.`);
        } catch (error) {
            alt.logWarning('[TS-SQL] => Error writing log:', error);
        } finally {
            await db.close();
        }
    } catch (error) {
        alt.logError('[TS-SQL] => Error retrieving account data:', error);
    }
}

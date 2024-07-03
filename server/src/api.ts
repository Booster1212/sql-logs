import * as alt from 'alt-server';
import { useApi } from '@Server/api/index.js';
import { sqlLog } from './general.js';

function useLoggingAPI() {
    function logSQL(player: alt.Player, action: string) {
        sqlLog(player, action);
    }
    return {
        logSQL,
    };
}

declare global {
    export interface ServerPlugin {
        ['logging-api']: ReturnType<typeof useLoggingAPI>;
    }
}

useApi().register('logging-api', useLoggingAPI());

import { useApi } from '@Server/api/index.js';
import { logSQL } from './general.js';

function useLoggingAPI() {
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

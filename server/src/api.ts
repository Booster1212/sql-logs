import { useApi } from '@Server/api/index.js';

function useLoggingAPI() {
    return {};
}

declare global {
    export interface ServerPlugin {
        ['logging-api']: ReturnType<typeof useLoggingAPI>;
    }
}

useApi().register('logging-api', useLoggingAPI());

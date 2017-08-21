import { default as registerProcesses } from './start-processes';

export const startProcesses = registerProcesses([
    './log-new-deposits',
    './log-value-total',
]);

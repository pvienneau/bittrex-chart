import colors from 'colors';
import nodeFetch from 'node-fetch';
import Promise from 'bluebird';

global.fetch = nodeFetch;
global.Promise = Promise;

const error = global.console.error;
global.console.error = ((mainMessage, ...messages) => {
    error(mainMessage.red, ...messages);
}).bind(console);
const warn = global.console.warn;
global.console.warn = ((...messages) => {
    warn(...messages.map(message => message.yellow));
}).bind(console);
global.console.success = ((...messages) => {
    console.log(...messages.map(messages => messages.green));
}).bind(console);

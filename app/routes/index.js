import appRoutes from './app';
import apiRoutes from './api';

module.exports = function(app, db) {
    appRoutes(app, db);
    apiRoutes(app, db);
};

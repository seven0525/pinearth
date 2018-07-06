const routes = require('next-routes')();

routes
    .add('/users/login', 'users/login');



module.exports = routes;
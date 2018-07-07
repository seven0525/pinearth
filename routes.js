const routes = require('next-routes')();

routes
    .add('/users/login', 'users/login')
    .add('/messages/new', 'messages/new');

module.exports = routes;
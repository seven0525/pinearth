const routes = require('next-routes')();

routes
    .add('/users/login', 'users/login')
    .add('/messages/new', 'messages/new')
    .add('/messages/show', 'messages/show')

module.exports = routes;
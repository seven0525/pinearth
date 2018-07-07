const routes = require('next-routes')();

routes
    .add('/users/login', 'users/login')
    .add('/users/signup', 'users/signup')
    .add('/messages/new', 'messages/new')
    .add('/messages/show', 'messages/show');



module.exports = routes;
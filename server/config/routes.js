/**
 * Created by peachteaboba on 1/22/17.
 */

// Require the controllers
// var users = require('./../controllers/users.js');

// Define the routes
module.exports = function(app) {

    // User routes ===================================================
    app.get('/users', function(req, res) {
        users.index(req, res);
    });


};

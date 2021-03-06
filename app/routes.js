/**
 * Created by abello on 2014-11-25.
 */
var home  = require('../controllers/home'),
    contacts = require('../controllers/contacts');

module.exports.initialize = function(app) {
    app.get('/', home.index);
    app.get('/api/contacts', contacts.index);
    app.get('/api/contacts/:id', contacts.getById);
    app.post('/api/contacts', contacts.add);
    app.put('/api/contacts', contacts.update);
};

module.exports = {
    index: function(req, res) {
        res.render('index');
    }
};
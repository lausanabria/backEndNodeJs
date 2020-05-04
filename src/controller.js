const service = require('./services');

exports.login = function(req, res) {
    const user = service.login(req.body.username, req.body.password);
    res.send(user);
};

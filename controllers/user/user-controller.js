let User = require('./userModel');

exports.index = function (req, res) {
    User.get(function (err, users) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Users retrieved successfully.",
            data: users
        });
    });
};

exports.new = function (req, res) {
    let user = new User();

    user.firstName = req.body.firstName;
    user.lastName = req.body.lastName;
    user.email = req.body.email;
    user.role = req.body.role;
    user.uid = req.body.uid;

    user.save(function (err) {
        if (err) {
            res.json(err);
        }

        res.json({
            message: 'New user created!',
            data: user
        });
    });
};

exports.view = function (req, res) {
    User.findById(req.params.user_id, function (err, user) {
        if (err)
            res.send(err);
        res.json({
            message: 'User has been retrieved succesfully.',
            data: user
        });
    });
};

exports.update = function (req, res) {
    User.findById(req.params.user_id, function (err, user) {
        if (err) {
            res.send(err);
        }

        user.firstName = req.body.firstName;
        user.lastName = req.body.lastName;
        user.email = req.body.email;
        user.role = req.body.role;
        user.uid = req.body.uid;

        user.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'User info updated successfully.',
                data: user
            });
        });
    });
};

exports.delete = function (req, res) {
    User.remove({
        _id: req.params.user_id
    }, function (err, user) {
        if (err)
            res.send(err);
        res.json({
            status: "success",
            message: 'User deleted.'
        });
    });
};
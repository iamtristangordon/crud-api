let router = require('express').Router();

router.get('/', function (req, res) {
    res.json({
        status: 'MLL API',
        message: 'Mll api success.',
    });
});

var userController = require('./controllers/user/controller');

router.route('/users')
    .get(userController.index)
    .post(userController.new);
router.route('/users/:user_id')
    .get(userController.view)
    .patch(userController.update)
    .put(userController.update)
    .delete(userController.delete);

module.exports = router;
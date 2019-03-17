let router = require('express').Router();

router.get('/', function (req, res) {
    res.json({
       status: 'MLL API',
       message: 'Welcome to RESTHub crafted with love!',
    });
});

module.exports = router;
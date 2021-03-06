var express = require('express');
var router = express.Router();
var middleware = require('../routes/middleware');

var pageData = {
    pageTitle: 'Live Chat',
    pageId: 'chat'
};

router.get('/', middleware.checkUserLoggedIn, function (req, res, next) {
    var data = {
        pageTitle: pageData.pageTitle,
        pageId: pageData.pageId,
        user: req.session.user
    };
    res.render('chat', data);
});

module.exports = router;

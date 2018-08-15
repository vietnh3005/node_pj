var path = require('path'),
    routes = require('./routes'),
    exphbs = require('express-handlebars'),
    express = require('express'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    morgan = require('morgan'),
    methodOverride = require('method-override'),
    errorHandler = require('errorhandler'),
    moment = require('moment');

module.exports = function(app) {
    app.use(morgan('dev')); //Used for log server
    app.use(bodyParser.json({ uploadDir: path.join(__dirname, 'public/upload/temp') }));
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(methodOverride()); //Support the browser that don't properly support REST
    app.use(cookieParser('some-secret-value-here')); // Allows cookies to be sent and received
    routes(app);
    app.use('/public/', express.static(path.join(__dirname, '../public')));
    if ('development' === app.get('env')) {
        app.use(errorHandler());
    }
    app.engine('handlebars', exphbs.create({
        defaultLayout: 'main',
        layoutsDir: app.get('views') + '/layouts',
        partialsDir: [app.get('views') + '/partials'],
        helpers: {
            timeago: function(timestamp) {
                return moment(timestamp).startOf('minute').fromNow();
            }
        }
    }).engine);
    app.set('view engine', 'handlebars');
    return app;
};
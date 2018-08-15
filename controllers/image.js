var path = require('path');
var fs = require('fs');

var viewModel = {
    image: {
        uniqueId: 1,
        title: 'Obsence Image 1',
        descriptions: 'Obsence Image 1',
        filename: 'img1.jgp',
        views: 0,
        likes: 0,
        timestamp: Date.now
    },
    comments: [{
        image_id: 1,
        email: 'vietnh3005@gmail.com',
        name: 'Seigfried',
        gravatar: 'http://lorempixel.com/75/75/animals/1',
        comment: 'This is a test comment...',
        timestamp: Date.now()
    }, {
        image_id: 1,
        email: 'nhv22222@gmail.com',
        name: 'Seigfried',
        gravatar: 'http://lorempixel.com/75/75/animals/222',
        comment: 'This is a test comment...',
        timestamp: Date.now()
    }]
};

module.exports = {
    index: function(req, res) {
        res.render('image', viewModel);
    },
    create: function(req, res) {
        var possible = 'abcdefghijklmnopqrstuvwxyz0123456789',
            imgUrl = '';
        for (var i = 0; i < 6; i += 1) { imgUrl += possible.charAt(Math.floor(Math.random() * possible.length)); }
        var tempPath = req.files.file.path,
            ext = path.extname(req.files.file.name).toLowerCase(),
            targetPath = path.resolve('./public/upload/' + imgUrl + ext);
        console.log(ext);
        // if (ext === '.png' || ext === '.jpg' || ext === '.jpeg' || ext === '.gif') {
        //     fs.rename(tempPath, targetPath, function(err) {
        //         if (err) throw err;
        //         res.redirect('/images/' + imgUrl);
        //     });
        // } else {
        //     fs.unlink(tempPath, function() {
        //         if (err) throw err;
        //         res.json(500, { error: 'Only image files are allowed.' });
        //     });
        // }
    },
    like: function(req, res) {
        res.send('The image:like POST controller');
    },
    comment: function(req, res) {
        res.send('The image:comment POST controller');
    }
};
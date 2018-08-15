var viewModel = {
    images: [{
        uniqueId: 1,
        title: 'Obsence Image 1',
        descriptions: 'Obsence Image 1',
        filename: 'img1.jgp',
        views: 0,
        likes: 0,
        timestamp: Date.now
    }, {
        uniqueId: 2,
        title: 'Obsence Image 2',
        descriptions: 'Obsence Image 2',
        filename: 'img2.jgp',
        views: 0,
        likes: 0,
        timestamp: Date.now
    }, {
        uniqueId: 3,
        title: 'Obsence Image 3',
        descriptions: 'Obsence Image 3',
        filename: 'img3.jgp',
        views: 0,
        likes: 0,
        timestamp: Date.now
    }, {
        uniqueId: 4,
        title: 'Obsence Image 4',
        descriptions: 'Obsence Image 4',
        filename: 'img4.jgp',
        views: 0,
        likes: 0,
        timestamp: Date.now
    }]
};
module.exports = {

    index: function(req, res) {
        res.render('index', viewModel);
    }
};
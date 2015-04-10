var Dvd = require('../models/Dvd');

module.exports = {
	dvds: function(req, res) {

    Dvd.findAll({
        where: {
            title: { like: '%' + req.query.title + '%' },
            award: req.query.award
        },
        order: 'title ASC'
    }).then(function(results) {
        res.render('dvds', {
            dvds: results
        });
    });
	},

	create: function(req, res) {
		
	}
};
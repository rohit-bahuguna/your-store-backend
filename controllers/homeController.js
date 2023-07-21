const BigPronise = require('../middlewares/bigPromise');

exports.home = BigPronise((req, res) => {
	res.status(200).json({
		success: true,
		greeting: 'Hello from Rohit Bahuguna'
	});
});

exports.deshboard = BigPronise((req, res) => {
	res.render('index');
});

// exports.signUpForm = BigPronise((req, res) => {
// 	res.render('postForm');
// });

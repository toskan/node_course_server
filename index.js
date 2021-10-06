const express = require('express');
//common js modules (on the backend) (system for requiring or sharing code between different files)

const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
const bodyParser = require('body-parser');

mongoose.connect(keys.mongoURI);
require('./models/User');
require('./services/passport');

const app = express();
//app use calls  serves as middlewares (preprocessing of incoming request)
app.use(bodyParser.json());

app.use(
	cookieSession({
		maxAge: 30 * 24 * 60 * 60 * 1000,
		keys: [keys.cookieKey],
	})
);

app.use(passport.initialize());
app.use(passport.session());

//we import the authRoutes file which exports a function which we immediately call with the second parenthese
require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);

if (process.env.NODE_ENV === 'production') {
	//Express will serve up prod assets
	//like our main.js or css file
	app.use(express.static('client/build'));

	//Express will serve up the index.html file
	//if it doesn't recognize the route

	const path = require('path');
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(_dirname, 'client', 'build', 'index.html'));
	});
}

//create route handler and associate with a given route
// app.get('/', (req, res) => {
// 	res.send({ bye: 'buddy' });
// });

const PORT = process.env.PORT || 5000;
app.listen(PORT);

const express = require('express');
//common js modules (on the backend) (system for requiring or sharing code between different files)

const app = express();

//create route handler and associate with a given route
app.get('/', (req, res) => {
	res.send({ hi: 'there' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);

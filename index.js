const express = require('express');
const bodyParser = require('body-parser');
const { handleCreateUser } = require('./controllers/userController');


/**
 * In this exercise, you are given a basic web server using connect. The target is goal is
 * to build a working REST API service.
 *
 * You will build the restApis.js file located in the routes/api path. This will require getting gorest authorization,
 * if you would prefer to use your own API for this then it is fine to substitute if it has all operations.
 *
 * This service class will call our test REST API.
 */
const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.post('/api/users', handleCreateUser);

app.listen(PORT, () => {
	console.log(`Server running on http://localhost:${PORT}`);
});
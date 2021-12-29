var express = require('express');
var router = express.Router();
const { MongoClient } = require('mongodb');

// Connect to the db
const uri = 'mongodb://localhost:27017';

const client = new MongoClient(uri);

async function run() {
	let person;
	try {
		await client.connect();
		const database = client.db('jobs_applications_crud');
		const user = database.collection('jobs');
		person = await user.find({}).toArray();
	} finally {
		await client.close();
		return person;
	}
}

router.get('/all', async function (req, res) {
	const person = await run();
	res.json(person);
});

module.exports = router;

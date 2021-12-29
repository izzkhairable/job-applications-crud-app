import express from 'express';
export const router = express.Router();
import ddbScanAll from '../dynamodb_helpers/ddbScanAll.js';

async function run() {
	let person;
	try {
		person = await ddbScanAll();
	} finally {
		return person;
	}
}

router.get('/all', async function (req, res) {
	const person = await run();
	res.json(person);
});

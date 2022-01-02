import express from 'express';
export const router = express.Router();

router.post('/one', async function (req, res) {
	console.log('Got body:', req.body);
	res.sendStatus(200);
});

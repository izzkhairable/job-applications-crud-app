import cors from 'cors';
import express from 'express';
import { router as get_jobs } from './routes/get_jobs.js';

const app = express();
const port = 3001;

app.use(cors());
app.use(express.static('public'));
app.use('/get_jobs', get_jobs);

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});

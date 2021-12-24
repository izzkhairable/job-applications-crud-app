var cors = require('cors');
const express = require('express');
const app = express();
const port = 3001;
const get_jobs = require('./routes/get_jobs');

app.use(cors());
app.use(express.static('public'));
app.use('/jobs', get_jobs);

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});

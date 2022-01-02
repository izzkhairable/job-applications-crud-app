const InsertJobs = async (job) => {
	console.log('I am inside', job);
	await fetch('http://127.0.0.1:3001/insert_jobs/one', {
		method: 'POST',
		mode: 'cors',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(job),
	}).catch((error) => {
		console.error('Error:', error);
	});
	return;
};

export default InsertJobs;

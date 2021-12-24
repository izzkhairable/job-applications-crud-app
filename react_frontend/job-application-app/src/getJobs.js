const GetJobs = async (from, size, sort) => {
	const jobs = await fetch('http://127.0.0.1:3001/jobs/all')
		.then((response) => response.json())
		.then((data) => data)
		.catch((error) => {
			console.error('Error:', error);
		});
	return jobs;
};

export default GetJobs;

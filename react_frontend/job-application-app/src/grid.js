import Card from './card';
import Grid from '@mui/material/Grid';
import GetJobs from './getJobs';
import * as React from 'react';

const Grid_jobs = () => {
	const [jobs, setJobs] = React.useState([]);

	React.useEffect(() => {
		const fetch_jobs = async () => {
			try {
				const getJobs = await GetJobs(0, 10, 'asc');
				setJobs(getJobs);
			} catch (error) {
				console.error('Error:', error);
			}
		};
		fetch_jobs();
	}, []);
	console.log(jobs);
	const jobs_grid = jobs.map((job) => {
		let date_applied_tmp = job.date_applied;
		date_applied_tmp = date_applied_tmp.slice(0, -1);
		date_applied_tmp = new Date(date_applied_tmp);

		let last_updated_tmp = job.last_updated;
		last_updated_tmp = last_updated_tmp.slice(0, -1);
		last_updated_tmp = new Date(last_updated_tmp);
		return (
			<Grid key={job.id} item md={4} sm={6} xs={12}>
				<Card
					job={{
						...job,
						date_applied: date_applied_tmp,
						last_updated: last_updated_tmp,
					}}
				/>
			</Grid>
		);
	});

	return (
		<Grid container spacing={2} sx={{ mb: 10 }}>
			{jobs_grid}
		</Grid>
	);
};

export default Grid_jobs;

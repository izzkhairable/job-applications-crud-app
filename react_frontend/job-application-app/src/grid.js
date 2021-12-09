import Card from './card';
import Grid from '@mui/material/Grid';
import GetJobs from './getJobs';

const Grids = GetJobs(0, 10, 'asc').map((job) => (
	<Grid key={job.id} item md={4} sm={6} xs={12}>
		<Card job={job} />
	</Grid>
));

const Grid_jobs = () => {
	return (
		<Grid container spacing={2}>
			{Grids}
		</Grid>
	);
};

export default Grid_jobs;

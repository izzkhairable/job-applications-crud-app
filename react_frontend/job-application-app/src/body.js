import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from './grid';
const Body = () => {
	return (
		<Container fixed>
			<Typography variant="h6" sx={{ my: 2 }}>
				All Jobs Applied
			</Typography>
			<Grid />
		</Container>
	);
};

export default Body;

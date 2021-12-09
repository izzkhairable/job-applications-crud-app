import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Grid from '@mui/material/Grid';
import ModalView from './modal_view';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const Card_main = ({ job }) => {
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	return (
		<>
			<Card
				variant="outlined"
				sx={{
					height: '100%',
					width: '100%',
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'space-between',
				}}
			>
				{' '}
				<CardMedia
					component="img"
					height="140"
					image={job.images[0].url}
					alt="green iguana"
				/>
				<CardContent>
					<Typography sx={{ fontSize: 14 }} gutterBottom>
						{job.company}
					</Typography>
					<Typography variant="h5" component="div">
						{job.title}
					</Typography>
					<Typography
						sx={{ mb: 1.5, textTransform: 'capitalize' }}
						color={
							(job.status === 'pending' && 'text.pending') ||
							(job.status === 'interviewing' && 'text.interviewing') ||
							(job.status === 'offered' && 'text.offered') ||
							(job.status === 'rejected' && 'text.rejected')
						}
					>
						{job.status}
					</Typography>
					<Typography variant="body2">
						{job.notes && job.notes.length > 50
							? job.notes.slice(0, 50).trim() + '...'
							: job.notes || 'No notes added'}
					</Typography>
				</CardContent>
				<CardActions sx={{ textAlign: 'right', mt: 'auto' }}>
					<IconButton sx={{ ml: 'auto' }} size="small" onClick={handleOpen}>
						<OpenInFullIcon />
					</IconButton>

					<IconButton size="small">
						<EditIcon />
					</IconButton>
					<IconButton size="small">
						<DeleteIcon />
					</IconButton>
				</CardActions>
			</Card>
			<ModalView open={open} handleClose={handleClose} job={job} />
		</>
	);
};

export default Card_main;

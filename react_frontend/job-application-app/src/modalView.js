import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import LinksList from './linksList';
import { createTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Lightbox from './lightbox';
import DisplayPDF from './displayPDF';
import DocumentsList from './documentsList';
const theme = createTheme({
	breakpoints: {
		values: {
			xs: 0,
			sm: 600,
			md: 900,
			lg: 1200,
			xl: 1536,
		},
	},
});

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	bgcolor: 'background.paper',
	border: '2px solid #fff',
	boxShadow: 24,

	p: 4,
	// 1536 - above
	[theme.breakpoints.up('xl')]: {
		width: '30%',
		height: 'auto',
		overflow: 'hidden',
	},
	// 1200 - 1535
	[theme.breakpoints.up('lg')]: {
		width: '30%',
		height: '95%',
		overflow: 'hidden',
	},
	// 900 - 1999
	[theme.breakpoints.up('md')]: {
		width: '42%',
		height: '95%',
		overflow: 'scroll',
	},
	//600  - 899
	[theme.breakpoints.up('sm')]: {
		width: '60%',
		height: '90%',
		overflow: 'scroll',
	},
	//0 - 599
	[theme.breakpoints.up('xs')]: {
		width: '90%',
		height: '95%',
		overflow: 'scroll',
	},
};

const ModalView = ({ open, handleClose, job }) => {
	return (
		<Modal
			open={open}
			aria-labelledby="modal-modal-title"
			aria-describedby="modal-modal-description"
		>
			<Box sx={style}>
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'space-between',
					}}
				>
					<Typography id="modal-modal-title" variant="h6">
						{job.title}
					</Typography>
					<Typography
						id="modal-modal-title"
						variant="subtitle1"
						sx={{ textTransform: 'capitalize' }}
						color={
							(job.status === 'pending' && 'text.pending') ||
							(job.status === 'interviewing' && 'text.interviewing') ||
							(job.status === 'offered' && 'text.offered') ||
							(job.status === 'rejected' && 'text.rejected')
						}
					>
						{job.status}
					</Typography>
				</Box>
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'space-between',
					}}
				>
					<Typography variant="body1">
						{job.company}, {job.location}
					</Typography>
					<Box sx={{ textAlign: 'right' }}>
						<Typography variant="body2">
							Applied on{' '}
							<b>{`${job.date_applied.getDate()}/${job.date_applied.getMonth()}/${job.date_applied.getYear()} ${
								job.date_applied.getHours().toString().length === 1
									? '0' + job.date_applied.getHours().toString()
									: job.date_applied.getHours().toString()
							}:${job.date_applied.getMinutes()}`}</b>
						</Typography>
						<Typography variant="body2">
							Last Updated{' '}
							<b>{`${job.last_updated.getDate()}/${job.last_updated.getMonth()}/${job.last_updated.getYear()} ${
								job.last_updated.getHours().toString().length === 1
									? '0' + job.last_updated.getHours().toString()
									: job.last_updated.getHours().toString()
							}:${job.last_updated.getMinutes()}`}</b>
						</Typography>
					</Box>
				</Box>

				<Typography variant="body2" sx={{ mt: 2 }}>
					{job.notes ? job.notes : 'No Noted Added'}
				</Typography>
				<Typography variant="body1" sx={{ mt: 2 }}>
					<b>Images</b>
				</Typography>
				<Lightbox images={job.images} open={open} />
				<Typography variant="body1" sx={{ mt: 2 }}>
					<b>Links</b>
				</Typography>
				<LinksList links={job.links} />
				<Typography variant="body1" sx={{ mt: 2 }}>
					<b>Documents</b>
				</Typography>
				<DocumentsList documents={job.documents} />
				<Stack spacing={2} direction="row">
					<Button
						variant="outlined"
						onClick={handleClose}
						sx={{ ml: 'auto', mt: 2, mb: 0 }}
					>
						Close
					</Button>
				</Stack>
			</Box>
		</Modal>
	);
};

export default ModalView;

import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import * as React from 'react';
import ModalAdd from './modalAdd';

const AddButton = () => {
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	return (
		<>
			<Fab
				color="primary"
				aria-label="add"
				sx={{ position: 'fixed', bottom: 15, right: 15 }}
				onClick={handleOpen}
			>
				<AddIcon />
			</Fab>
			<ModalAdd open={open} handleClose={handleClose} />
		</>
	);
};

export default AddButton;

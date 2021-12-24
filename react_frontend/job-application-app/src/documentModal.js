import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import DisplayPDF from './displayPDF';
import { createTheme } from '@mui/material/styles';
import React, { useState, useEffect } from 'react';

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
	border: '2px solid #000',
	boxShadow: 24,
	width: '100%',
	height: '100%',
	overflow: 'auto',
};

const DocumentModal = ({ open, handleClose, curDocument }) => {
	const [width, setWidth] = useState(window.innerWidth);
	const [height, setHeight] = useState(window.innerHeight);
	const updateDimensions = () => {
		setWidth(window.innerWidth);
		setHeight(window.innerHeight);
	};
	useEffect(() => {
		window.addEventListener('resize', updateDimensions);
		return () => window.removeEventListener('resize', updateDimensions);
	}, []);

	return (
		<Modal open={open} onClose={handleClose}>
			<Box sx={style}>
				<DisplayPDF
					document={curDocument}
					currWidth={width}
					currHeight={height}
					handleClose={handleClose}
				/>
			</Box>
		</Modal>
	);
};

export default DocumentModal;

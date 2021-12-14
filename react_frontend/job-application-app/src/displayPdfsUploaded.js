import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import * as React from 'react';
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const DisplayPdfsUploaded = ({ pdfs, pdfDelete, pdfTitle }) => {
	const displayPdfsFile = pdfs.map((pdf, index) => (
		<Stack key={index} sx={{ mt: 2 }} spacing={1}>
			<Typography variant={'body1'}>{pdf.url.name}</Typography>
			<Button
				variant="outlined"
				startIcon={<DeleteIcon />}
				onClick={() => pdfDelete(index)}
			>
				Delete PDF
			</Button>
			<TextField
				label="Title"
				placeholder="Enter title..."
				onChange={(event) => pdfTitle(index, event.target.value)}
				value={pdfs[index].title}
			/>
		</Stack>
	));

	return <>{displayPdfsFile}</>;
};

export default DisplayPdfsUploaded;

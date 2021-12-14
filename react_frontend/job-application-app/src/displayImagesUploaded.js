import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import * as React from 'react';
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const DisplayImagesUploaded = ({ images, imageDelete, imageCaption }) => {
	const imagesField = images.map((file, index) => (
		<Stack key={index} spacing={1}>
			<Typography variant={'body1'}>Image {index + 1}</Typography>

			<img alt="uploaded" src={URL.createObjectURL(file.url)} />
			<Button
				variant="outlined"
				startIcon={<DeleteIcon />}
				onClick={() => imageDelete(index)}
			>
				Delete Image
			</Button>
			<TextField
				label="Caption"
				placeholder="Enter caption..."
				onChange={(event) => imageCaption(index, event.target.value)}
				value={images[index].caption}
			/>
		</Stack>
	));

	return (
		<>
			<Typography variant={'h6'} sx={{ mt: 2 }}>
				{(images.length > 0 && 'Images') || 'No images uploaded'}
			</Typography>
			{imagesField}
		</>
	);
};

export default DisplayImagesUploaded;

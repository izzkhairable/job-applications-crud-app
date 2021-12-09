import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import React, { useState } from 'react';
import Lightbox from './lightbox';

const ImagesThumbnail = ({ images }) => {
	const [open, setOpen] = useState(false);

	const handleImgClick = () => {
		console.log('hello');
		setOpen(!open);
	};
	const avatar_images = images.map((image) => {
		return (
			<div onClick={handleImgClick}>
				<Avatar src={image} variant="square" sx={{ height: 100, width: 100 }} />
			</div>
		);
	});

	return (
		<>
			<Stack direction="row" spacing={2} sx={{ mt: 1 }}>
				{avatar_images}{' '}
			</Stack>
			<Lightbox images={images} open={open} />
		</>
	);
};

export default ImagesThumbnail;

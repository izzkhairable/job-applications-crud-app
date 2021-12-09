import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

const imagesThumbnail = ({ images }) => {
	const avatar_images = images.map((image) => {
		return (
			<Avatar src={image} variant="square" sx={{ height: 100, width: 100 }} />
		);
	});

	return (
		<Stack direction="row" spacing={2} sx={{ mt: 1 }}>
			{avatar_images}{' '}
		</Stack>
	);
};

export default imagesThumbnail;

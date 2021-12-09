import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import LaunchIcon from '@mui/icons-material/Launch';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

const linksList = ({ links }) => {
	return (
		<List sx={{ mt: 0, pt: 0 }}>
			{links.map((value) => {
				const text = (
					<Typography variant="body2">
						{value.length > 30 ? value.slice(0, 35).trim() + '...' : value}
					</Typography>
				);
				return (
					<ListItem
						key={value}
						disableGutters
						secondaryAction={
							<Link href={value} underline="none">
								<IconButton aria-label="delete">
									<LaunchIcon fontSize="small" />
								</IconButton>
							</Link>
						}
						sx={{ width: '280px', m: 0, p: 0 }}
					>
						<ListItemText primary={text} />
					</ListItem>
				);
			})}
		</List>
	);
};

export default linksList;

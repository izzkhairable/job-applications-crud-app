import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import LaunchIcon from '@mui/icons-material/Launch';
import Typography from '@mui/material/Typography';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import DocumentModal from './documentModal';

const DocumentsList = ({ documents }) => {
	const [open, setOpen] = React.useState(false);
	const [curDocument, setCurDocument] = React.useState(null);

	const handleOpen = (document) => {
		setCurDocument(document);
		setOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
	};
	return (
		<>
			<List sx={{ mt: 0, pt: 0 }}>
				{documents.map((document, index) => {
					const text = (
						<Typography variant="body2">
							{document.title.length > 30
								? document.title.slice(0, 35).trim() + '...'
								: document.title}
						</Typography>
					);
					return (
						<ListItem
							key={index}
							disableGutters
							secondaryAction={
								<OpenInFullIcon
									aria-label="delete"
									onClick={() => handleOpen(document)}
								>
									<LaunchIcon fontSize="small" />
								</OpenInFullIcon>
							}
							sx={{ width: '280px', m: 0, p: 0 }}
						>
							<ListItemText primary={text} />
						</ListItem>
					);
				})}
			</List>
			<DocumentModal
				open={open}
				handleClose={handleClose}
				curDocument={curDocument}
			/>
		</>
	);
};

export default DocumentsList;

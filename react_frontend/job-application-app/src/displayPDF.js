import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import React, { useState } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const DisplayPDF = ({ document, currWidth, currHeight, handleClose }) => {
	const [numPages, setNumPages] = useState(null);
	const [pageNumber, setPageNumber] = useState(1);

	function onDocumentLoadSuccess({ numPages }) {
		setNumPages(numPages);
	}

	function nextPage() {
		if (pageNumber < numPages) {
			setPageNumber(pageNumber + 1);
		}
	}

	function previousPage() {
		if (pageNumber > 1) {
			setPageNumber(pageNumber - 1);
		}
	}

	return (
		<Stack
			direction="row"
			justifyContent="center"
			alignItems="center"
			spacing={2}
		>
			<Document file={document.url} onLoadSuccess={onDocumentLoadSuccess}>
				<Page
					pageNumber={pageNumber}
					scale={
						(currWidth >= 900 && 0.85) ||
						(currWidth >= 600 && 1.0 && 0.8) ||
						(currWidth >= 0 && 1.0 && 0.55)
					}
					renderAnnotationLayer={false}
				/>
				<p>
					Page {pageNumber} of {numPages}
				</p>
				<Stack
					direction="row"
					justifyContent="space-between"
					alignItems="flex-start"
					spacing={1}
				>
					<Stack
						direction="row"
						justifyContent="space-between"
						alignItems="flex-start"
						spacing={1}
					>
						{(pageNumber === 1 && (
							<Button
								variant="contained"
								size="small"
								onClick={previousPage}
								sx={{ mr: 1 }}
								disabled
							>
								Previous
							</Button>
						)) || (
							<Button
								variant="contained"
								size="small"
								onClick={previousPage}
								sx={{ mr: 1 }}
							>
								Previous
							</Button>
						)}

						{(numPages === pageNumber && (
							<Button
								variant="contained"
								size="small"
								onClick={nextPage}
								disabled
							>
								Next
							</Button>
						)) || (
							<Button variant="contained" size="small" onClick={nextPage}>
								Next
							</Button>
						)}
					</Stack>
					<Stack
						direction="row"
						justifyContent="flex-end"
						alignItems="flex-end"
					>
						<Button variant="outlined" size="small" onClick={handleClose}>
							Close
						</Button>
					</Stack>
				</Stack>
			</Document>
		</Stack>
	);
};

export default DisplayPDF;

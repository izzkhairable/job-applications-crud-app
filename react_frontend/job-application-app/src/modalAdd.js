import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import MenuItem from '@mui/material/MenuItem';
import country_name from './country_name';
import * as React from 'react';
import { Button } from '@mui/material';
import DisplayImagesUploaded from './displayImagesUploaded';
import DisplayPdfsUploaded from './displayPdfsUploaded';
import InsertJobs from './insertJobs';

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
	height: '95%',
	overflowY: 'scroll',
	overflowX: 'hidden',
	bgcolor: 'background.paper',
	border: '2px solid #000',
	boxShadow: 24,
	p: 4,
};

const ModalAdd = ({ open, handleClose }) => {
	const [jobTitle, setJobTitle] = React.useState(null);
	const [company, setCompany] = React.useState(null);
	const [country, setCountry] = React.useState('Select a country');
	const [city, setCity] = React.useState(null);
	const [dateApplied, setDateApplied] = React.useState(null);
	const [notes, setNotes] = React.useState(null);
	const [images, setImages] = React.useState([]);
	const [pdfs, setPdfs] = React.useState([]);

	// Temporary state
	const [selectedImage, setSelectedImage] = React.useState();
	const [selectedPdf, setSelectedPdf] = React.useState();

	const textFieldHandler = (event, type) => {
		switch (type) {
			case 'jobTitle':
				setJobTitle(event.target.value);
				break;
			case 'company':
				setCompany(event.target.value);
				break;
			case 'notes':
				setNotes(event.target.value);
				break;
			case 'city':
				setCity(event.target.value);
				break;
			default:
				return;
		}
		console.log(jobTitle, company, notes, city);
	};

	const countrySelect = (event) => {
		setCountry(event.target.value);
	};

	const imageUpload = (event) => {
		setSelectedImage({ url: event.target.files[0], caption: '' });
		console.log('Selected File', selectedImage);
		event.target.files = null;
	};

	const pdfUpload = (event) => {
		setSelectedPdf({ url: event.target.files[0], title: '' });
		console.log('Selected File', selectedPdf);
		event.target.files = null;
	};

	const imageDelete = (index) => {
		setImages((files) => {
			let tmp = [...files];
			tmp.splice(index, 1);
			return [...tmp];
		});
	};

	const pdfDelete = (index) => {
		setPdfs((files) => {
			let tmp = [...files];
			tmp.splice(index, 1);
			return [...tmp];
		});
	};

	const imageCaption = (index, value) => {
		setImages((files) => {
			let tmp = [...files];
			tmp[index].caption = value;
			return [...tmp];
		});
		console.log(images);
	};

	const pdfTitle = (index, value) => {
		setPdfs((files) => {
			let tmp = [...files];
			tmp[index].title = value;
			return [...tmp];
		});
		console.log(pdfs);
	};

	React.useEffect(() => {
		if (selectedImage) {
			setImages((images) => {
				return [...images, selectedImage];
			});
		}

		console.log('Files', images);
	}, [selectedImage]);

	React.useEffect(() => {
		if (selectedPdf) {
			setPdfs((pdfs) => {
				return [...pdfs, selectedPdf];
			});
		}

		console.log('Files', images);
	}, [selectedPdf]);

	const submitHandler = async () => {
		const data = {
			jobTitle,
			company,
			country,
			city,
			dateApplied: dateApplied.toISOString(),
			notes,
		};
		console.log('This is data', data);
		await InsertJobs(data);
		return;
	};

	return (
		<div>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box sx={style}>
					<Stack spacing={2}>
						<Typography variant={'h6'}>Add a new job you applied</Typography>
						<TextField
							label="Job Title"
							placeholder="Add job title here..."
							onChange={(event) => textFieldHandler(event, 'jobTitle')}
							value={jobTitle}
						/>
						<TextField
							label="Company"
							placeholder="Add company here..."
							onChange={(event) => textFieldHandler(event, 'company')}
							value={company}
						/>

						<Stack direction="row" spacing={2}>
							<TextField
								select
								label="Country"
								value={country}
								onChange={countrySelect}
								variant="outlined"
							>
								{country_name.map((option) => (
									<MenuItem key={option.country} value={option.country}>
										{option.country}
									</MenuItem>
								))}
							</TextField>
							<TextField
								label="City"
								placeholder="Add city here..."
								onChange={(event) => textFieldHandler(event, 'city')}
								value={city}
							/>
						</Stack>

						<LocalizationProvider dateAdapter={AdapterDateFns}>
							<DatePicker
								label="Date Applied"
								value={dateApplied}
								onChange={(newValue) => {
									setDateApplied(newValue);
								}}
								renderInput={(params) => <TextField {...params} />}
							/>
						</LocalizationProvider>
						<TextField
							id="standard-multiline-static"
							label="Notes"
							multiline
							rows={3}
							placeholder="Add your notes here..."
							variant="outlined"
							onChange={(event) => textFieldHandler(event, 'notes')}
							value={notes}
						/>
						<div>
							<Button
								variant="contained"
								component="label"
								sx={{ maxWidth: 180 }}
							>
								{(images.length > 0 && 'Add More Images') || 'Upload Image'}
								<input
									type="file"
									onChange={imageUpload}
									hidden
									accept="image/png, image/jpeg"
								/>
							</Button>

							<DisplayImagesUploaded
								images={images}
								imageDelete={imageDelete}
								imageCaption={imageCaption}
							/>
						</div>

						<div>
							<Button
								variant="contained"
								component="label"
								sx={{ maxWidth: 180, mt: 4 }}
							>
								{(pdfs.length > 0 && 'Add More PDFs') || 'Upload PDF'}
								<input type="file" onChange={pdfUpload} hidden accept=".pdf" />
							</Button>

							<Typography variant={'h6'} sx={{ mt: 2 }}>
								{(pdfs.length > 0 && 'PDFs') || 'No PDFs uploaded'}
							</Typography>
							<DisplayPdfsUploaded
								pdfs={pdfs}
								pdfDelete={pdfDelete}
								pdfTitle={pdfTitle}
							/>
						</div>
						<Stack
							sx={{
								mt: 10,
								position: 'fixed',
								bottom: 20,
								right: 10,
							}}
							direction="row"
						>
							<Button
								variant="outlined"
								component="label"
								sx={{ mr: 1 }}
								onClick={handleClose}
							>
								Close
							</Button>
							<Button
								variant="contained"
								component="label"
								onClick={submitHandler}
							>
								Add Job
							</Button>
						</Stack>
					</Stack>
				</Box>
			</Modal>
		</div>
	);
};

export default ModalAdd;

import Navbar from './navbar';
import Body from './body';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { teal } from '@mui/material/colors';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import SimpleReactLightbox from 'simple-react-lightbox';

const theme = createTheme({
	palette: {
		primary: teal,
		secondary: teal,
		text: {
			primary: '#000000',
			secondary: '#46505A',
			pending: '#2196f3',
			interviewing: '#ff9800',
			offered: '#4caf50',
			rejected: '#f44336',
		},
	},
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

function App() {
	return (
		<SimpleReactLightbox>
			<div
				className="App"
				sx={{ padding: 0, margin: 0, height: '100%', width: '100%' }}
			>
				<ThemeProvider theme={theme}>
					<Navbar />
					<Body />
					<Fab
						color="primary"
						aria-label="add"
						sx={{ position: 'fixed', bottom: 15, right: 15 }}
					>
						<AddIcon />
					</Fab>
				</ThemeProvider>
			</div>
		</SimpleReactLightbox>
	);
}

export default App;

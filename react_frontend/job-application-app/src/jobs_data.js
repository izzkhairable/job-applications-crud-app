const jobs_data = [
	{
		id: '1',
		title: 'Software Engineer | JAVA | AI | ML',
		company: 'XYZ Corporation',
		location: 'Singapore',
		status: 'interviewing',
		links: [
			'https://hiring.monster.com/resources/job-descriptions/computer/data-scientist/',
			'https://hiring.monster.com/resources/job-descriptions/computer/data-scientist/',
			'https://hiring.monster.com/resources/job-descriptions/computer/data-scientist/',
		],
		images: [
			{ url: '/sample_images/sample_img_3.jpg', caption: 'Im a caption' },
			{ url: '/sample_images/screenshot.png', caption: 'Im a caption' },
			{ url: '/sample_images/sample_img_1.jpg', caption: 'Im a caption' },
			{ url: '/sample_images/sample_img_2.jpg', caption: 'Im a caption' },
		],
		documents: [
			{ url: '/sample_documents/sample.pdf', title: 'Just a sample pdf' },
		],
		notes:
			'Vestibulum nisl nibh, consectetur non consectetur eu, dapibus vitae ante. Ut quis velit quis ex molestie pulvinar ac quis enim. Integer vel nibh mattis, sagittis tellus a, venenatis tellus. Cras tincidunt est ut orci accumsan accumsan. Donec id nulla elit. Fusce malesuada justo sed finibus rhoncus. Aliquam viverra lorem non efficitur tempus. Nullam blandit nunc semper feugiat mollis. Ut ac accumsan orci.',
		date_applied: new Date('2021-12-01T03:24:00'),
		last_updated: new Date('2021-12-02T03:24:00'),
	},
	{
		id: '2',
		title: 'Software Developer',
		company: 'ABC Corporation',
		location: 'Singapore',
		status: 'offered',
		links: [
			'https://hiring.monster.com/resources/job-descriptions/computer/data-scientist/',
			'https://hiring.monster.com/resources/job-descriptions/computer/data-scientist/',
			'https://hiring.monster.com/resources/job-descriptions/computer/data-scientist/',
		],
		images: [
			{ url: '/sample_images/sample_img_1.jpg', caption: 'Im a caption' },
			{ url: '/sample_images/screenshot.png', caption: 'Im a caption' },
			{ url: '/sample_images/sample_img_2.jpg', caption: 'Im a caption' },
			{ url: '/sample_images/sample_img_3.jpg', caption: 'Im a caption' },
		],
		documents: [
			{ url: '/sample_documents/sample.pdf', title: 'Just a sample pdf' },
		],
		notes:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sollicitudin a purus vel bibendum. Cras nec lectus interdum ipsum dictum posuere. Fusce ut lorem eget ante faucibus rutrum. Vestibulum ultricies, leo sed dignissim sollicitudin, risus dolor tincidunt est, eu faucibus urna dui ut lectus. Integer euismod leo et metus faucibus efficitur id non tortor. Donec et cursus orci, nec gravida erat. Integer imperdiet commodo ante at rhoncus.',
		date_applied: new Date('2021-12-03T03:24:00'),
		last_updated: new Date('2021-12-04T03:24:00'),
	},

	{
		id: '3',
		title: 'Data Engineer',
		company: 'DEF Corporation',
		location: 'Singapore',
		status: 'rejected',
		links: ['def.com/jobs', 'def.com/jobs/software_developer'],
		images: [
			{ url: '/sample_images/sample_img_2.jpg', caption: 'Im a caption' },
			{ url: '/sample_images/screenshot.png', caption: 'Im a caption' },
			{ url: '/sample_images/sample_img_1.jpg', caption: 'Im a caption' },
			{ url: '/sample_images/sample_img_3.jpg', caption: 'Im a caption' },
		],
		documents: [
			{ url: './sample_documents/sample.pdf', title: 'Just a sample pdf' },
		],
		notes: null,
		date_applied: new Date('2021-12-03T03:24:00'),
		last_updated: new Date('2021-12-04T03:24:00'),
	},
];

export default jobs_data;

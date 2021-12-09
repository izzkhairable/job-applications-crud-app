import { SRLWrapper } from 'simple-react-lightbox';

const Lightbox = ({ images }) => {
	const images_with_links = images.map((image, index) => {
		return (
			<a href={image.url} key={index}>
				<img
					src={image.url}
					alt={image.caption}
					style={{ height: 100, width: 100 }}
				/>
			</a>
		);
	});

	return <>{<SRLWrapper>{images_with_links}</SRLWrapper>}</>;
};

export default Lightbox;

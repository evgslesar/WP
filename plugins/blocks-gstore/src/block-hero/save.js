import { useBlockProps, RichText } from "@wordpress/block-editor";

export default function save({ attributes }) {
	const {
		title,
		description,
		link,
		linkAnchor,
		video,
		mediaType,
		backgroundImage,
		logos,
		logosTitle,
	} = attributes;
	return (
		<div {...useBlockProps.save()}>
			<div className="hero-video-container">
				{mediaType === "video" && video && (
					<video muted loop autoPlay>
						<source src={video} type="video/mp4" />
					</video>
				)}
				{mediaType === "image" && backgroundImage && (
					<img
						src={backgroundImage}
						alt="Hero Background"
						style={{ width: "100%", height: "100%", objectFit: "cover" }}
					/>
				)}
			</div>
			<div className="hero-content">
				<RichText.Content tagName="h2" className="hero-title" value={title} />
				<RichText.Content
					tagName="p"
					className="hero-description"
					value={description}
				/>
				<a
					href={link}
					className="hero-link"
					target="_blank"
					rel="noopener noreferrer"
				>
					{linkAnchor}
				</a>
			</div>
			{logos && logos.length > 0 && (
				<div className="hero-logos-container">
					<RichText.Content
						tagName="p"
						className="hero-logos-title"
						value={logosTitle}
					/>
					<div className="hero-logos-wrapper">
						<div className="hero-logos-track">
							{logos.map((logo, index) => (
								<div key={index} className="hero-logo-item">
									<img src={logo.url} alt={logo.alt} />
								</div>
							))}
							{logos.map((logo, index) => (
								<div key={`dup-${index}`} className="hero-logo-item">
									<img src={logo.url} alt={logo.alt} />
								</div>
							))}
						</div>
					</div>
				</div>
			)}
		</div>
	);
}

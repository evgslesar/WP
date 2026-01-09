import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	RichText,
	InspectorControls,
	MediaUpload,
} from "@wordpress/block-editor";
import {
	PanelBody,
	TextControl,
	TextareaControl,
	Button,
	SelectControl,
} from "@wordpress/components";
import "./editor.scss";

export default function Edit({ attributes, setAttributes }) {
	const {
		title,
		description,
		link,
		linkAnchor,
		video,
		mediaType,
		backgroundImage,
		backgroundImageId,
		logos,
		logosTitle,
	} = attributes;
	return (
		<>
			<InspectorControls>
				<PanelBody title={__("Block Hero Settings", "blocks-gstore")}>
					<TextControl
						label={__("Title", "blocks-gstore")}
						value={title}
						onChange={(value) => setAttributes({ title: value })}
					/>
					<TextareaControl
						label={__("Description", "blocks-gstore")}
						value={description}
						onChange={(value) => setAttributes({ description: value })}
					/>
					<TextControl
						label={__("Link", "blocks-gstore")}
						value={link}
						onChange={(value) => setAttributes({ link: value })}
					/>
					<TextControl
						label={__("Button Value", "blocks-gstore")}
						value={linkAnchor}
						onChange={(value) => setAttributes({ linkAnchor: value })}
					/>

					<hr />

					<SelectControl
						label={__("Media Type", "blocks-gstore")}
						value={mediaType}
						options={[
							{ label: __("Video", "blocks-gstore"), value: "video" },
							{ label: __("Image", "blocks-gstore"), value: "image" },
						]}
						onChange={(value) => setAttributes({ mediaType: value })}
					/>

					{mediaType === "video" && (
						<>
							{video && (
								<video
									controls
									muted
									style={{ maxWidth: "100%", marginTop: "10px" }}
								>
									<source src={video} type="video/mp4" />
								</video>
							)}
							<MediaUpload
								onSelect={(media) => setAttributes({ video: media.url })}
								allowedTypes={["video"]}
								value={video}
								render={({ open }) => (
									<Button
										variant="secondary"
										onClick={open}
										style={{ marginTop: "10px" }}
									>
										{video
											? __("Replace Video", "blocks-gstore")
											: __("Upload Video", "blocks-gstore")}
									</Button>
								)}
							/>
						</>
					)}

					{mediaType === "image" && (
						<>
							{backgroundImage && (
								<img
									src={backgroundImage}
									alt="Hero Background"
									style={{ maxWidth: "100%", marginTop: "10px" }}
								/>
							)}
							<MediaUpload
								onSelect={(media) =>
									setAttributes({
										backgroundImage: media.url,
										backgroundImageId: media.id,
									})
								}
								allowedTypes={["image"]}
								value={backgroundImageId}
								render={({ open }) => (
									<Button
										variant="secondary"
										onClick={open}
										style={{ marginTop: "10px" }}
									>
										{backgroundImage
											? __("Replace Image", "blocks-gstore")
											: __("Upload Image", "blocks-gstore")}
									</Button>
								)}
							/>
						</>
					)}
				</PanelBody>

				<PanelBody title={__("Company Logos", "blocks-gstore")}>
					<TextControl
						label={__("Section Title", "blocks-gstore")}
						value={logosTitle}
						onChange={(value) => setAttributes({ logosTitle: value })}
					/>
					<MediaUpload
						onSelect={(media) => {
							const newLogos = media.map((item) => ({
								id: item.id,
								url: item.url,
								alt: item.alt,
							}));
							setAttributes({ logos: newLogos });
						}}
						allowedTypes={["image"]}
						multiple={true}
						gallery={true}
						value={logos.map((logo) => logo.id)}
						render={({ open }) => (
							<Button
								variant="secondary"
								onClick={open}
								style={{ width: "100%", marginBottom: "10px" }}
							>
								{logos.length > 0
									? __("Manage Logos", "blocks-gstore")
									: __("Select Logos", "blocks-gstore")}
							</Button>
						)}
					/>
					{logos.length > 0 && (
						<div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
							{logos.map((logo) => (
								<img
									key={logo.id}
									src={logo.url}
									alt={logo.alt}
									style={{
										width: "40px",
										height: "40px",
										objectFit: "contain",
										background: "#eee",
										borderRadius: "4px",
									}}
								/>
							))}
						</div>
					)}
				</PanelBody>
			</InspectorControls>
			<div {...useBlockProps()}>
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
					<RichText
						tagName="h2"
						className="hero-title"
						value={title}
						onChange={(value) => setAttributes({ title: value })}
					/>
					<RichText
						tagName="p"
						className="hero-description"
						value={description}
						onChange={(value) => setAttributes({ description: value })}
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
						<RichText
							tagName="p"
							className="hero-logos-title"
							value={logosTitle}
							onChange={(value) => setAttributes({ logosTitle: value })}
						/>
						<div className="hero-logos-wrapper">
							<div className="hero-logos-track">
								{logos.map((logo, index) => (
									<div key={index} className="hero-logo-item">
										<img src={logo.url} alt={logo.alt} />
									</div>
								))}
							</div>
						</div>
					</div>
				)}
			</div>
		</>
	);
}

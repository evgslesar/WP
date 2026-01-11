import { __ } from "@wordpress/i18n";
import { useBlockProps, InspectorControls } from "@wordpress/block-editor";
import {
	PanelBody,
	TextControl,
	Button,
	TextareaControl,
} from "@wordpress/components";
import "./editor.scss";

export default function Edit({ attributes, setAttributes }) {
	const { logoText, copyrightText, footerMenu, socialLinks } = attributes;

	const updateLogoCalls = (val) => setAttributes({ logoText: val });
	const updateCopyright = (val) => setAttributes({ copyrightText: val });

	// Social Links handlers
	const updateSocialLink = (index, key, value) => {
		const newSocials = [...socialLinks];
		newSocials[index] = { ...newSocials[index], [key]: value };
		setAttributes({ socialLinks: newSocials });
	};
	const addSocialLink = () => {
		setAttributes({
			socialLinks: [...socialLinks, { platform: "twitter", url: "#" }],
		});
	};
	const removeSocialLink = (index) => {
		const newSocials = socialLinks.filter((_, i) => i !== index);
		setAttributes({ socialLinks: newSocials });
	};

	// Footer Menu (Columns) handlers
	const updateColumnTitle = (colIndex, val) => {
		const newMenu = [...footerMenu];
		newMenu[colIndex] = { ...newMenu[colIndex], title: val };
		setAttributes({ footerMenu: newMenu });
	};
	const addColumn = () => {
		setAttributes({
			footerMenu: [
				...footerMenu,
				{ title: "New Column", links: [{ label: "Link", url: "#" }] },
			],
		});
	};
	const removeColumn = (colIndex) => {
		const newMenu = footerMenu.filter((_, i) => i !== colIndex);
		setAttributes({ footerMenu: newMenu });
	};

	// Column Links handlers
	const updateLink = (colIndex, linkIndex, key, val) => {
		const newMenu = [...footerMenu];
		const newLinks = [...newMenu[colIndex].links];
		newLinks[linkIndex] = { ...newLinks[linkIndex], [key]: val };
		newMenu[colIndex] = { ...newMenu[colIndex], links: newLinks };
		setAttributes({ footerMenu: newMenu });
	};
	const addLink = (colIndex) => {
		const newMenu = [...footerMenu];
		const newLinks = [
			...newMenu[colIndex].links,
			{ label: "New Link", url: "#" },
		];
		newMenu[colIndex] = { ...newMenu[colIndex], links: newLinks };
		setAttributes({ footerMenu: newMenu });
	};
	const removeLink = (colIndex, linkIndex) => {
		const newMenu = [...footerMenu];
		const newLinks = newMenu[colIndex].links.filter((_, i) => i !== linkIndex);
		newMenu[colIndex] = { ...newMenu[colIndex], links: newLinks };
		setAttributes({ footerMenu: newMenu });
	};

	return (
		<>
			<InspectorControls>
				<PanelBody title={__("General Settings", "blocks-gstore")}>
					<TextControl
						label={__("Logo Text", "blocks-gstore")}
						value={logoText}
						onChange={updateLogoCalls}
					/>
					<TextareaControl
						label={__("Copyright Text", "blocks-gstore")}
						value={copyrightText}
						onChange={updateCopyright}
					/>
				</PanelBody>

				<PanelBody
					title={__("Social Links", "blocks-gstore")}
					initialOpen={false}
				>
					{socialLinks.map((item, index) => (
						<div
							key={index}
							style={{
								marginBottom: "1rem",
								borderBottom: "1px solid #eee",
								paddingBottom: "1rem",
							}}
						>
							<TextControl
								label={__("Platform", "blocks-gstore")}
								value={item.platform}
								onChange={(val) => updateSocialLink(index, "platform", val)}
								help="twitter, facebook, instagram, linkedin, youtube"
							/>
							<TextControl
								label={__("URL", "blocks-gstore")}
								value={item.url}
								onChange={(val) => updateSocialLink(index, "url", val)}
							/>
							<Button
								isDestructive
								variant="link"
								onClick={() => removeSocialLink(index)}
							>
								{__("Remove Social", "blocks-gstore")}
							</Button>
						</div>
					))}
					<Button variant="secondary" onClick={addSocialLink}>
						{__("Add Social Link", "blocks-gstore")}
					</Button>
				</PanelBody>

				<PanelBody
					title={__("Footer Columns", "blocks-gstore")}
					initialOpen={false}
				>
					{footerMenu.map((column, colIndex) => (
						<div
							key={colIndex}
							style={{
								marginBottom: "20px",
								border: "1px solid #ddd",
								padding: "10px",
								borderRadius: "4px",
							}}
						>
							<TextControl
								label={__("Column Title", "blocks-gstore")}
								value={column.title}
								onChange={(val) => updateColumnTitle(colIndex, val)}
								style={{ fontWeight: "bold" }}
							/>
							<div style={{ marginLeft: "10px", marginTop: "10px" }}>
								<strong>{__("Links:", "blocks-gstore")}</strong>
								{column.links.map((link, linkIndex) => (
									<div
										key={linkIndex}
										style={{
											marginBottom: "10px",
											borderLeft: "2px solid #eee",
											paddingLeft: "10px",
											marginTop: "5px",
										}}
									>
										<TextControl
											label="Label"
											value={link.label}
											onChange={(val) =>
												updateLink(colIndex, linkIndex, "label", val)
											}
										/>
										<TextControl
											label="URL"
											value={link.url}
											onChange={(val) =>
												updateLink(colIndex, linkIndex, "url", val)
											}
										/>
										<Button
											isDestructive
											variant="link"
											isSmall
											onClick={() => removeLink(colIndex, linkIndex)}
										>
											Remove Link
										</Button>
									</div>
								))}
								<Button
									variant="secondary"
									isSmall
									onClick={() => addLink(colIndex)}
								>
									Add Link
								</Button>
							</div>
							<div
								style={{
									marginTop: "10px",
									borderTop: "1px solid #eee",
									paddingTop: "5px",
								}}
							>
								<Button
									isDestructive
									variant="link"
									onClick={() => removeColumn(colIndex)}
								>
									Remove Column
								</Button>
							</div>
						</div>
					))}
					<Button
						variant="primary"
						onClick={addColumn}
						style={{ marginTop: "10px" }}
					>
						{__("Add Column", "blocks-gstore")}
					</Button>
				</PanelBody>
			</InspectorControls>

			<div {...useBlockProps({ className: "gstore-footer" })}>
				<div className="gstore-footer__container">
					<div className="gstore-footer__top">
						<div className="gstore-footer__brand">
							<div className="gstore-footer__logo">{logoText}</div>
							<div className="gstore-footer__socials">
								{socialLinks.map((social, index) => (
									<a
										key={index}
										href={social.url}
										className={`gstore-social-link social-${social.platform}`}
										onClick={(e) => e.preventDefault()}
									>
										{social.platform.charAt(0).toUpperCase() +
											social.platform.slice(1)}
									</a>
								))}
							</div>
						</div>

						<div className="gstore-footer__menus">
							{footerMenu.map((column, index) => (
								<div key={index} className="gstore-footer__column">
									<h4 className="gstore-footer__column-title">
										{column.title}
									</h4>
									<ul className="gstore-footer__list">
										{column.links.map((link, lIndex) => (
											<li key={lIndex}>
												<a href={link.url} onClick={(e) => e.preventDefault()}>
													{link.label}
												</a>
											</li>
										))}
									</ul>
								</div>
							))}
						</div>
					</div>

					<div className="gstore-footer__bottom">
						<div className="gstore-footer__copyright">{copyrightText}</div>
					</div>
				</div>
			</div>
		</>
	);
}

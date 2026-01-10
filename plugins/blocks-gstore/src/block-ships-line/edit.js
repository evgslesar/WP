import { __ } from "@wordpress/i18n";
import { useBlockProps, InspectorControls } from "@wordpress/block-editor";
import { PanelBody, RangeControl } from "@wordpress/components";
import "./editor.scss";

export default function Edit({ attributes, setAttributes }) {
	const { maxSlides, imageHeight } = attributes;

	return (
		<div {...useBlockProps()}>
			<InspectorControls>
				<PanelBody title={__("Settings", "blocks-gstore")}>
					<RangeControl
						label={__("Max Slides", "blocks-gstore")}
						value={maxSlides}
						onChange={(value) => setAttributes({ maxSlides: value })}
						min={1}
						max={20}
					/>
					<RangeControl
						label={__("Image Height (px)", "blocks-gstore")}
						value={imageHeight}
						onChange={(value) => setAttributes({ imageHeight: value })}
						min={200}
						max={800}
						step={10}
					/>
				</PanelBody>
			</InspectorControls>
			<div className="ships-slider-preview">
				<p>{__("Ships Slider Block", "blocks-gstore")}</p>
				<p>{__(`Max Slides: ${maxSlides}`, "blocks-gstore")}</p>
				<p>{__(`Height: ${imageHeight}px`, "blocks-gstore")}</p>
			</div>
		</div>
	);
}

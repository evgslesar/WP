import { __ } from "@wordpress/i18n";
import { useBlockProps, InspectorControls } from "@wordpress/block-editor";
import { PanelBody, RangeControl } from "@wordpress/components";
import ServerSideRender from "@wordpress/server-side-render";
import "./editor.scss";

export default function Edit({ attributes, setAttributes }) {
	const { postsToShow } = attributes;

	return (
		<div {...useBlockProps()}>
			<InspectorControls>
				<PanelBody title={__("Settings", "blocks-gstore")}>
					<RangeControl
						label={__("Number of posts", "blocks-gstore")}
						value={postsToShow}
						onChange={(value) => setAttributes({ postsToShow: value })}
						min={1}
						max={12}
					/>
				</PanelBody>
			</InspectorControls>
			<ServerSideRender
				block="blocks-gstore/block-recent-news"
				attributes={attributes}
			/>
		</div>
	);
}

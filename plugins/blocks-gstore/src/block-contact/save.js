import { useBlockProps } from "@wordpress/block-editor";

export default function save() {
	return (
		<p {...useBlockProps.save()}>
			{"Blocks Gstore – hello from the saved content!"}
		</p>
	);
}

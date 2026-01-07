import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl } from '@wordpress/components';
import './editor.scss';

export default function Edit({ attributes, setAttributes }) {
	const { memberLink, geoLocation, ctaText, ctaUrl } = attributes;
	
	const onChangeGeo = (val) => setAttributes({ geoLocation: val });
	const onChangeCtaText = (val) => setAttributes({ ctaText: val });
	const onChangeCtaUrl = (val) => setAttributes({ ctaUrl: val });
	const onChangeMemberLink = (val) => setAttributes({ memberLink: val });

	return (
		<>
			<InspectorControls>
				<PanelBody title={__('Header Settings', 'blocks-gstore')}>
					<TextControl
						label={__('Geo Location', 'blocks-gstore')}
						value={geoLocation}
						onChange={onChangeGeo}
					/>
					<TextControl
						label={__('CTA Text', 'blocks-gstore')}
						value={ctaText}
						onChange={onChangeCtaText}
					/>
					<TextControl
						label={__('CTA URL', 'blocks-gstore')}
						value={ctaUrl}
						onChange={onChangeCtaUrl}
					/>
					<TextControl
						label={__('Login/Register Link', 'blocks-gstore')}
						value={memberLink}
						onChange={onChangeMemberLink}
					/>
				</PanelBody>
			</InspectorControls>
			<div { ...useBlockProps({ className: 'gstore-header' }) }>
				<div className="gstore-header__container">
					<div className="gstore-header__left">
						<div className="gstore-header__logo">GStore</div>
						<div className="gstore-header__geo">
							<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
							{geoLocation}
						</div>
					</div>

					<nav className="gstore-header__nav">
						<a href="#" className="gstore-nav-link">Fighters</a>
						<a href="#" className="gstore-nav-link">Frigates</a>
						<a href="#" className="gstore-nav-link">Haulers</a>
						<a href="#" className="gstore-nav-link">Destroyers</a>
						<a href="#" className="gstore-nav-link">Shuttles</a>
						<span className="gstore-nav-more">More <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/></svg></span>
					</nav>

					<div className="gstore-header__right">
						<a className="gstore-btn-cta" href="#">{ctaText}</a>
						<div className="gstore-header__login">
							<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
							{__('Login', 'blocks-gstore')}
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

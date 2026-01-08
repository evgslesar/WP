import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl, Button } from '@wordpress/components';
import './editor.scss';

export default function Edit({ attributes, setAttributes }) {
	const { memberLink, geoLocation, ctaText, ctaUrl, menuItems, moreMenuItems } = attributes;
	
	const onChangeGeo = (val) => setAttributes({ geoLocation: val });
	const onChangeCtaText = (val) => setAttributes({ ctaText: val });
	const onChangeCtaUrl = (val) => setAttributes({ ctaUrl: val });
	const onChangeMemberLink = (val) => setAttributes({ memberLink: val });

	const updateMenuItem = (index, key, value) => {
		const newMenuItems = [...menuItems];
		newMenuItems[index] = { ...newMenuItems[index], [key]: value };
		setAttributes({ menuItems: newMenuItems });
	};

	const addMenuItem = () => {
		setAttributes({ menuItems: [...menuItems, { label: 'New Item', url: '#' }] });
	};

	const removeMenuItem = (index) => {
		const newMenuItems = menuItems.filter((_, i) => i !== index);
		setAttributes({ menuItems: newMenuItems });
	};

	const updateMoreMenuItem = (index, key, value) => {
		const newMoreMenuItems = [...moreMenuItems];
		newMoreMenuItems[index] = { ...newMoreMenuItems[index], [key]: value };
		setAttributes({ moreMenuItems: newMoreMenuItems });
	};

	const addMoreMenuItem = () => {
		setAttributes({ moreMenuItems: [...moreMenuItems, { label: 'New Item', url: '#' }] });
	};

	const removeMoreMenuItem = (index) => {
		const newMoreMenuItems = moreMenuItems.filter((_, i) => i !== index);
		setAttributes({ moreMenuItems: newMoreMenuItems });
	};

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
				<PanelBody title={__('Menu Items', 'blocks-gstore')}>
					{menuItems.map((item, index) => (
						<div key={index} style={{ marginBottom: '1rem', borderBottom: '1px solid #eee', paddingBottom: '1rem' }}>
							<TextControl
								label={__('Label', 'blocks-gstore')}
								value={item.label}
								onChange={(val) => updateMenuItem(index, 'label', val)}
							/>
							<TextControl
								label={__('URL', 'blocks-gstore')}
								value={item.url}
								onChange={(val) => updateMenuItem(index, 'url', val)}
							/>
							<Button isDestructive variant="link" onClick={() => removeMenuItem(index)}>
								{__('Remove Item', 'blocks-gstore')}
							</Button>
						</div>
					))}
					<Button variant="secondary" onClick={addMenuItem}>
						{__('Add Menu Item', 'blocks-gstore')}
					</Button>
				</PanelBody>
				<PanelBody title={__('More Menu Items', 'blocks-gstore')} initialOpen={false}>
					{moreMenuItems && moreMenuItems.map((item, index) => (
						<div key={index} style={{ marginBottom: '1rem', borderBottom: '1px solid #eee', paddingBottom: '1rem' }}>
							<TextControl
								label={__('Label', 'blocks-gstore')}
								value={item.label}
								onChange={(val) => updateMoreMenuItem(index, 'label', val)}
							/>
							<TextControl
								label={__('URL', 'blocks-gstore')}
								value={item.url}
								onChange={(val) => updateMoreMenuItem(index, 'url', val)}
							/>
							<Button isDestructive variant="link" onClick={() => removeMoreMenuItem(index)}>
								{__('Remove Item', 'blocks-gstore')}
							</Button>
						</div>
					))}
					<Button variant="secondary" onClick={addMoreMenuItem}>
						{__('Add Menu Item', 'blocks-gstore')}
					</Button>
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
						{menuItems && menuItems.map((item, index) => (
							<a key={index} href={item.url} className="gstore-nav-link" onClick={(e) => e.preventDefault()}>{item.label}</a>
						))}
						<div className="gstore-nav-more">
							<span>More</span>
							<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/></svg>
							<div className="gstore-nav-dropdown">
								{moreMenuItems && moreMenuItems.map((item, index) => (
									<a key={index} href={item.url} className="gstore-dropdown-link" onClick={(e) => e.preventDefault()}>{item.label}</a>
								))}
							</div>
						</div>
					</nav>

					<div className="gstore-header__right">
						<a className="gstore-btn-cta" href="#">{ctaText}</a>
						<div className="gstore-header__login">
							<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
							{__('Login', 'blocks-gstore')}
						</div>
						<button className="theme-toggle" aria-label="Toggle Dark/Light Mode" disabled>
							<svg className="icon-moon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
							<svg className="icon-sun" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
						</button>
						<button className="burger-menu" aria-label="Toggle Navigation" disabled>
							<span className="burger-bar"></span>
							<span className="burger-bar"></span>
							<span className="burger-bar"></span>
						</button>
					</div>
				</div>
			</div>
		</>
	);
}

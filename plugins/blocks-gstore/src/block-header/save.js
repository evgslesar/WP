import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';

export default function save({ attributes }) {
	const { memberLink, geoLocation, ctaText, ctaUrl, menuItems, moreMenuItems } = attributes;

	return (
		<div { ...useBlockProps.save({ className: 'gstore-header' }) }>
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
						<a key={index} href={item.url} className="gstore-nav-link">{item.label}</a>
					))}
					<div className="gstore-nav-more">
						<span>More</span>
						<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/></svg>
						<div className="gstore-nav-dropdown">
							{moreMenuItems && moreMenuItems.map((item, index) => (
								<a key={index} href={item.url} className="gstore-dropdown-link">{item.label}</a>
							))}
						</div>
					</div>
				</nav>

				<div className="gstore-header__right">
					<a className="gstore-btn-cta" href={ctaUrl || '#'}>{ctaText}</a>
					<div className="gstore-header__login">
						<a href={memberLink || '#'}>
							<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
							{__('Login', 'blocks-gstore')}
						</a>
					</div>
					<button className="theme-toggle js-theme-toggle" aria-label="Toggle Dark/Light Mode">
						<svg className="icon-moon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
						<svg className="icon-sun" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
					</button>
					<button className="burger-menu js-burger-menu" aria-label="Toggle Navigation">
						<span className="burger-bar"></span>
						<span className="burger-bar"></span>
						<span className="burger-bar"></span>
					</button>
				</div>
			</div>
		</div>
	);
}

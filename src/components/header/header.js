import React from 'react';
import {Link} from 'react-router-dom';

import logo from './Logo original RGB.svg';

import './header.scss'

const showMarker = () => {
	document.querySelector('.marker').classList.remove('marker_default');
}

const removeMarker = () => {
	document.querySelector('.marker').classList.add('marker_default');
}

const Header = () => {
	return (
		<header className="app-header">
			<div className="app-header__logo">
				<img src={logo} alt="header-logo"/>
			</div>
			<nav className="app-header__navigation">
				<Link to="/" className="app-header__navigation-item"
				 onClick={() => removeMarker()}>
					<div className="app-header__link">HOME</div>
				</Link>
				<Link to="/about-us" className="app-header__navigation-item"
					onClick={() => showMarker()}>
					<div className="app-header__link">ABOUT US</div>
					<div className="marker marker_default"></div>
				</Link>
			</nav>
		</header>
	)
}

export default Header;
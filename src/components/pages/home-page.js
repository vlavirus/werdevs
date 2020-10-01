import React from 'react';

import Calendar from '../calendar';
import Popup from '../popup';

import './home-page.scss';

const HomePage = () => {
	return (
		<section className="home-page">
			<Popup/>
			<div className="home-page__left">
				<div className="home-page__content">
					<h1 className="home-page__title">
						Choose the day <br></br>for the meeting
					</h1>
					<div className="home-page__subtitle">
						We encourage you to book your <br/> appointment online. <br/> This will save you time.
					</div>
				</div>
			</div>
			<div className="home-page__right">
				<Calendar/>
			</div>
		</section>
	)
}

export default HomePage;
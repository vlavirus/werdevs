import React from 'react';
import {connect} from 'react-redux';

import {closePopup} from '../../actions';

import './popup.scss';

const Popup = ({status, month, day, dayName, closePopup}) => {
	
	if (status === true) {
		return (
			<div className="overlay">
				<div className="popup">
					<div className="popup__close" onClick={closePopup}>&times;</div>
					<div className="popup__item">
						<div className="popup__item-title">Month</div>
						<div className="popup__item-value">{month}</div>
					</div>
					<div className="popup__item">
						<div className="popup__item-title">Day</div>
						<div className="popup__item-value">{`${day} ${dayName}`}</div>
					</div>
				</div>
			</div>
		)
	} else if (status === false) {
		return (
			<div></div>
		)
	} else {
		return (
			<div></div>
		)
	}

}

const mapStateToProps = ({popUp:{status, month, day, dayName}}) => {
	return {
		status, month, day, dayName
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		closePopup: (data) => {
			dispatch(closePopup(data))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Popup);
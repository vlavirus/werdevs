import React, {Component} from 'react';
import {connect} from 'react-redux';
import {showPopup, pushDataToPopup} from '../../actions';
import './calendar-day.scss';

class CalendarDay extends Component {

	render() {
		const {tag, date, showPopup, pushDataToPopup} = this.props;
		let curDate = new Date(date);
		return (
			<div className={tag}
				onClick={() => {
					pushDataToPopup([curDate.getMonth(), curDate.getDate(), curDate.getDay()])
					showPopup()
				}}>
				{curDate.getDate()}
			</div>
		)
	}

}

const mapStateToProps = ({popUp:{status}}) => {
	return {
		status
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		showPopup:() => {
			dispatch(showPopup())
		},
		pushDataToPopup: (date) => {
			dispatch(pushDataToPopup(date))
		}
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(CalendarDay);

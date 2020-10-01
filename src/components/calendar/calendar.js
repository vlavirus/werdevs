import React, {Component} from 'react';

import {calendarLoaded, prevMonth, nextMonth, showPopup} from '../../actions';
import CalendarDay from '../calendar-day';
import {connect} from 'react-redux';
import prev from './icons/keyboard_arrow_left.svg';
import next from './icons/keyboard_arrow_right.svg';
import CalendarCreator from '../../service/calendar-creator-service';
import './calendar.scss'

const checkCurrentDay = (day, month, year) => {
	let curDate = new Date();
	let curDay = curDate.getDate();
	let curMonth = curDate.getMonth();
	let curYear = curDate.getFullYear();

	if (curDay == day && curMonth == month && curYear == year) {
		return true
	} else {
		return false
	}
}

const createWeek = (curDate, month, year, counter, days) => {
	let week = [];
	let count = counter;
	let startDatOffset = curDate.getDay() * -1 + 2;
	
	for (let day = 0; day < 7; day++) {
		let d = new Date(year, month, count + startDatOffset, 0, 0, 0, 0);
		if (d.getMonth() == month ) {
			if (checkCurrentDay(d.getDate(), month, year)) {
				week.push(<CalendarDay key={count} tag="calendar-plate__item current" date={`${days[count]}`}/>)
			} else {
				week.push(<CalendarDay key={count} tag="calendar-plate__item" date={`${days[count]}`}/>)
			}
			
		} else {
			week.push(<CalendarDay key={count} tag="calendar-plate__item calendar-plate__item-disable" date={`${days[count]}`}/>)
		}
		count++
	}
	return week;
}

const createDaysGrid = (year, month, days) => {
	let result = [];
	let counter = 0;
	let curDate = new Date(year, month, 1, 0, 0, 0, 0);
	for (let week = 0; week < 5; week++ ) {
		let row = React.createElement("div", {className: "calendar-plate__row", key: week}, createWeek(curDate, month, year, counter, days, showPopup));
		counter += 7
		result.push(row);
	}
	return result;
}




class Calendar extends Component {

	componentDidMount() {
		const {calendarLoaded, realMonth, realYear} = this.props;
		let calendarCreator = new CalendarCreator();

		calendarCreator.getCalendar(realMonth, realYear)
			.then((data) =>  calendarLoaded(data))
	}

	componentDidUpdate(prevProps) {
		if (this.props.currentMonth !== prevProps.currentMonth) {
			const {currentMonth, currentYear, calendarLoaded} = this.props;
			let calendarCreator = new CalendarCreator();
	
			calendarCreator.getCalendar(currentMonth, currentYear)
				.then((data) =>  calendarLoaded(data))
		}
	}

	render() {

		const {
			loading,
			prevMonth,
			nextMonth,
			currentMonth,
			arrDays,
			currentMonthName,
			currentYear} = this.props;
		
		if (loading) {
			return <div></div>
		}

		return (
			<div className="calendar">
				<div className="calendar__wrapper">
					<div className="calendar__nav">
						<div className="prev-month"
							onClick={() => {
								prevMonth();
							}}>
							<img src={prev} alt="prev-arrow"/>
						</div>
						<div className="calendar-date">
							<div className="calendar-date__month">{currentMonthName}</div>
							<div className="calendar-date__year">{currentYear}</div>
						</div>
						<div className="next-month"
							onClick={() => nextMonth()}>
							<img src={next} alt="next-arrow"/>
						</div>
					</div>
					
					<div className="calendar-plate">
						{
							createDaysGrid(currentYear, currentMonth, arrDays)
						}
					</div>
					<div className="calendar-days__names">
						<div className="calendar-days__item">S</div>
						<div className="calendar-days__item">M</div>
						<div className="calendar-days__item">T</div>
						<div className="calendar-days__item">W</div>
						<div className="calendar-days__item">T</div>
						<div className="calendar-days__item">F</div>
						<div className="calendar-days__item">S</div>
					</div>
				</div>
			</div>
		)
	}
}


const mapStateToProps = ({calendar: {loading,realDay,realMonth, realYear, currentDay, currentMonth, currentMonthName, arrDays, currentYear}}) => {
	return {
		loading,
		realDay,
		realMonth,
		realYear,
		currentDay,
		currentMonth,
		arrDays,
		currentMonthName,
		currentYear
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		calendarLoaded: (data) => {
			dispatch(calendarLoaded(data))
		},
		prevMonth: () => {
			dispatch(prevMonth())
		},
		nextMonth: () => {
			dispatch(nextMonth())
		},
		showPopup:() => {
			dispatch(showPopup())
		}
		
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);
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

const generateDateTableBody = (month, year) => {
	let counter = 0;
	let curDate = new Date(year, month, 1, 0, 0, 0, 0);
	let startDatOffset = curDate.getDay() * -1 + 2;

	let calendarMonth = [];

	for(let week=0; week<5; week++) {
		for(let day=0; day<7; day++) {
			let d = new Date(year, month, counter + startDatOffset, 0, 0, 0, 0);
			
			calendarMonth.push(d);
			counter ++;
		}
	}
	return calendarMonth;
}

export default class CalendarCreator {


	getCalendar(month, year) {
		return new Promise((resolve) => {
			resolve(generateDateTableBody(month, year))
		})
	}
}


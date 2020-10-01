let monthVr = 0;
let yearVr = 0;

const choseMonthName = (month) => {
	let months = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ];

	return months[month];
}

const updateCalendar = (state, action) => {
	if (state === undefined) {
		let curDate = new Date();
		let day = curDate.getDate();
		let month = curDate.getMonth();
		let year = curDate.getFullYear();

		return {
			loading: true,
			realDay: day,
			realMonth: month,
			realYear:year,
			currentDay: day,
			currentMonth: month,
			arrDays: [],
			currentMonthName: '',
			currentYear: year
		}
	}
	switch(action.type) {
		case 'CALENDAR_LOADED':
			return {
				...state.calendar,
				loading: false,
				currentMonthName: choseMonthName(state.calendar.currentMonth),
				arrDays: action.payload
			};
		case 'PREV_MONTH':
				monthVr = state.calendar.currentMonth - 1;
				yearVr = state.calendar.currentYear;

			if (monthVr < 0) {
				monthVr = 11;
				yearVr -= 1;
			}
			return {
				...state.calendar,
				currentMonth: monthVr,
				currentYear: yearVr,
				currentMonthName: choseMonthName(monthVr),
			};
		case 'NEXT_MONTH':
				monthVr = state.calendar.currentMonth + 1;
				yearVr = state.calendar.currentYear;

				if (monthVr > 11) {
					monthVr = 0;
					yearVr += 1;
				}
				return {
					...state.calendar,
					currentMonth: monthVr,
					currentYear: yearVr,
					currentMonthName: choseMonthName(monthVr),
				};
		default:
			return state.calendar;
	}
}

export {
	choseMonthName,
	updateCalendar
} 
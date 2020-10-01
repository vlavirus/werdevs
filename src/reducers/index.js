import {updateCalendar} from './calendar-rd';
import updatePopup from './popup-rd';

const initialState = {
	calendar: {
		loading: true,
		realDay: 0,
		realMonth: 0,
		realYear:0,
		currentDay: 0,
		currentMonth: 0,
		arrDays: '',
		currentMonthName: '',
		currentYear: 0
	},
	popUp: {
		status: '',
		month: '',
		day: '',
		dayName: ''
	}
};

const reducer = (state, action) => {
	return {
		calendar: updateCalendar(state, action),
		popUp: updatePopup(state, action)
	};
};

export default reducer;
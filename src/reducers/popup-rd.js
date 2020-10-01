import {choseMonthName}from './calendar-rd';

const choseWeekDay = (day) => {
	let days = ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

	return days[day];
}

const ordinal_suffix_of = (i) => {
    var j = i % 10,
        k = i % 100;
    if (j == 1 && k != 11) {
        return i + "st";
    }
    if (j == 2 && k != 12) {
        return i + "nd";
    }
    if (j == 3 && k != 13) {
        return i + "rd";
    }
    return i + "th";
}

const updatePopup = (state, action) => {
	if(state === undefined) {
		return {
			status: '',
			month: '',
			day: '',
			dayName: ''
		}
	}
	switch(action.type) {
		case 'SHOW__POPUP':
			return {
				...state.popUp,
				status: true
			}
		case 'CLOSE__POPUP':
			return {
				...state.popUp,
				status: false
			}
		case 'PUSH__DATA':
			let data = action.payload;
			return {
				...state.popUp,
				month: choseMonthName(data[0]),
				day: `${ordinal_suffix_of(data[1])}`,
				dayName: choseWeekDay(data[2])
			}
		default:
			return state.popUp;
	}
}

export default updatePopup;
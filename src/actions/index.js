const calendarLoaded = (date) => {
	return {
		type: 'CALENDAR_LOADED',
		payload: date
	}
}

const nextMonth = () => {
	return {
		type: 'NEXT_MONTH'
	}
}

const prevMonth = () => {
	return {
		type: 'PREV_MONTH'
	}
}

const showPopup = () => {
	return {
		type: 'SHOW__POPUP'
	}
}

const closePopup = () => {
	return {
		type: 'CLOSE__POPUP'
	}
}

const pushDataToPopup = (data) => {
	return {
		type: "PUSH__DATA",
		payload: data
	}
} 

export {
	pushDataToPopup,
	calendarLoaded,
	nextMonth,
	prevMonth,
	showPopup,
	closePopup
};

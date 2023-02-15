const CalendarDates = require('calendar-dates');
const newCalendarDates = new CalendarDates();

const log = console.log;
const nov2021 = new Date(2021, 10); //starts at previous month

mainAsync = async () => {
    const novDates = await newCalendarDates.getDates(nov2021);
    const novMatrix = await newCalendarDates.getMatrix(nov2021);
    log(`Nov, 2021 Dates`, novDates);
    log(`Nov, 2021 Matrix`, novMatrix);
};
mainAsync();

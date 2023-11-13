var day = document.getElementById('day');
var month = document.getElementById('month');
var year = document.getElementById('year');
var dayErr = document.getElementById('day-err');
var monthErr = document.getElementById('month-err');
var yearErr = document.getElementById('year-err');
var Err = document.getElementById('err');

function result() {
    let day_v = parseInt(day.value);
    let month_v = parseInt(month.value);
    let year_v = parseInt(year.value);

    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    var currentMonth = currentDate.getMonth() + 1;
    var currentDay = currentDate.getDate();

    if (isNaN(day_v) || isNaN(month_v) || isNaN(year_v) || day_v === 0 || month_v === 0 || year_v === 0) {
        Err.innerHTML = "Please fill in all the fields.";
        return;
    }

    if (day_v > 31 || (month_v === 2 && day_v > 29) || ((month_v === 4 || month_v === 6 || month_v === 9 || month_v === 11) && day_v > 30)) {
        dayErr.innerHTML = "Invalid day for the selected month.";
        return;
    }

    if (month_v > 12) {
        monthErr.innerHTML = "Invalid month for the selected month.";
        return;
    }


    if (year_v > currentYear || (year_v === currentYear && month_v > currentMonth) || (year_v === currentYear && month_v === currentMonth && day_v > currentDay)) {
        yearErr.innerHTML = "Invalid year. Please enter a valid year.";
        return;
    }

    var years = currentYear - year_v;
    var months = currentMonth - month_v;
    var days = currentDay - day_v;

    if (days < 0) {
        months--;
        var daysInPreviousMonth = new Date(currentYear, currentMonth - 1, 0).getDate();
        days += daysInPreviousMonth;
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    document.getElementById('day-result').innerHTML = days;
    document.getElementById('month-result').innerHTML = months;
    document.getElementById('year-result').innerHTML = years;

}

let currentDate = new Date();


let currentMonth = currentDate.getMonth();
let currentYear = currentDate.getFullYear();


let calendar = document.getElementById("calendar");
let calendarHeader = document.getElementById("calendar-header");
let calendarMonthYear = document.getElementById("calendar-month-year");
let calendarBody = document.getElementById("calendar-body");
let prevMonth = document.getElementById("prev-month");
let nextMonth = document.getElementById("next-month");


function createCalendar() {

  calendarBody.innerHTML = "";


  let date = 1;
  for (let i = 0; i < 6; i++) {
    let row = document.createElement("tr");
    for (let j = 0; j < 7; j++) {
      if (i === 0 && j < firstDay) {
        let cell = document.createElement("td");
        let cellText = document.createTextNode("");
        cell.appendChild(cellText);
        row.appendChild(cell);
      } else if (date > daysInMonth) {
        break;
      } else {
        let cell = document.createElement("td");
        let cellText = document.createTextNode(date);
        if (date === currentDate.getDate() && currentMonth === currentDate.getMonth() && currentYear === currentDate.getFullYear()) {
          cell.classList.add("current-day");
        }
        cell.appendChild(cellText);
        row.appendChild(cell);
        date++;
      }
    }
    calendarBody.appendChild(row);
  }
}


prevMonth.addEventListener("click", function() {
  currentMonth--;
  if (currentMonth < 0) {
    currentMonth = 11;
    currentYear--;
  }
  createCalendar();
});


nextMonth.addEventListener("click", function() {
  currentMonth++;
  if (currentMonth > 11) {
    currentMonth = 0;
    currentYear++;
  }
  createCalendar();
});


createCalendar();
// GIVEN I am using a daily planner to create a schedule

/*WHEN I open the planner
THEN the current day is displayed at the top of the calendar*/
var todayDate = moment().format("MMM. Do YYYY");
$("#currentDay").html(todayDate);

var hourNow = moment().minutes(0).seconds(0).milliseconds(0);
/*WHEN I scroll down
THEN I am presented with timeblocks for standard business hours*/
var hourLength = 9;
var hour = $(".hour");
var save = $(".saveBtn");
var eventColumn = $(".time-block");
var save = $(".deleteBtn");
var userMessage = $(".textarea");

for (let i = 0; i < hourLength; i++) {
  var eventColumn = $("<div>");
  eventColumn.addClass("row time-block");

  var hour = $("<div>");
  hour.addClass("hour col-1");
  hour.text(i + hourLength + ":00");

  var userMessage = $("<textarea>");
  userMessage.addClass("textarea col-9 description");

  var saveBtn = $("<button>");
  saveBtn.addClass("saveBtn col-1");

  var iconSave = $("<i>");
  iconSave.addClass("far fa-save");

  var deleteBtn = $("<button>");
  deleteBtn.addClass("deleteBtn col-1");

  var iconDelete = $("<i>");
  iconDelete.addClass("fas fa-trash-alt");

  saveBtn.append(iconSave);
  deleteBtn.append(iconDelete);
  eventColumn.append(hour);
  eventColumn.append(userMessage);
  eventColumn.append(saveBtn);
  eventColumn.append(deleteBtn);
  $(".container").append(eventColumn);
}
/*WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past,
 present, or future*/
let hourStart = moment().hour(8).minutes(0).seconds(0).milliseconds(0);

for (let i = 0; i < hour.length; i++) {
  let hourBlock = hourStart.add(1, "h");
  if (hourBlock.isBefore(hourNow)) {
    $(eventColumn[i]).addClass("past");
  } else if (hourBlock.isSame(hourNow)) {
    $(eventColumn[i]).addClass("present");
  } else {
    $(evenColumn[i]).addClass("futrue");
  }
}

/*WHEN I click into a timeblock
 THEN I can enter an event*/
var userMessage = $(".textarea");
/*WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage*/

/*WHEN I refresh the page
THEN the saved events persist*/

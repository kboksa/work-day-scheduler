// GIVEN I am using a daily planner to create a schedule

/*WHEN I open the planner
THEN the current day is displayed at the top of the calendar*/

$(".jumbotron").append($("<p>").addClass("par"));

let interval = setInterval(() => {
  let currentTime = dayjs().format("hh:mm:ss a");
  let currentDay = dayjs().format("MMMM DD YYYY");
  $(".par").text(`${currentTime} ${currentDay}`);
}, 1000);

let currentHour = parseInt(dayjs().format("HH"));
console.log(currentHour);
/*WHEN I scroll down
THEN I am presented with timeblocks for standard business hours*/
var hourLength = 9;
var hour = $(".hour");
var saveBtn = $(".saveBtn");
var eventColumn = $(".time-block");
var deleteBtn = $(".deleteBtn");
var userMessage = $(".textarea");

for (let i = 0; i < hourLength; i++) {
  var eventColumn = $("<div>");
  eventColumn.addClass("row time-block");

  var hour = $("<div>");
  hour.addClass("hour col-1");
  hour.text(i + hourLength + ":00");

  var userMessage = $("<textarea>");
  userMessage.addClass("textarea col-9 description").attr("id", i + 9);

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

$(".textarea").each(function () {
  console.log(parseInt($(this).attr("id")));
  if (parseInt($(this).attr("id")) < currentHour) {
    $(this).addClass("past");
  } else if (parseInt($(this).attr("id")) == currentHour) {
    $(this).addClass("present");
  } else {
    $(this).addClass("future");
  }
});

/*WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past,
 present, or future*/

/*WHEN I click into a timeblock
 THEN I can enter an event*/
var userMessage = $(".textarea");
/*WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage*/

function saveInfo() {
  var saveBtn = $(".saveBtn");
  $(saveBtn).on("click", function (event) {
    event.preventDefault();
    console.log("clicked");
    var key = $(this).siblings(".textarea").attr("id");

    var message = $(userMessage).val();
    console.log(key, message);
  });
}

var deleteBtn = $(".deleteBtn");
$(deleteBtn).on("click", function (event) {
  event.preventDefault();
  console.log("clicked");
  var key = $(this).siblings(".textarea").attr("id");

  var message = $(userMessage).val();
  console.log(key, message);
});

/*WHEN I refresh the page
THEN the saved events persist*/
for (var i = 0; i < hour.length; i++) {
  var userInput = localStorage.getItem("Todo-" + (i + hour.length) + ":00");
  $(userMessage[i]).text(userInput);
  saveInfo(i);
  deleteInfo(i);
}
var saveBtn = $(".saveBtn");

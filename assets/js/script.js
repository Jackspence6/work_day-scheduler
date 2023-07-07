/******************************************/
/* External dependencies */
/******************************************/
var now = $("#currentDay");
var tableHour = $(".time");
var addBtn = $(".add");
var addEventBtn = $(".add-event");
var modalEl = $("#myModal");
var saveBtn = $(".fa-save");

/******************************************/
/* Global variables and constants */
/******************************************/
var hourNow;
var middleRow;
var userInput;

/******************************************/
/* Function and class declarations */
/******************************************/
// Function to display date & time
function dateDisplay() {
  var rightNow = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
  now.text(rightNow);
}

// Function with loop to change row highlight color depending on current hour
function rowColor() {
  hourNow = moment().hour();
  $("tr").each(function () {
    var rowHour = parseInt($(this).find(".time").text());
    console.log(rowHour);

    if (rowHour === hourNow) {
      $(this).find("td.middle").css("background-color", "hsl(0 100% 60%)");
    } else if (rowHour < hourNow) {
      $(this).find("td.middle").css("background-color", "LightGray");
    } else {
      $(this).find("td.middle").css("background-color", "hsl(145 100% 50%)");
    }
  });
}
rowColor();

// Declare an empty object to store the events
var events = {};

// Retrieve the stored events from local storage
var storedEvents = JSON.parse(localStorage.getItem("events"));
if (storedEvents !== null) {
  events = storedEvents;

  // Iterate over the stored events object
  Object.keys(events).forEach(function (rowId) {
    var eventText = events[rowId];
    $("#" + rowId)
      .find(".middle")
      .text(eventText);
  });
}
/******************************************/
/* Event listeners */
/******************************************/
// Open modal dialog to input event data
addBtn.on("click", function () {
  var currentAddBtn = $(this);
  var currentRow = currentAddBtn.closest("tr");
  middleRow = currentRow.find(".middle");

  // Get the row id
  var rowId = currentRow.attr("id");

  modalEl.modal("show");

  // Set the input value to the stored event (if available)
  $(".event-data").val(events[rowId] || "");
});

// Add event to corresponding row
addEventBtn.on("click", function () {
  userInput = $(".event-data").val();
  console.log(userInput);
  middleRow.text(userInput);

  // Get the row id
  var rowId = middleRow.closest("tr").attr("id");

  // Store the event in the events object using the row id as the key
  events[rowId] = userInput;

  // Update local storage with the events object
  localStorage.setItem("events", JSON.stringify(events));

  // Hide modal dialog when event is submitted
  modalEl.modal("hide");

  // Clear event data
  $(".event-data").val("");
});

/******************************************/
/* Document manipulation */
/******************************************/

/******************************************/
/* Initialization code */
/******************************************/
// Interval to update date & time every second
setInterval(dateDisplay, 1000);

/******************************************/
/* Main logic */
/******************************************/

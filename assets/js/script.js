/******************************************/
/* External dependencies */
/******************************************/
var now = $("#currentDay");
var tableHour = $(".time");
var addBtn = $(".add");
var addEventBtn = $(".add-event");
var modalEl = $("#myModal");

/******************************************/
/* Global variables and constants */
/******************************************/
var hourNow;
var middleRow;

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

/******************************************/
/* Event listeners */
/******************************************/
// Open modal dialog to input event data
addBtn.on("click", function () {
  var currentAddBtn = $(this);
  var currentRow = currentAddBtn.closest("tr");
  middleRow = currentRow.find(".middle");

  modalEl.modal("show");
});

// Add event to corresponding row
addEventBtn.on("click", function () {
  var userInput = $(".event-data").val();
  console.log(userInput);
  middleRow.text(userInput);

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

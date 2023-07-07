/******************************************/
/* External dependencies */
/******************************************/
var now = $("#currentDay");
var tableHour = $(".time");
var addBtn = $(".add");
var modalEl = $("#myModal");

/******************************************/
/* Global variables and constants */
/******************************************/
var hourNow;

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
addBtn.on("click", function () {
  modalEl.modal("show");
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

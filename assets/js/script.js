/******************************************/
/* External dependencies */
/******************************************/
var now = $("#currentDay");

/******************************************/
/* Global variables and constants */
/******************************************/

/******************************************/
/* Function and class declarations */
/******************************************/
// Function to display date & time
function dateDisplay() {
  var rightNow = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
  now.text(rightNow);  
};

/******************************************/
/* Event listeners */
/******************************************/

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
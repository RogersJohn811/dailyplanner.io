$(document).ready(function() {

    var todaysDate = moment().format('dddd MMM Do YYYY');
var timeNow = moment().format('hh:mm a');
var timeCompare = moment().format("H");
var times = [9, 10, 11, 12, 13,14,15,16,17];

var currentDayEl = $("#currentDay");
var timeBlocks = $(".timeBlocks");
var saveBtn = $(".saveBtn");
var timeLiEl = $("li");
var inputArea = $(".inputArea");

    var timeEntered, textEntered;

currentDayEl.text(todaysDate);

colorCode();

function colorCode() {
for (var i = 0; i < timeLiEl.length; i++); {
    if(timeCompare == times[i]){
        inputArea[i].style.backgroundColor = "#ff7675";
    }
    else if(timeCompare < times[i]){
        inputArea[i].style.backgroundColor = "#55efc4";
    }
};
}

for (var i = 9; i <= 17; i++){
    $("."+i).val(localStorage[""+i]);
    console.log(localStorage[""+i]);
}

$("ul").on("click", ".saveBtn", function (event) {
    event.preventDefault();
    var inputBox = ($(this).prev().val());
    var timeSlot = parseInt(($(this).parent().attr("value")));
    textEntered = inputBox;
    timeEntered = timeSlot;
    console.log("User saved to" + timeEntered + " time slot");
    localStorage.setItem(timeEntered, textEntered);
    var previousPost = localStorage.getItem(textEntered);
});
});


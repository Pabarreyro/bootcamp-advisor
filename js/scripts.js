// Create variables that will hold the names and descriptions of possible courses, which we will later reference by index //
var courseNames = [
  "CSS/React",
  "Java/React",
  "C#/.Net"
];

var courseInfo = [
  "",
  "",
  "",
];

// Create functions that will perform global regular expression searches on the user's survey input values and assign the number of instances of each value to a global variable//
var countA = function(string){
  return string.match(/a/g).length;
};
var countB = function(string){
  return string.match(/b/g).length;
};
var countC = function(string){
  return string.match(/c/g).length;
};

$(document).ready(function() {
  $("#instructions_btn").click(function() {
    $("#instructions").slideToggle("slow");
    console.log("test");
  });

  $("#bootcamp_survey").submit(function(event) {
    var inputIds = ["website", "career", "applications", "microsoft", "education"];
    var frequencies = [];
    var userScore = "";

// Create a loop uses inputIds items to select survey input values and concatenate them to a string representing the user's survey 'score'//

    inputs.forEach(function(input) {
      userScore += $("#" + inputIds).val();
      console.log(userScore);
    });

// Call global counter functions to generate frequencies of each response value type and add those values to an array //
    frequencies.push(countA(userScore), countB(userScore), countC(userScore));
    console.log(frequencies);

// Create conditional output logic based on the most likely response value conditions, relying on the global variables used to store names and descriptions. // 
    if (frequencies[0] >= 3) {
      $("#course_name").text(courseNames[0]);
      $("#course_info").text(courseInfo[0]);

      $("#output").slideToggle("slow");
    } else if (frequencies[1] >= 3) {
      $("#course_name").text(courseNames[1]);
      $("#course_info").text(courseInfo[1]);

      $("#output").slideToggle("slow");
    } else if (frequencies[2] >= 3) {
      $("#course_name").text(courseNames[2]);
      $("#course_info").text(courseInfo[2]);

      $("#output").slideToggle("slow");
    } else {
      if (frequencies[0] === 2 && frequencies[1] === 2) {
        $("#course_name").text(courseNames[0]);
        $("#course_info").text(courseInfo[0]);
        $("#course_name2").text(courseNames[1]);
        $("#course_info2").text(courseInfo[1]);

        $("#output").slideToggle("slow");
        $("#output2").slideToggle("slow");
      } else if (frequencies[1] === 2 && frequencies[2] === 2){
        $("#course_name").text(courseNames[1]);
        $("#course_info").text(courseInfo[1]);
        $("#course_name2").text(courseNames[2]);
        $("#course_info2").text(courseInfo[2]);

        $("#output").slideToggle("slow");
        $("#output2").slideToggle("slow");
      } else {
        $("#course_name").text("We're not sure!")
        $("#course_info").text("Sounds like you've got eclectic tastes. We'd encourage you to reach out to a bootcamp representative, connect with folks in the industry and do some more research to find out what might be the best path for you.");

        $("#output").slideToggle("slow");
      }
    }

    event.preventDefault();
  });
});

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
    var inputs = ["website", "career", "applications", "microsoft", "education"];
    var frequencies = [];
    var userScore = "";

    inputs.forEach(function(input) {
      userScore += $("#" + input).val();
      console.log(userScore);
    });

    frequencies.push(countA(userScore), countB(userScore), countC(userScore));
    console.log(frequencies);

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
      if (frequencies[0] === frequencies[1]) {
        $("#course_name").text(courseNames[0]);
        $("#course_info").text(courseInfo[0]);
        $("#course_name2").text(courseNames[1]);
        $("#course_info2").text(courseInfo[1]);

        $("#output").slideToggle("slow");
        $("#output2").slideToggle("slow");
      } else {
        $("#course_name").text(courseNames[1]);
        $("#course_info").text(courseInfo[1]);
        $("#course_name2").text(courseNames[2]);
        $("#course_info2").text(courseInfo[2]);

        $("#output").slideToggle("slow");
        $("#output2").slideToggle("slow");
      }
    }


    event.preventDefault();
  });
});

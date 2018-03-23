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
  return string.match(/b/g).length
};
var countC = function(string){
  return string.match(/c/g).length
};

$(document).ready(function() {
  $("#instructions_btn").click(function() {
    $("#instructions").slideToggle("slow");
    console.log("test");
  });

  $("#bootcamp_survey").submit(function(event) {
    var userScore = "";

    inputs.forEach(function(input) {
      userScore += $("#" + input).val();
      console.log(userScore);
    });

    $("#output").slideToggle("slow");

    event.preventDefault();
  });
});

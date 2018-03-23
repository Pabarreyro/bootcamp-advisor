var countA = function(string){
  return string.count("a");
};
var countB = function(string){
  return string.count("b");
};
var countC = function(string){
  return string.count("c");
};

$(document).ready(function() {
  $("#bootcampSurvey").submit(function(event) {
    var inputs = ["q1", "q2", "q3", "q4", "q5"];
    var userScore = "";

    inputs.forEach(function(input) {
      userScore += $("#" + input).val();
    });

    $("#story").show();

    event.preventDefault();
  });
});

// Globals: arrays for course names and descriptions; functions for finding and storing survey response value frequencies //

var courseNames = [
  "CSS/React",
  "Java/React",
  "C#/.Net"
];

var courseInfo = [
  "CSS is the language for describing the presentation of Web pages, including colors, layout, fonts, and other stylistic choices. It allows one to adapt the presentation to different types of devices, such as large screens, small screens, and printers. HTML — used for building the structure of the page — and CSS — used for the visual layout — are the two basic languages involved in the building of web pages and web applications.",
  "Java is also a favorite of enterprise companies, but its appeal is broader as well: it's one of the most popular of all programming languages, and it's used in everything from for high-performance processing to building Android user interfaces. Because Java has been very popular for a very long time and is used in so many applications, it is also a very high-demand language. If you're interested in working for an enterprise-level company, as an Android developer, or in high-performance applications, Java could be a good language to learn.",
  "C# is most popular among bigger established businesses, often for building internal software. Because it's been around for a long time and has the backing of Microsoft, it is one of the most in-demand languages in the job market. C# has also been going through a bit of a rebirth lately, with Microsoft open sourcing the language and surrounding platform, porting it to run on Mac and Linux, and incorporating many of the best features of other languages. If you like the idea of working for a larger company on business software, C# is a great choice."
];

var courseLinks = [
  "https://www.epicodus.com/css",
  "https://www.epicodus.com/java",
  "https://www.epicodus.com/c-sharp",
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

  });

  $("#bootcamp_survey").submit(function(event) {
    // Local variables: array with survey response ids; empty array for response value frequencies; userScore consisting of the string "abc" so as to avoid null return values from counter functions //
    var inputs = ["website", "career", "applications", "microsoft", "education"];
    var frequencies = [];
    var userScore = "abc";


    // Looping function: selects ids and concatenates values to userScore strong//
    inputs.forEach(function(input) {
      userScore += $("#" + input).val();

    });

    // Branching logic: pass userScore into counter functions and assign return values to array, then use values to specify conditional outputs //
    frequencies.push(countA(userScore), countB(userScore), countC(userScore));
    

    if (frequencies[0] >= 4) {
      $("#course_name").text(courseNames[0]);
      $("#course_info").text(courseInfo[0]);
      $("#course_link").attr("href",courseLinks[0]);

      $("#output").slideToggle("slow");
    } else if (frequencies[1] >= 4) {
      $("#course_name").text(courseNames[1]);
      $("#course_info").text(courseInfo[1]);
      $("#course_link").attr("href",courseLinks[1]);

      $("#output").slideToggle("slow");
    } else if (frequencies[2] >= 4) {
      $("#course_name").text(courseNames[2]);
      $("#course_info").text(courseInfo[2]);
      $("#course_link").attr("href",courseLinks[2]);

      $("#output").slideToggle("slow");
    } else {
      if (frequencies[0] === 3 && frequencies[1] === 3) {
        $("#course_name").text(courseNames[0]);
        $("#course_info").text(courseInfo[0]);
        $("#course_link").attr("href",courseLinks[0]);
        $("#course_name2").text(courseNames[1]);
        $("#course_info2").text(courseInfo[1]);
        $("#course_link2").attr("href",courseLinks[1]);

        $("#output").slideToggle("slow");
        $("#output_conjunction").slideToggle("slow");
        $("#output2").slideToggle("slow");
      } else if (frequencies[1] === 3 && frequencies[2] === 3){
        $("#course_name").text(courseNames[1]);
        $("#course_info").text(courseInfo[1]);
        $("#course_link").attr("href",courseLinks[1]);
        $("#course_name2").text(courseNames[2]);
        $("#course_info2").text(courseInfo[2]);
        $("#course_link2").attr("href",courseLinks[2]);

        $("#output").slideToggle("slow");
        $("#output_conjunction").slideToggle("slow");
        $("#output2").slideToggle("slow");
      } else {
        $("#course_name").text("We're not sure!");
        $("#course_info").text("Sounds like you've got eclectic tastes. We'd encourage you to reach out to a bootcamp representative, connect with folks in the industry and do some more research to find out what might be the best path for you.");

        $("#output").slideToggle("slow");
      }
    }

    event.preventDefault();
  });
});

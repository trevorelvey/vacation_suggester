$(document).ready(function() {
  $("form#vacation").submit(function(event) {
    $("img").hide();
    var tempVariable = $("select#temp").val();
    var cityVariable = $("select#city").val();
    var forestVariable = $("select#forest").val();
    var countryVariable = $("select#country").val();
    var languageVariable = $("select#language").val();

    if (tempVariable === "hot" && cityVariable === "culture" && forestVariable === "trees" && countryVariable === "domestic" && languageVariable === "english") {
      result = "President Snow";
      $("#snow").show();

    } else if (tempVariable === "hot") {
      result = "Loki";
    } if (result === "Loki") {
      $("#loki").show();

    } else if (humorVariable === "pro-humor" && capeVariable === "anti-cape") {
      result = "the Joker";
      $("#joker").show();

    } else if (humorVariable === "anti-humor" && capeVariable === "pro-cape") {
        result = "Darth Vader";
        $("#vader").show();
    }
    $("#position").text(result);
    $("#result").show();


    event.preventDefault();
  });

});

$(document).ready(function() {
  $("form#vacation").submit(function(event) {
    $("img").hide();
    var tempVariable = $("select#temp").val();
    var cityVariable = $("select#city").val();
    var forestVariable = $("select#forest").val();
    var countryVariable = $("select#country").val();
    var languageVariable = $("select#language").val();

// Option 1
    if (tempVariable === "hot" && cityVariable === "culture" && forestVariable === "trees" && countryVariable === "abroad" && languageVariable === "foreign") {
      result = "You should go to Bogota, Colombia!";
      $("#snow").show();

// Option 2
    } else if (tempVariable === "hot" && cityVariable === "culture" && forestVariable === "trees" && countryVariable === "abroad" && languageVariable === "english") {
      result = "You should go to Belize City, Belize!!!";
      $("#snow").show();

// Option 3
    } else if (tempVariable === "hot" && cityVariable === "culture" && forestVariable === "trees" && countryVariable === "domestic" && languageVariable === "foreign") {
      result = "Nowhere like this in the States, but you can probably find some Spanish-speakers in Miami, Florida!!!";
      $("#snow").show();

// Option 4
    } else if (tempVariable === "hot" && cityVariable === "culture" && forestVariable === "trees" && countryVariable === "domestic" && languageVariable === "english") {
      result = "You should go to New Orleans, Louisiana!!!";
      $("#snow").show();

// Option 5
    } else if (tempVariable === "hot" && cityVariable === "adventure" && forestVariable === "trees" && countryVariable === "abroad" && languageVariable === "foreign") {
      result = "You should go to The Amazon!!!";
      $("#snow").show();

// Option 6
    } else if (tempVariable === "hot" && cityVariable === "adventure" && forestVariable === "trees" && countryVariable === "abroad" && languageVariable === "english") {
      result = "You should go to British Virgin Islands!!!";
      $("#snow").show();

// Option 7
    } else if (tempVariable === "hot" && cityVariable === "adventure" && forestVariable === "trees" && countryVariable === "domestic" && languageVariable === "foreign") {
      result = "You should go to Puerto Rico!!!";
      $("#snow").show();

// Option 8
    } else if (tempVariable === "hot" && cityVariable === "adventure" && forestVariable === "trees" && countryVariable === "domestic" && languageVariable === "english") {
      result = "You should go to Hawaii!!!";
      $("#snow").show();

// Option 9
    } else if (tempVariable === "hot" && cityVariable === "culture" && forestVariable === "barren" && countryVariable === "abroad" && languageVariable === "foreign") {
      result = "You should go to Marrakesh, Morocco!!!";
      $("#snow").show();

// Option 10
    } else if (tempVariable === "hot" && cityVariable === "culture" && forestVariable === "barren" && countryVariable === "abroad" && languageVariable === "english") {
      result = "You should go to Sydney, Australia!!!";
      $("#snow").show();

// Option 11
    } else if (tempVariable === "hot" && cityVariable === "culture" && forestVariable === "barren" && countryVariable === "domestic" && languageVariable === "foreign") {
      result = "Nowhere quite like this in the States, but you can probably find some Spanish-speakers in Phoenix, Arizona!!!";
      $("#snow").show();

// Option 12
    } else if (tempVariable === "hot" && cityVariable === "culture" && forestVariable === "barren" && countryVariable === "domestic" && languageVariable === "english") {
      result = "You should go to Los Angeles, California!!!";
      $("#snow").show();

// Option 13
    } else if (tempVariable === "hot" && cityVariable === "adventure" && forestVariable === "barren" && countryVariable === "abroad" && languageVariable === "foreign") {
      result = "You should go to the Sahara Desert!!!";
      $("#snow").show();

// Option 14
    } else if (tempVariable === "hot" && cityVariable === "adventure" && forestVariable === "barren" && countryVariable === "abroad" && languageVariable === "english") {
      result = "You should go to The Australian Outback!!!";
      $("#snow").show();

// Option 15
    } else if (tempVariable === "hot" && cityVariable === "adventure" && forestVariable === "barren" && countryVariable === "domestic" && languageVariable === "foreign") {
      result = "Nowhere quite like that here, but you can probably find some places to talk to nobody at all in Nevada!!!";
      $("#snow").show();

// Option 16
    } else if (tempVariable === "hot" && cityVariable === "adventure" && forestVariable === "barren" && countryVariable === "domestic" && languageVariable === "english") {
      result = "You should go to Arizona!!!";
      $("#snow").show();

// Option 17
    } else if (tempVariable === "cold" && cityVariable === "culture" && forestVariable === "trees" && countryVariable === "abroad" && languageVariable === "foreign") {
      result = "You should go to Berlin, Germany!!!";
      $("#snow").show();

// Option 18
    } else if (tempVariable === "cold" && cityVariable === "culture" && forestVariable === "trees" && countryVariable === "abroad" && languageVariable === "english") {
      result = "You should go to Dublin, Ireland!!!";
      $("#snow").show();

// Option 19
    } else if (tempVariable === "cold" && cityVariable === "culture" && forestVariable === "trees" && countryVariable === "domestic" && languageVariable === "foreign") {
      result = "Nothing quite like that around, but maybe Montreal, Canada is close enough?!";
      $("#snow").show();

// Option 20
    } else if (tempVariable === "cold" && cityVariable === "culture" && forestVariable === "forest" && countryVariable === "domestic" && languageVariable === "english") {
      result = "You should go to Minneapolis, Minnesota!!!";
      $("#snow").show();

    }
    $("#position").text(result);
    $("#result").show();


    event.preventDefault();
  });

});

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
      $("#britishcolumbia").show();

// Option 2
    } else if (tempVariable === "hot" && cityVariable === "culture" && forestVariable === "trees" && countryVariable === "abroad" && languageVariable === "english") {
      result = "You should go to Belize City, Belize!!!";
      $("#belizecity").show();

// Option 3
    } else if (tempVariable === "hot" && cityVariable === "culture" && forestVariable === "trees" && countryVariable === "domestic" && languageVariable === "foreign") {
      result = "Nowhere like this in the States, but you can probably find some Spanish-speakers in Miami, Florida!!!";
      $("#miami").show();

// Option 4
    } else if (tempVariable === "hot" && cityVariable === "culture" && forestVariable === "trees" && countryVariable === "domestic" && languageVariable === "english") {
      result = "You should go to New Orleans, Louisiana!!!";
      $("#neworleans").show();

// Option 5
    } else if (tempVariable === "hot" && cityVariable === "adventure" && forestVariable === "trees" && countryVariable === "abroad" && languageVariable === "foreign") {
      result = "You should go to The Amazon!!!";
      $("#amazon").show();

// Option 6
    } else if (tempVariable === "hot" && cityVariable === "adventure" && forestVariable === "trees" && countryVariable === "abroad" && languageVariable === "english") {
      result = "You should go to British Virgin Islands!!!";
      $("#virginislands").show();

// Option 7
    } else if (tempVariable === "hot" && cityVariable === "adventure" && forestVariable === "trees" && countryVariable === "domestic" && languageVariable === "foreign") {
      result = "You should go to Puerto Rico!!!";
      $("#puertorico").show();

// Option 8
    } else if (tempVariable === "hot" && cityVariable === "adventure" && forestVariable === "trees" && countryVariable === "domestic" && languageVariable === "english") {
      result = "You should go to Hawaii!!!";
      $("#hawaii").show();

// Option 9
    } else if (tempVariable === "hot" && cityVariable === "culture" && forestVariable === "barren" && countryVariable === "abroad" && languageVariable === "foreign") {
      result = "You should go to Marrakesh, Morocco!!!";
      $("#marrakesh").show();

// Option 10
    } else if (tempVariable === "hot" && cityVariable === "culture" && forestVariable === "barren" && countryVariable === "abroad" && languageVariable === "english") {
      result = "You should go to Sydney, Australia!!!";
      $("#sydney").show();

// Option 11
    } else if (tempVariable === "hot" && cityVariable === "culture" && forestVariable === "barren" && countryVariable === "domestic" && languageVariable === "foreign") {
      result = "Nowhere quite like this in the States, but you can probably find some Spanish-speakers in Phoenix, Arizona!!!";
      $("#phoenix").show();

// Option 12
    } else if (tempVariable === "hot" && cityVariable === "culture" && forestVariable === "barren" && countryVariable === "domestic" && languageVariable === "english") {
      result = "You should go to Los Angeles, California!!!";
      $("#losangeles").show();

// Option 13
    } else if (tempVariable === "hot" && cityVariable === "adventure" && forestVariable === "barren" && countryVariable === "abroad" && languageVariable === "foreign") {
      result = "You should go to the Sahara Desert!!!";
      $("#sahara").show();

// Option 14
    } else if (tempVariable === "hot" && cityVariable === "adventure" && forestVariable === "barren" && countryVariable === "abroad" && languageVariable === "english") {
      result = "You should go to The Australian Outback!!!";
      $("#outback").show();

// Option 15
    } else if (tempVariable === "hot" && cityVariable === "adventure" && forestVariable === "barren" && countryVariable === "domestic" && languageVariable === "foreign") {
      result = "Nowhere quite like that here, but you can probably find some places to talk to nobody at all in Nevada!!!";
      $("#nevada").show();

// Option 16
    } else if (tempVariable === "hot" && cityVariable === "adventure" && forestVariable === "barren" && countryVariable === "domestic" && languageVariable === "english") {
      result = "You should go to Arizona!!!";
      $("#arizona").show();

// Option 17
    } else if (tempVariable === "cold" && cityVariable === "culture" && forestVariable === "trees" && countryVariable === "abroad" && languageVariable === "foreign") {
      result = "You should go to Berlin, Germany!!!";
      $("#berlin").show();

// Option 18
    } else if (tempVariable === "cold" && cityVariable === "culture" && forestVariable === "trees" && countryVariable === "abroad" && languageVariable === "english") {
      result = "You should go to Dublin, Ireland!!!";
      $("#dublin").show();

// Option 19
    } else if (tempVariable === "cold" && cityVariable === "culture" && forestVariable === "trees" && countryVariable === "domestic" && languageVariable === "foreign") {
      result = "Nothing quite like that around, but maybe Montreal, Canada is close enough?!";
      $("#montreal").show();

// Option 20
    } else if (tempVariable === "cold" && cityVariable === "culture" && forestVariable === "trees" && countryVariable === "domestic" && languageVariable === "english") {
      result = "You should go to Minneapolis, Minnesota!!!";
      $("#minneapolis").show();

// Option 21
    } else if (tempVariable === "cold" && cityVariable === "adventure" && forestVariable === "trees" && countryVariable === "abroad" && languageVariable === "foreign") {
      result = "You should go to Patagonia!!!";
      $("#patagonia").show();

// Option 22
    } else if (tempVariable === "cold" && cityVariable === "adventure" && forestVariable === "trees" && countryVariable === "abroad" && languageVariable === "english") {
      result = "You should go to British Columbia, Canada!!!";
      $("#britishcolumbia").show();

// Option 23
    } else if (tempVariable === "cold" && cityVariable === "adventure" && forestVariable === "trees" && countryVariable === "domestic" && languageVariable === "foreign") {
      result = "Not a lot of options for that, but maybe Quebec is good enough?";
      $("#quebec").show();

// Option 24
    } else if (tempVariable === "cold" && cityVariable === "adventure" && forestVariable === "trees" && countryVariable === "domestic" && languageVariable === "english") {
      result = "You should go to Glacier National Park, Montana!";
      $("#glacier").show();

// Option 25
    } else if (tempVariable === "cold" && cityVariable === "culture" && forestVariable === "barren" && countryVariable === "abroad" && languageVariable === "foreign") {
      result = "You should go to Moscow, Russia!";
      $("#moscow").show();

// Option 26
    } else if (tempVariable === "cold" && cityVariable === "culture" && forestVariable === "barren" && countryVariable === "abroad" && languageVariable === "english") {
      result = "Not too sure about this one, but maybe Edinburgh, Scotland?";
      $("#edinburgh").show();

// Option 27
    } else if (tempVariable === "cold" && cityVariable === "culture" && forestVariable === "barren" && countryVariable === "domestic" && languageVariable === "foreign") {
      result = "I've got nothing for you here, may I suggest Netflix?";
      $("#netflix").show();

// Option 28
    } else if (tempVariable === "cold" && cityVariable === "culture" && forestVariable === "barren" && countryVariable === "domestic" && languageVariable === "english") {
      result = "Not really anything for you here, American cities don't seem to occur where it's cold and desolate. May I suggest Anchorage, Alaska?";
      $("#anchorage").show();

// Option 29
    } else if (tempVariable === "cold" && cityVariable === "adventure" && forestVariable === "barren" && countryVariable === "abroad" && languageVariable === "foreign") {
      result = "You should go to Siberia!";
      $("#siberia").show();

// Option 30
    } else if (tempVariable === "cold" && cityVariable === "adventure" && forestVariable === "barren" && countryVariable === "abroad" && languageVariable === "english") {
      result = "You should go to Antarctica!";
      $("#antarctica").show();

// Option 31
    } else if (tempVariable === "cold" && cityVariable === "adventure" && forestVariable === "barren" && countryVariable === "domestic" && languageVariable === "foreign") {
      result = "I've got nothing for you here, may I suggest Netflix?";
      $("#netflix").show();

// Option 32
    } else if (tempVariable === "cold" && cityVariable === "adventure" && forestVariable === "barren" && countryVariable === "domestic" && languageVariable === "english") {
      result = "You should go to Northern Alaska!";
      $("#alaska").show();

    }
    $("#position").text(result);
    $("#result").show();


    event.preventDefault();
  });

});

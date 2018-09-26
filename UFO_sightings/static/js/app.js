// from data.js
var sightings = data;


var filter_btn = d3.select("#filter-btn")

console.log(sightings);

filter_btn.on("click", function() {

    d3.event.preventDefault();
  
    var inputElement = d3.select("#datetime");

    var inputValue = inputElement.property("value");


    var ufo_by_date = sightings.filter(sighting => sighting.datetime === inputValue);
    

    ufo_by_date.forEach(function(object) {
        
        tableBod = d3.select("tbody");
        row = tableBod.append("tr");
        row.append("td").text(object.datetime);
        row.append("td").text(object.city.toUpperCase());
        row.append("td").text(object.state.toUpperCase());
        row.append("td").text(object.country.toUpperCase());
        row.append("td").text(object.shape);
        row.append("td").text(object.durationMinutes);
        row.append("td").text(object.comments);
    });
});

var adv_filter = d3.select("#adv-filter-btn");

adv_filter.on("click", function() {

    d3.event.preventDefault();

    var inputElement_Date = d3.select("#datetime");

    var inputDate = inputElement_Date.property("value");

    var inputElement_City = d3.select("#city");

    var inputCity = inputElement_City.property("value");

    var inputElement_state = d3.select("#state");

    var inputState = inputElement_state.property("value");

    var inputElement_country = d3.select("#country");

    var inputCountry = inputElement_country.property("value");

    var inputElement_shape = d3.select("#shape");

    var inputShape = inputElement_shape.property("value");


    var ufo_date_city = sightings.filter(sighting => sighting.datetime == inputDate && sighting.city==inputCity || sighting.datetime == inputDate &&
    sighting.state == inputState || sighting.datetime == inputDate && sighting.country == inputCountry || sighting.datetime == inputDate && 
    sighting.shape == inputShape || sighting.city == inputCity && sighting.state == inputState || sighting.city == inputCity && 
    sighting.country == inputCountry || sighting.city == inputCity && sighting.shape == inputShape || sighting.state == inputState && 
    sighting.country == inputCountry || sighting.state == inputState && sighting.shape == inputShape || sighting.country == inputCountry &&
    sighting.shape == inputShape);

    ufo_date_city.forEach(function(object) {

        tableBod = d3.select("tbody");
        row = tableBod.append("tr");
        row.append("td").text(object.datetime);
        row.append("td").text(object.city.toUpperCase());
        row.append("td").text(object.state.toUpperCase());
        row.append("td").text(object.country.toUpperCase());
        row.append("td").text(object.shape);
        row.append("td").text(object.durationMinutes);
        row.append("td").text(object.comments);

    });
}
);

var clear_data = d3.select("#clear-btn");

clear_data.on("click", function() {
    
    d3.event.preventDefault();

    d3.selectAll("td").remove();
    document.getElementById('datetime').value = '';
    document.getElementById('city').value = '';
    document.getElementById('state').value = '';

});
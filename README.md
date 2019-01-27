# Creating Dynamic Tables with Javascript

![nasa](images/nasa.jpg)
## Background

A basic HTML page with Javascript, D3.js and CSS with a dynamic table that allows users to filter the table data for specific values. The data is mock data of UFO sightings used purely for demonstration of javascript capabilities. 

### Automatic Table and Date Search

* A basic HTML page uses the UFO dataset provided in the form of an array of JavaScript objects, appends it to a web page table and then adds new rows of data for each UFO sighting.

  * Data columns include `date/time`, `city`, `state`, `country`, `shape`, and `comment`.

* Uses a date form for the HTML document and JavaScript code that listens for events and searches through the `date/time` column to find rows that match user input.

### Multiple Search Categories 
* Using multiple `input` tags and/or select dropdowns, JavaScript code allows user to set multiple filters and search for UFO sightings using the following criteria based on the table columns:

  1. `date/time`
  2. `city`
  3. `state`
  4. `country`
  5. `shape`

- - -

### Dataset

* [UFO Sightings Data](UFO_sightings/static/js/data.js)



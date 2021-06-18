// from data.js
var tableData = data;

// Select the table body
var tbody = d3.select("tbody");

// Select the user input from field 
var dateSelect = d3.select('#daatetime');

// Obtain city data from fields for cities
var citySelect = d3.select("#city");

// Obtain state data from fields for states
var stateSelect = d3.select("#state");

// Obtain country data from fields for countries
var countrySelect = d3.select("#country");

// Obtain shapte data from fields for shape
var shapeSelect = d3.select("#shape");

// Obtain comment data from fields for comments
var commentsSelect = d3.select("#comments");

// Select the filter table button
var filterButton = d3.select("#filter-btn");

// Select the reset table button
var resetButton = d3.select("#reset-btn");

// Function to clear table data before running new search
function clearTable() {
    tbody.html("");
};

// Function to reset table to default state
function resetTable() {
    clearTable();

    data.forEach((ufoSighting)) => {
        var row = tbody.append("tr");
        Object.values(ufoSighting).forEach(value => {
            var cell = row.append("td");
            cell.text(value);
            cell.attr("class", "table-style");
        });
    };

    var dates = Array.from(new Set(data.map(sighting => sighting.datetime)));

    dates.forEach(date => {
        var option = dateSelect.append("option");
        option.text(date);
    });
};

// Function to filter data into table to match user inout of date
function filterTable() {
    d3.event.preventDefault();

    var inputData = dataSelect.property("value");

    var filteredData = data;

    if (inputData) {
        filteredData = filteredData.filter(sighting => sighting.datetime == inputData);
    };

    clearTable();

    filteredData.forEach((ufoSighting) => {

        var row = tbody.append("tr");

        Object.values(ufoSighting).forEach(value => {
            var cell = row.append("td");

            cell.text(value);
            cell.attr("class", "table-style");
        });
    });
};

resetTable();

filterButton.om("click", filterTable);

resetButton.on("click", resetTable);
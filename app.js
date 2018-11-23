// from data.js
var tableData = data;
var tbody = d3.select("tbody");
var filterTable = d3.select("#filter-btn");

// YOUR CODE HERE!
console.log(data);

 // Use d3 to update each cell's text with
 data.forEach(function(UFO) {
   console.log(UFO);
   var row = tbody.append("tr");
   Object.entries(UFO).forEach(function([key, value]) {
     console.log(key, value);
     // Append a cell to the row for each value
     // in the UFO object
     var cell = tbody.append("td");
     cell.text(value);
   });
 });

 filterTable.on("click", function() {

     // Prevent the page from refreshing
     d3.event.preventDefault();

     // Select the input element and get the raw HTML node
     var inputElement = d3.select("#datetime");

     // Get the value property of the input element
     var inputValue = inputElement.property("value");

     console.log(inputValue);
     console.log(tableData);

     var filteredData = tableData.filter(alien => alien.datetime === inputValue);

     console.log(filteredData);
 });
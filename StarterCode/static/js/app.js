//Week 14 Homework - Introduction to Javascript
//Code takes data in data.js on UFO sightings
//Displays in table in html and allows user to filter data based on date, city, state and/or shape.
//Shape is set in a pull down menu.  The values are found by creating an array of all the unique shapes.


//Collecting data from data.js
var tableData = data;

console.log("is this working");//verify connection to html code

//initial filling in table no filter
fullTable();
//getting number of elements in table
var oRows = document.getElementById('ufo-table').getElementsByTagName('tr');
var iRowCount = oRows.length;

//writing number of elements to the table
var numSightings = d3.select("#num_sight");
numSightings.text(`Sightnings: ${iRowCount-1}`);

//writing to console to help trouble shoot 
console.log('Your table has ' + iRowCount + ' rows.');

//get list of unique values for shape
//this list is used to populate a drop down list of shapes
var uniqueShape = [... new Set(tableData.map(object => object.shape))];
//console.log(uniqueShape);
//Function populated pull down with array contents
selectPopMenu(uniqueShape);


var button = d3.select("#filter-btn");//check button
button.on("click", dataFilter);

var resetButton = d3.select("#reset-btn");
resetButton.on("click", fullTable);

//*********************************************************************************/
//***************  Area below for Functions used in Code           ****************/

//*********************************************************************************/
//Function#1 -  finds lenght of table on web page
function tableLength() {
  var oRows = document.getElementById('ufo-table').getElementsByTagName('tr');
  var iRowCount = oRows.length;
  return iRowCount;
};

//*********************************************************************************/
//Function#2 - filters data with inputted filters
function dataFilter() {
  d3.event.preventDefault();//prevent page from refreshing and clearing changes
  
  //finding initial length of table and sending to console for trouble shooting
  rowCount = tableLength();
  console.log(`Table Length at start: ${rowCount}`);

  //clearing any contents that already exist so don't add to existing table
  for (i=0; i<rowCount; i++) {
    document.getElementById('ufo-table').deleteRow(0);//delete first row and repeat for number of rows in table
  };

  //finding table length after clearing - should be 0 and show in console for troubleshooting
  rowCount = tableLength();
  console.log(`Table Length after clean: ${rowCount}`);
  
  //Getting date from filter box 
  var inputElement = d3.select("#datetime");
  var inputDate = inputElement.property("value");
  //console.log(inputDate);

  //Getting the city from the filter box
  var inputElement = d3.select("#city");
  var inputCity = (inputElement.property("value")).toLowerCase();
  //console.log(inputCity);

  //Getting the state from teh filter box
  var inputElement = d3.select("#state");
  var inputState = (inputElement.property("value")).toLowerCase();
  //console.log(inputState);

  //Getting the selected shape from the pull down.  If value is -None- then none selected
  var dropdownMenu = d3.selectAll("#selectOption").node();
  var inputShape = dropdownMenu.value;
  if (inputShape === "-None-") {
    inputShape = "";
  };

  //filter data based on date field.  If no value then skip filtering but assign filterData value to tableData
  if (inputDate != "") {
    var filterData = tableData.filter(object => object.datetime === inputDate);
    //console.log(filterData); //show in console filtered data
  }
  else {
    var filterData = tableData;
  };

  //filter data based on inputCity
  if (inputCity != "") {
    filterData = filterData.filter(object => object.city === inputCity);
    //console.log(filterData); //show in console filtered data
  };

  //Filter data based on state
  if (inputState != "") {
    filterData = filterData.filter(object => object.state === inputState);
    //console.log(filterData); //show in console filtered data
  };

  //filter data based on shape
  if (inputShape != "") {
    filterData = filterData.filter(object => object.shape === inputShape);
    //console.log(filterData); //show in console filtered data
  };

  //filling in table - was cleared earlier in function
  //replacing table headings that were cleared
  var tableHeading = ["Date", "City", "State", "Country", "Shape", "Duration", "Comments"];

  var thead = d3.select("thead");
  var row = thead.append("tr");
  for (i = 0; i<tableHeading.length; i++) {
    var cell = row.append("th");
    cell.text(tableHeading[i]);
  };

  //putting data into table
  var tbody = d3.select("tbody");
    
  filterData.forEach((object) => {
    var row = tbody.append("tr");
    Object.entries(object).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

  //Getting number of objects in table and writing to screen
  rowCount = tableLength();
  console.log(`Table Length at End: ${rowCount}`);
  var numSightings = d3.select("#num_sight");
  numSightings.text(`Sightnings: ${rowCount-1}`);
};

//*********************************************************************************/
//Function 3 - fully populate table
function fullTable() {
  
  //clears form back to default filter values
  document.getElementById("form").reset();
  rowCount = tableLength();
  //clearing any contents that already exist so don't add to existing table
  for (i=0; i<rowCount; i++) {
    document.getElementById('ufo-table').deleteRow(0);//delete first row and repeat for number of rows in table
  };
  //Writing table headings that are removed when clearing the table.
  var tableHeading = ["Date", "City", "State", "Country", "Shape", "Duration", "Comments"];
  var thead = d3.select("thead");
  var row = thead.append("tr");
  for (i = 0; i<tableHeading.length; i++) {
    var cell = row.append("th");
    cell.text(tableHeading[i]);
  };
  //Writing table data - create row, then write each data (td) from object in array
  var tbody = d3.select("tbody");
  tableData.forEach((object) => {
    var row = tbody.append("tr");
    Object.entries(object).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
  //Getting number of objects in table and writing to screen
  rowCount = tableLength();
  var numSightings = d3.select("#num_sight");
  numSightings.text(`Sightnings: ${rowCount-1}`);
};

//*********************************************************************************/
//Function 4 - populate shape pull down
function selectPopMenu(arrayList) {

  //select the "select" callout in html
  var selectMenu = d3.select("select");
  //append option under select
  var row = selectMenu.append("option");
  //filling text field for option
  row.text("-None-");
  for (i = 0; i<arrayList.length; i++) {
    var row = selectMenu.append("option");
    //populate list value for select menue from arrayList passed to function
    row.text(arrayList[i]);
        };


};


  



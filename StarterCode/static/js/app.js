// Get a reference to the table body
//var tbody = d3.select("tbody");

// from data.js
var tableData = data;
    console.log("is this working");//verify connection to html code

//initial filling in table no filter
var tbody = d3.select("tbody");
tableData.forEach((object) => {
  var row = tbody.append("tr");
  Object.entries(object).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });
});


var oRows = document.getElementById('ufo-table').getElementsByTagName('tr');
var iRowCount = oRows.length;

console.log('Your table has ' + iRowCount + ' rows.');
//var inputDate = d3.select("#form"); //check form
//inputDate.on("submit",dateFilter); //if form submitted then go to dateFilter

var button = d3.select("#filter-btn");//check button
button.on("click", dateFilter);

//Function below finds lenght of table on web page
function tableLength() {
  var oRows = document.getElementById('ufo-table').getElementsByTagName('tr');
  var iRowCount = oRows.length;
  return iRowCount;
};


function dateFilter() {
  d3.event.preventDefault();
  
  //finding initial length of table and sending to console for trouble shooting
  rowCount = tableLength();
  console.log(`Table Length at start: ${rowCount}`);
  //clearing any contents that already exist so don't add to existing table
  for (i=0; i<rowCount; i++) {
    document.getElementById('ufo-table').deleteRow(0);//delete first row and repeat for number of rows in table
  };
  //finding table length after clearing - should be 0 and show in console
  rowCount = tableLength();
  console.log(`Table Length after clean: ${rowCount}`);
  
  //Getting date and putting on console
  var inputElement = d3.select("#datetime");
  var inputDate = inputElement.property("value");
  console.log(inputDate);

  var inputElement = d3.select("#city");
  var inputCity = inputElement.property("value");
  console.log(inputCity);

  var inputElement = d3.select("#state");
  var inputState = inputElement.property("value");
  console.log(inputState);


  //filter data based on date field
  if (inputDate != "") {
    filterData = tableData.filter(object => object.datetime === inputDate);
    console.log(filterData); //show in console filtered data
  }
  else {
    filterData = tableData;
  };
  if (inputCity != "") {
    filterData = filterData.filter(object => object.city === inputCity);
    console.log(filterData); //show in console filtered data
  };

  
  // filterData = tableData.filter(object => object.datetime === inputDate);
  // console.log(filterData); //show in console filtered data
  
  //filling in table

  var tableHeading = ["Date", "City", "State", "Country", "Shape", "Duration", "Comments"];

  var thead = d3.select("thead");
  var row = thead.append("tr");
  for (i = 0; i<tableHeading.length; i++) {
    var cell = row.append("th");
    cell.text(tableHeading[i]);

  };

  var tbody = d3.select("tbody");
    
  filterData.forEach((object) => {
    var row = tbody.append("tr");
    Object.entries(object).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
  rowCount = tableLength();
  console.log(`Table Length at End: ${rowCount}`);

};

// const uniqueDate = [... new Set(tableData.map(object => object.datetime))]
// console.log(uniqueDate)


// var inputDate = d3.select("#form");

// inputDate.on("submit",dateFilter);
// console.log(`Date says ${inputDate}`);

// var inputElement = d3.select("#datetime");





//testing using filter function
    // filterData = tableData.filter(object => object.state === "ar");
    // console.log(filterData);
// getting unique listing of values

//writing entire dataset to table
// tableData.forEach((object) => {
//     var row = tbody.append("tr");
//     Object.entries(object).forEach(([key, value]) => {
//       var cell = row.append("td");
//       cell.text(value);
//     });
//   });
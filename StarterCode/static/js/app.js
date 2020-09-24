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

function tableLength() {
  var oRows = document.getElementById('ufo-table').getElementsByTagName('tr');
  var iRowCount = oRows.length;
  return iRowCount;
};

function dateFilter() {
  d3.event.preventDefault();
  
  rowCount = tableLength();
  console.log(`Table Length at start: ${rowCount}`);
  for (i=0; i<rowCount; i++) {
    document.getElementById('ufo-table').deleteRow(0);
  };
  rowCount = tableLength();
  console.log(`Table Length after clean: ${rowCount}`);
  
  console.log("went to function");
  var inputElement = d3.select("#datetime");
  var inputValue = inputElement.property("value");
  console.log(inputValue);

  //filter data based on input field
  filterData = tableData.filter(object => object.datetime === inputValue);
  console.log(filterData); //show in console filtered data
  
  //filling in table
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
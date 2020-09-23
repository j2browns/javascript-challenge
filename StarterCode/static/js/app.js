// Get a reference to the table body
//var tbody = d3.select("tbody");

// from data.js
var tableData = data;
    console.log("is this working");//verify connection to html code
  
var inputDate = d3.select("#form"); //check form
inputDate.on("submit",dateFilter); //if form submitted then go to dateFilter

function dateFilter() {
  d3.event.preventDefault();
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
// Get a reference to the table body
var tbody = d3.select("tbody");

// from data.js
var tableData = data;
    console.log("is this working");
  //  console.log(tableData[0]);
    console.log(Object.keys(tableData[0]));
 //testing using forEach loop to make certain have data transferring and can filter - show on console  
    // tableData.forEach(function(object) {
    //     test = object.state
    //     if (test.toLowerCase() === "nm") {
    //         console.log(object);
    //     };
    // });

//testing using filter function
    filterData = tableData.filter(object => object.state === "ar");
    console.log(filterData);
// getting unique listing of values

const uniqueDate = [... new Set(tableData.map(object => object.datetime))]
console.log(uniqueDate)

//writing entire dataset to table
tableData.forEach((object) => {
    var row = tbody.append("tr");
    Object.entries(object).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
// Get a reference to the table body
var tbody = d3.select("tbody");

// from data.js
var tableData = data;
    console.log("is this working");
  //  console.log(tableData[0]);
    console.log(Object.keys(tableData[0]));
 //testing using forEach loop   
    tableData.forEach(function(object) {
        test = object.state
        if (test.toLowerCase() === "nm") {
            console.log(object);
        };
    });

//testing using filter function
    filterData = tableData.filter(object => object.state === "ar");
    console.log(filterData);
// getting unique listing of values

const uniqueDate = [... new Set(tableData.map(object => object.datetime))]
console.log(uniqueDate)

// // Step 2:  Use d3 to append one table row `tr` for each weather report object
// // Don't worry about adding cells or text yet, just try appending the `tr` elements.
//  tableData.forEach(function(oject) {
//     var row = tbody.append("tr");
//     });

tableData.forEach((object) => {
    var row = tbody.append("tr");
    Object.entries(object).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
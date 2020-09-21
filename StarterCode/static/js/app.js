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

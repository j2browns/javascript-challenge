# Week 14: javascript-challenge

This project is to take a data list that is provided in data.js and display the data in a table on a website.  The javascript code that does the heavy lifting is contained in app.js.  The website should allow the user to filter the data in the table (by a minimum by date per the assignment instructions).

In this project I did the following:

1. The javascript code displays the data in a table by using d3 to append data into the existing table area on the html site.
2. The user is able to filter based on date, city, state, and shape.
3. The shape filtering is performed via a select box.  The values in the select box were obtained by finding all the unique values in the data set using the following code: 
`var uniqueShape = [... new Set(tableData.map(object => object.shape))];` where tableData is the original data list.
4. Two buttons are included - one for filtering data (using the set criteria) and also for show all data.
5. The code checks the number of rows in the table (excluding the header) and shows the number of sightings in the table (above the buttons in the form).
6. Also it was discovered that whenever the table was updated it was appending the new data to the end of the table. It was therefore necessary to clear the table before re-writing the table.

In addition to the above additions to the code the background image was also changed to a picture of the aliens landing on earth (Mars Attacks!).

To run the code you should have to run the index.html file in live server from visual code studio.

let body  = document.body;      // making the body an elemt
let tableData = [];             // creating an array to store data objects
let data;                       // data objects
let count = 0;

// inserting data into the array
for(var i = 0; i <10; i++){
    insertData();
}

// array to store the headers
let headers = [
    "Name",
    "ID",
    "Assignment 1",
    "Assignment 2",
    "Assignment 3",
    "Assignment 4",
    "Assignment 5",
    "Average [%]"
];


// adding the headers to a header row dynamically
let table = document.createElement("table");
let headerRow = document.createElement("tr");
let row = document.createElement("tr");
body.append(table);                                 // adding the table to the body
table.append(headerRow);                            // adding the header row to the table
headers.forEach(h => {
    let header = document.createElement("th");
    header.innerText = h;
    headerRow.append(header);                       // adding the header to the header row
});



// creating the rest of the HTML Table using the array of data objects
tableData.forEach(tdata => {
    let row = document.createElement("tr");         // creating a row
    
    let cell1 = document.createElement("td");       // creating a cell
    cell1.innerText = tdata.name;                   // putting array value into cell
    cell1.className = "names";                      // applying a class
    row.append(cell1);                              // adding that cell to the row


    let cell2 = document.createElement("td");
    cell2.innerText = tdata.id;
    cell2.className = "info";
    row.append(cell2);

    let cell3 = document.createElement("td");
    cell3.innerText = tdata.assignment1;
    cell3.className = "assignment";
    row.append(cell3);

    let cell4 = document.createElement("td");
    cell4.innerText = tdata.assignment2;
    cell4.className = "assignment";
    row.append(cell4);

    let cell5 = document.createElement("td");
    cell5.innerText = tdata.assignment3;
    cell5.className = "assignment";
    row.append(cell5);

    let cell6 = document.createElement("td");
    cell6.innerText = tdata.assignment4;
    cell6.className = "assignment";
    row.append(cell6);

    let cell7 = document.createElement("td");
    cell7.innerText = tdata.assignment5;
    cell7.className = "a#ssignment";
    row.append(cell7);

    let cell8 = document.createElement("td");
    cell8.innerText = tdata.ave;
    cell8.className = "average";
    row.append(cell8);

    table.append(row);                              // adding row full of cells to table
});


// function to count the number of unsubmitted assignments
function countAss(){
    count = 0;
    let cellsCount = document.querySelectorAll(".assignment");
    cellsCount.forEach((c) =>{
    if(c.innerText == "-") count++;
    });
}


// Creating a div to store the unsubmitted assignment information
let counterBtn = document.createElement("div");
counterBtn.className = "counter";
countAss();
counterBtn.innerText = "There are " + count + " unsubmitted assignments";
body.append(counterBtn);


// Creating a button to add a new row
let addRowBtn = document.createElement("div");
addRowBtn.className = "btn";
addRowBtn.innerText = "Add Row";
body.append(addRowBtn);
let cells = document.querySelectorAll(".assignment");


let addRowBtnClick = document.querySelector(".btn");
addRowBtnClick.addEventListener("click", (event) =>{
    addRow(); // function to add Row when it is clicked
})


let names = document.querySelectorAll(".names");        // selecting the name collumn
let highrow = document.querySelectorAll("tr");          // selecting all rows
let selected = false;


// Attempt at extra credit part (i)
 
 
// for(var i = 0; i < names.length; i++){

//     names[i].addEventListener("click", (e)=>{
//         if(!selected){
//             for(var x = 0; x < 8; x++){
//                 highrow[i].cells[x].classList.add("select");
//                 console.log(highrow[i].cells[x]);
//             }
//             select = true;
//         } else {
//             for(var x = 0; x < 8; x++){
//                 highrow[i].cells[x].classList.remove("select");
//             }
//             select = false;
//         }

//         alert("done");
        
//     });
// }


// Booleans to toggle the different Averages 
let letter = false;
let perc = true;
let gr = false;

highrow[0].cells[7].setAttribute("cursor", "pointer"); 
highrow[0].cells[7].addEventListener("click", (e)=>{
    
    if(perc == true){
        letter = true;          //letter is true
        perc = false;
        gr = false;
        highrow[0].cells[7].innerText = "Average [Letter]";     // changing the header 
        
        
        // loop through all the columns
        for(var i = 1; i <= tableData.length;i++){
            if(highrow[i].cells[7]!="-"){
                let value = parseInt(highrow[i].cells[7].innerHTML);

                // conversion iteration
                if(value < 60) highrow[i].cells[7].innerHTML = "F";
                if(value >= 60 && value <= 62) highrow[i].cells[7].innerHTML = "D-";
                if(value >= 63 && value <= 66) highrow[i].cells[7].innerHTML = "D";
                if(value >= 67 && value <= 69) highrow[i].cells[7].innerHTML = "D+";
                if(value >= 70 && value <= 72) highrow[i].cells[7].innerHTML = "C-";
                if(value >= 73 && value <= 76) highrow[i].cells[7].innerHTML = "C";
                if(value >= 77 && value <= 79) highrow[i].cells[7].innerHTML = "C+";
                if(value >= 80 && value <= 82) highrow[i].cells[7].innerHTML = "B-";
                if(value >= 83 && value <= 86) highrow[i].cells[7].innerHTML = "B";
                if(value >= 87 && value <= 89) highrow[i].cells[7].innerHTML = "B+";
                if(value >= 90 && value <= 92) highrow[i].cells[7].innerHTML = "A-";
                if(value >= 93 && value <= 100) highrow[i].cells[7].innerHTML = "A+";
    
            }
        }
    } else if (letter == true){
        gr = true;      // grade point average is true after letter
        letter = false;
        perc = false;

        highrow[0].cells[7].innerText = "Average [4.0]"; // changing the header

        // loop through all the collumns
        for(var i = 1; i <= tableData.length;i++){
            if(highrow[i].cells[7]!="-"){
                let value = parseInt(tableData[i-1].ave);

                // conversion iterations
                if(value < 60) highrow[i].cells[7].innerHTML = "0.0";
                if(value >= 60 && value <= 62) highrow[i].cells[7].innerHTML = "0.7";
                if(value >= 63 && value <= 66) highrow[i].cells[7].innerHTML = "1.0";
                if(value >= 67 && value <= 69) highrow[i].cells[7].innerHTML = "1.3";
                if(value >= 70 && value <= 72) highrow[i].cells[7].innerHTML = "1.7";
                if(value >= 73 && value <= 76) highrow[i].cells[7].innerHTML = "2.0";
                if(value >= 77 && value <= 79) highrow[i].cells[7].innerHTML = "2.3";
                if(value >= 80 && value <= 82) highrow[i].cells[7].innerHTML = "2.7";
                if(value >= 83 && value <= 86) highrow[i].cells[7].innerHTML = "3.0";
                if(value >= 87 && value <= 89) highrow[i].cells[7].innerHTML = "3.3";
                if(value >= 90 && value <= 92) highrow[i].cells[7].innerHTML = "3.7";
                if(value >= 93 && value <= 100) highrow[i].cells[7].innerHTML = "4.0";
    
            }
        }

    }else if (gr == true){
        perc = true;            // precentage is true after GPA
        gr = false;
        letter = false;
        highrow[0].cells[7].innerText = headers[7];
        for(var i = 1; i <= tableData.length;i++){
            highrow[i].cells[7].innerHTML = tableData[i-1].ave;     // reseting the data
        }
    }


})



editTable();        // function that allows dynamic data

// function to add row
function addRow(){
    insertData();
    createRow();
    editTable();
}

// function to insert data
function insertData(){
    // create new data object
    data = {
        name: getRandomFname() + " " + getRandomLname(),
        id: getRandomID(),
        assignment1: "-",
        assignment2: "-",
        assignment3: "-",
        assignment4: "-",
        assignment5: "-",
        ave: "-"
    };

    // insert into array of objects
    tableData.push(data);
}

// function to create new row to add
function createRow(){

    let l = tableData.length-1;
    let row = document.createElement("tr");     // creating new row


    let cell1 = document.createElement("td");   // creating a cell
    cell1.innerText = tableData[l].name;        // inserting data from object into cell
    cell1.className = "info";                   // applying class to cell
    row.append(cell1);                          // adding cell to row


    let cell2 = document.createElement("td");
    cell2.innerText = tableData[l].id;
    cell2.className = "info";
    row.append(cell2);

    let cell3 = document.createElement("td");
    cell3.innerText = tableData[l].assignment1;
    cell3.className = "assignment";
    row.append(cell3);

    let cell4 = document.createElement("td");
    cell4.innerText = tableData[l].assignment2;
    cell4.className = "assignment";
    row.append(cell4);

    let cell5 = document.createElement("td");
    cell5.innerText = tableData[l].assignment3;
    cell5.className = "assignment";
    row.append(cell5);

    let cell6 = document.createElement("td");
    cell6.innerText = tableData[l].assignment4;
    cell6.className = "assignment";
    row.append(cell6);

    let cell7 = document.createElement("td");
    cell7.innerText = tableData[l].assignment5;
    cell7.className = "assignment";
    row.append(cell7);

    let cell8 = document.createElement("td");
    cell8.innerText = tableData[l].ave;
    cell8.className = "average";
    row.append(cell8);

    table.append(row);                          // adding row to table

}

function editTable(){
    
    cells = document.querySelectorAll(".assignment"); // selecting all cells to have user inputs
    
    // Creating a confirm button to permanently alter the table
    let confirm = document.createElement("div");    
    confirm.className = "confirm";
    confirm.innerText = "Confirm Edits";
    body.append(confirm);
    let confirmClick = document.querySelector(".confirm");


    // Creating a cancel button to cancel all proposed changes
    let cancel = document.createElement("div");
    cancel.className = "cancel";
    cancel.innerText = "Cancel Edits";
    body.append(cancel);
    let cancelClick = document.querySelector(".cancel");

    // looping through all the editable cells
    cells.forEach((c) =>{

        c.setAttribute("contenteditable", "true");      // allowing cells to be altered
        c.addEventListener("click", (e) => {
            confirmClick.classList.add("show");         // show buttons when alteration is imposed
            cancelClick.classList.add("show");
            if(c.classList.contains("nAn")) c.classList.remove("nAn"); // remove yellow
            if(c.innerHTML == "-")c.innerHTML = "";     // remove placeholder
            
        });

    });


    let rowIndex = document.querySelectorAll("tr"); // selecting all the rows

    // if cancel button is clicked
    cancelClick.addEventListener("click", (event)=>{
        let i = 1;

        // reset all the data
        tableData.forEach((t) =>{
            rowIndex[i].cells[2].innerHTML = t.assignment1;
            rowIndex[i].cells[3].innerHTML = t.assignment2;
            rowIndex[i].cells[4].innerHTML = t.assignment3;
            rowIndex[i].cells[5].innerHTML = t.assignment4;
            rowIndex[i].cells[6].innerHTML = t.assignment5;
            rowIndex[i].cells[7].innerHTML = t.ave;
            i++;
        });

        cancelClick.classList.remove("show");       // remove the buttons
        confirmClick.classList.remove("show");

    });

    // on clicking confirm
    confirmClick.addEventListener("click", (event) =>{

        // remove the buttons
        confirmClick.classList.remove("show"); 
        cancelClick.classList.remove("show");
        let i = 1;

        let rowCount = []; // create an array to store the number of unsubmitted assignments for each row
        var numberMatch = /^[0-9]{1,2}$/; // regex to match the number input [0-100]
        

        // looping through the array of objects
        tableData.forEach((tdata) =>{
            let aveCount = 0;           // storing the total number to be divided to give average
            rowCount[i] = 0;

            tdata.assignment1 = rowIndex[i].cells[2].innerHTML;
            if(tdata.assignment1 == "-"){
                rowCount[i]++;
                rowIndex[i].cells[2].classList.add("nAn");
            } else if (!tdata.assignment1.match(numberMatch)){
                tdata.assignment1 = "-";
                rowIndex[i].cells[2].innerHTML = "-";
                rowIndex[i].cells[2].classList.add("nAn");
                rowCount[i]++;
            }
            else {
                aveCount = aveCount + parseInt(tdata.assignment1);
                rowIndex[i].cells[2].classList.remove("nAn");
                rowIndex[i].cells[2].setAttribute("text-align", "right");
            }

            tdata.assignment2 = rowIndex[i].cells[3].innerHTML;
            if(tdata.assignment2 == "-"){
                rowCount[i]++;
                rowIndex[i].cells[3].classList.add("nAn");
            } else if (!tdata.assignment2.match(numberMatch)){
                tdata.assignment2 = "-";
                rowIndex[i].cells[3].innerHTML = "-";
                rowIndex[i].cells[3].classList.add("nAn");
                rowCount[i]++;
            }
            else {
                aveCount = aveCount + parseInt(tdata.assignment2);
                rowIndex[i].cells[3].classList.remove("nAn");
                rowIndex[i].cells[3].setAttribute("text-align", "right");
                
            }

            tdata.assignment3 = rowIndex[i].cells[4].innerHTML;
            if(tdata.assignment3 == "-"){
                rowCount[i]++;
                rowIndex[i].cells[4].classList.add("nAn");
            } else if (!tdata.assignment3.match(numberMatch)){
                tdata.assignment3 = "-";
                rowIndex[i].cells[4].innerHTML = "-";
                rowIndex[i].cells[4].classList.add("nAn");
                rowCount[i]++;
            }
            else {
                aveCount = aveCount + parseInt(tdata.assignment3);
                rowIndex[i].cells[4].classList.remove("nAn");
                rowIndex[i].cells[4].setAttribute("text-align", "right");
            }


            tdata.assignment4 = rowIndex[i].cells[5].innerHTML;
            if(tdata.assignment4 == "-"){
                rowCount[i]++;
                rowIndex[i].cells[5].classList.add("nAn");
            } else if (!tdata.assignment4.match(numberMatch)){
                tdata.assignment4 = "-";
                rowIndex[i].cells[5].innerHTML = "-";
                rowIndex[i].cells[5].classList.add("nAn");
                rowCount[i]++;
            }
            else {
                aveCount = aveCount + parseInt(tdata.assignment4);
                rowIndex[i].cells[5].classList.remove("nAn");
                rowIndex[i].cells[5].setAttribute("text-align", "right");
                
            }

            tdata.assignment5 = rowIndex[i].cells[6].innerHTML;
            if(tdata.assignment5 == "-"){
                rowCount[i]++;
                rowIndex[i].cells[6].classList.add("nAn");
            } else if (!tdata.assignment5.match(numberMatch)){
                tdata.assignment1 = "-";
                rowIndex[i].cells[6].innerHTML = "-";
                rowIndex[i].cells[6].classList.add("nAn");
                rowCount[i]++;
            }
            else {
                aveCount = aveCount + parseInt(tdata.assignment5);
                rowIndex[i].cells[6].classList.remove("nAn");
                rowIndex[i].cells[2].setAttribute("text-align", "right");
                
            }
            

            if(rowCount[i]!=5){
                tdata.ave = Math.round((aveCount)/(5-rowCount[i]));
                rowIndex[i].cells[7].innerHTML = tdata.ave;

                if(tdata.ave < 60){
                    rowIndex[i].cells[7].classList.add("fail");
                }else {
                    rowIndex[i].cells[7].classList.remove("fail");
                }

            }

            i++;

        
        });
        highrow[0].cells[7].innerText = headers[7];
        countAss();
        counterBtn.innerText = "There are " + count + " unsubmitted assignments";
    });


}



// random generators
function getRandomFname(){
    const Fname = [
        "Charlie",
        "Fionn",
        "Emily",
        "Grace",
        "Thomas",
        "Jack",
        "James",
        "Ruby",
        "Isabelle",
        "Sophie",
        "Conor",
        "Anna",
        "Ava",
        "Fiadh",
        "Amelia",
        "Tadhg",
        "Oisin",
        "Senan",
        "Sean",
        "Aoife",
        "Mia",
        "Eabha",
        "Luke",
        "Lucas",
        "Cian",
        "Lucy",
        "Chloe",
        "Katie",
        "Ryan",
        "John",
        "Piotr",
        "Imelda",
        "Noah",
        "Caoimhe",
        "Rian",
        "Ella",
        "Olivia",
        "Rebecca",
        "Jamie",
        "Patrick",
        "Ciaran",
        "Barry",
        "Faith"


    ];

    let num = Math.floor(Math.random()*(Fname.length-1)+1);

    return Fname[num];
}
function getRandomLname(){
    const Lname = [
        "Boyle",
        "Brown",
        "Duffy",
        "Flynn",
        "Maguire",
        "Murphy",
        "Ryan",
        "Shea",
        "O'Brien",
        "Walsh",
        "Collins",
        "Kelly",
        "Hughes",
        "Nolan",
        "Quinn",
        "White",
        "Lynch",
        "O'Connor",
        "Brennan",
        "Clarke",
        "Connell",
        "Carroll",
        "Campbell",
        "Doherty",
        "Fitzgerald",
        "Gallagher",
        "Farrell",
        "MacCarthy",
        "Mahony",
        "O'Neill",
        "Reilly",
        "Thompson",
        "White",
        "Sweeney",
        "Sullivan",
        "O'Donnell"

    ];

    let num = Math.floor(Math.random()*(Lname.length-1)+1);

    return Lname[num];
}
function getRandomGrade(){return Math.floor(Math.random()*100+1);}
function getRandomID(){return Math.floor(Math.random()*(22000000 - 14000000) + 14000000);}
 
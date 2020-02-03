$( document ).ready(onReady);

function onReady(){
    console.log('in JQ');
    $('#submitButton').on('click', informationIn);
}//end onReady

//globals
let employees = [];
let annualCosts = 0;
//end globals

function calculateCosts(salaryIn) {    
    //sum annual salaries
    /// - WHY IS EMPLOYEES.SALARY READING AS A STRING?
    annualCosts = annualCosts + Number(salaryIn)
        //append monthly costs to DOM
    let monthlyCosts = annualCosts/12;
    $('#totalMonthly').text(`Total Monthly: ${monthlyCosts}`)
        //if monthly>20,000, change background to red        
    if(monthlyCosts > 20000){
        $('#totalMonthly').addClass('costAlerter')
    }//end if
}//end calculateCosts

function informationIn() {
    //set variables to jquery info for cleaner code later
    let firstName = $('#firstNameIn').val();
    let lastName = $('#lastNameIn').val();
    let idNum = $('#idIn').val();
    let jobTitle = $('#jobTitleIn').val();
    let annualSalary = $('#annualSalaryIn').val();
    //declare object with parameters whose value is jquery code above
    let employeeInfo = {
        name: firstName +' '+ lastName,
        ID: idNum,
        job: jobTitle,
        salary: annualSalary
    };//end obj
    //clear fields
    $('#firstNameIn').val('');
    $('#lastNameIn').val('');
    $('#idIn').val('');
    $('#jobTitleIn').val('');
    $('#annualSalaryIn').val('');
    //append jq input vals to employee table. it has to go row by row, instead of column by column because of the directionality of html/jq. 
    /// BUTTON NOT RECOGNIZING ID, THUS WONKING UP LINE 54
    $('#employeeTable').append(`<tr><td>${firstName}</td><td>${lastName}</td><td>${idNum}</td><td>${jobTitle}</td><td>${annualSalary}</td><td><button id="${idNum}">Delete</button></td></tr>`);
    //push newly created employee object into global employees array
    employees.push(employeeInfo);
    //run calculateCosts fx calling the specific employeeInfo obj property 'salary'.
    calculateCosts(employeeInfo.salary);
    //add the listener fx w/in this add employee fx. it won't run until the deleteButton is clicked
    $('#employeeTable').on('click', `#${idNum}`, deleteEmployee);

    function deleteEmployee() {
        //removes whole row of cells (<tr></tr>) from DOM
        let el = $(this);
        let string = el.parent();
        let grandparent = string.parent()[0];
        grandparent.remove();
        //remove them from the array
        for (let i = 0; i < employees.length; i++) {
            if (employees[i].ID === idNum) {
                employees.splice(i,1);
            };//end if            
        };//end for
        //call calculateCosts fx inputting annualSalary(-1) run annualSalary as neg because adding a neg and subtracting a pos are the same
        //ALSO be sure not to confuse an individuals annualSalary with the globally declared, company's annualCosts
       calculateCosts(annualSalary*(-1));
    };//end deleteEmployee
};//end informationIn
$( document ).ready(onReady);

function onReady(){
    console.log('in JQ');
    $('#submitButton').on('click', informationIn);
}//end onReady

//globals
let employees = [];
let annualCosts = 0;
let monthlyCosts = annualCosts/12;

//end globals
function calculateCosts() {
    //loop thru employees array
    //sum annual salaries
    //append monthly costs to DOM
    //if monthly>20,000, change background to red
}//end calculateCosts

function informationIn() {
    console.log('button worked!');
    let firstName = $('#firstNameIn').val();
    let lastName = $('#lastNameIn').val();
    let idNum = $('#idIn').val();
    let jobTitle = $('#jobTitleIn').val();
    let annualSalary = $('#annualSalaryIn').val();
    
    let employeeInfo = {
        name: firstName +' '+ lastName,
        ID: idNum,
        job: jobTitle,
        salary: annualSalary
    };
    $('#firstNameIn').val('');
    $('#lastNameIn').val('');
    $('#idIn').val('');
    $('#jobTitleIn').val('');
    $('#annualSalaryIn').val('');

    employees.push(employeeInfo);
    calculateCosts();
}//end informationIn

//  store the information to calculate monthly costs, 
//  append employee information to the DOM 
//  Using the stored information, calculate monthly costs and append this to the to DOM. 
//  If the total monthly cost exceeds $20,000, add a red background color to the total monthly cost.
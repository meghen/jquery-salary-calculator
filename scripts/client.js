$( document ).ready(onReady);

function onReady(){
    console.log('in JQ');
    $('#submitButton').on('click', informationIn);
}//end onReady

//globals
let employees = [];
//end globals

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
    employees.push(employeeInfo);
    console.log(employees)
}

// A 'Submit' button should collect the form information,
//  store the information to calculate monthly costs, 
//  append information to the DOM and clear the input fields. 
//  Using the stored information, calculate monthly costs and append this to the to DOM. 
//  If the total monthly cost exceeds $20,000, add a red background color to the total monthly cost.
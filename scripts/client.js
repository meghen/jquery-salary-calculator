$( document ).ready(onReady);

function onReady(){
    console.log('in JQ');
    $('#submitButton').on('click', informationIn);
    $('#employeesList').on('click', '.deleteButton', deleteEmployee);
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

function deleteEmployee() {
    console.log('in deleteEmployee');
    
}

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

    $('#employeesList').append('<li>'+firstName + ' ' + lastName + ' ' + idNum + ' ' + jobTitle + ' ' + annualSalary + ' <button class="deleteButton">Delete</button></li>')
    employees.push(employeeInfo);
    calculateCosts(employeeInfo.salary);
}//end informationIn


//Create a delete button that removes an employee from the DOM. 
//For Base mode, it does **not** need to remove that Employee's salary from the reported total.
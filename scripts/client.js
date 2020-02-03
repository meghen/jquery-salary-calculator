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

    $('#employeeTable').append(`<tr><td>${firstName}</td><td>${lastName}</td><td>${idNum}</td><td>${jobTitle}</td><td>${annualSalary}</td><td><button id="${idNum}">Delete</button></td></tr>`);

    employees.push(employeeInfo);
    calculateCosts(employeeInfo.salary);
    $('#employeeTable').on('click', `#${idNum}`, deleteEmployee);

    function deleteEmployee() {
        let el = $(this);
        let string = el.parent();
        let grandparent = string.parent()[0];
        grandparent.remove();
    
       calculateCosts(annualSalary*(-1));
    }//end deleteEmployee
}//end informationIn


//For Base mode, it does **not** need to remove that Employee's salary from the reported total.
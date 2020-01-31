$( document ).ready(onReady);

function onReady(){
    console.log('in JQ');
    $('#submitButton').on('click', informationIn)
}//end onReady

function informationIn() {
    console.log('button worked!')
}

// A 'Submit' button should collect the form information,
//  store the information to calculate monthly costs, 
//  append information to the DOM and clear the input fields. 
//  Using the stored information, calculate monthly costs and append this to the to DOM. 
//  If the total monthly cost exceeds $20,000, add a red background color to the total monthly cost.
//Setting event listeners for the date input and the hotel input
document.getElementById('endDate').addEventListener('change', calc);
//a change on the start date will execute fun to check if we have all dates entered before launching the calc function
document.getElementById('startDate').addEventListener('change', fun);

//this one is necessary because we have to set a function to check if date has been entered before calling calc function so that if users change the type of hotel they want, we can update the price to reflect it only when a date has been entered
document.getElementById('hotel').addEventListener('change', fun);

//this function checks if the user has entered a date before executing the calc function
function fun(){
    if(document.getElementById('startDate').value == "" || document.getElementById('endDate').value == ""){
        return false;
    }else{calc()}
}

//this function calculates the number of days days and the price
function calc() {
//    storing the days display output element in a constant variable you can use var instead 
    const output = document.getElementById('output');
    
//    storing the price output element in a constant
    const price = document.getElementById('price');
    let hotel = document.getElementById('hotel').value;
    hotel = Number(hotel);
    
//    getting value of date input
    let startDate = document.getElementById('startDate').value;
    let endDate = document.getElementById('endDate').value;
    console.log(startDate);
    
//    creating date object with value of date input
    let startDate1 = new Date(startDate);
    let endDate2 = new Date(endDate);
    
    
//    getting the value and difference of time in milliseconds from both dates input and converting it to days
    let time = Math.abs(endDate2.getTime() - startDate1.getTime());
    let days = Math.ceil(time / (1000 * 3600 * 24));
    
//    the below outputs the number of days
    output.innerHTML = 'Number of days: ' + days;
    
//    the below outputs the price
    price.innerHTML = hotel * days;
    
    
}
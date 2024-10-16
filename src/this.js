function toCompute() {
    // The input values
    let workingHours = document.getElementById('work').value;
    let hoursPay = document.getElementById('hourly').value;

    // Input validation
    if (workingHours === '' || hoursPay === '') {
        document.getElementsByClassName('result')[0].innerHTML = 'Please fill in the required fields!';
        return;
    }

    // Validate numeric input
    if (isNaN(workingHours) || isNaN(hoursPay)) {
        document.getElementsByClassName('result')[0].innerHTML = 'Please enter valid numbers!';
        return;
    }

    // To ensure positive numbers
    workingHours = parseFloat(workingHours);
    hoursPay = parseFloat(hoursPay);
    if (workingHours <= 0 || hoursPay <= 0) {
        document.getElementsByClassName('result')[0].innerHTML = 'Hours and pay rate must be positive!';
        return;
    }

    // Calculate tip
    let totalTip = workingHours * hoursPay * 0.2;

    // Update result
    document.getElementsByClassName('result')[0].innerHTML = `$${totalTip.toFixed(2)}`;

  
    
}
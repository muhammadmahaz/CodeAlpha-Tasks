document.addEventListener('DOMContentLoaded', function() {
    const birthdateInput = document.getElementById('birthdate');
    const calculateBtn = document.getElementById('calculate-btn');
    const resultDiv = document.getElementById('result');
    const errorDiv = document.getElementById('error');
    const yearsElement = document.getElementById('years');
    const monthsElement = document.getElementById('months');
    const daysElement = document.getElementById('days');
    
    // Set max date to today
    const today = new Date();
    const todayFormatted = today.toISOString().split('T')[0];
    birthdateInput.setAttribute('max', todayFormatted);
    
    calculateBtn.addEventListener('click', calculateAge);
    
    function calculateAge() {
        const birthdate = new Date(birthdateInput.value);
        const today = new Date();
        
        // Validate input
        if (!birthdateInput.value || birthdate > today) {
            errorDiv.classList.add('active');
            resultDiv.classList.remove('active');
            return;
        }
        
        errorDiv.classList.remove('active');
        
        // Calculate the difference
        let years = today.getFullYear() - birthdate.getFullYear();
        let months = today.getMonth() - birthdate.getMonth();
        let days = today.getDate() - birthdate.getDate();
        
        // Adjust for negative values
        if (days < 0) {
            months--;
            // Get the last day of the previous month
            const lastDayOfLastMonth = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
            days += lastDayOfLastMonth;
        }
        
        if (months < 0) {
            years--;
            months += 12;
        }
        
        // Display the result with animation
        yearsElement.textContent = years;
        monthsElement.textContent = months;
        daysElement.textContent = days;
        
        resultDiv.classList.add('active');
    }
});
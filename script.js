document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector(".toggle-form");
    form.addEventListener("submit", function(event) {
        // Prevent the form from submitting by default
        event.preventDefault();
        
        // Call the validation function and submit the form only if it's valid
        if (validateForm()) {
            form.submit();
        }
    });
});

function validateForm(){
    const projectName = document.querySelector("input[name='project_name']").value;
    const projectManager = document.querySelector("input[name='project_manager']").value;
    const projectStartDate = document.querySelector("input[name='project_start_date']").value;
    const projectEndDate = document.querySelector("input[name='project_end_date']").value;
    

    const projectNameError = document.getElementById("projectNameError");
    const projectManagerError = document.getElementById("projectManagerError");
    const projectStartDateError = document.getElementById("projectStartDateError");
    const projectEndDateError = document.getElementById("projectEndDateError");


    let isValid = true;
    const startDate = new Date(projectStartDate);
    const endDate = new Date(projectEndDate);

    if (projectName.trim() === ""){
        document.querySelector("input[name='project_name']").classList.add("error");
        projectNameError.textContent = "Project name is required!";
        isValid = false;
    } else {
        document.querySelector("input[name='project_name']").classList.remove("error");
        projectNameError.textContent = "";
    }
    if (projectManager.trim() === "") {
        document.querySelector("input[name='project_manager']").classList.add("error");
        projectManagerError.textContent = "Project manager is required!";
        isValid = false;
    } else {
        document.querySelector("input[name='project_manager']").classList.remove("error");
        projectManagerError.textContent = "";
    }
    
    if (projectStartDate.trim() === "") {
        document.querySelector("input[name='project_start_date']").classList.add("error");
        projectStartDateError.textContent = "Date field is required!";
        isValid = false;
    } else if (startDate < Date.now()) {
        document.querySelector("input[name='project_start_date']").classList.add("error");
        projectStartDateError.textContent = "Start date can't be in the past!";
        isValid = false;
    } else {
        document.querySelector("input[name='project_start_date']").classList.remove("error");
        projectStartDateError.textContent = "";
    }
    
    if (projectEndDate.trim() === "") {
        document.querySelector("input[name='project_end_date']").classList.add("error");
        projectEndDateError.textContent = "End date is required!";
        isValid = false;
    } else if (endDate < startDate) {
        document.querySelector("input[name='project_end_date']").classList.add("error");
        projectEndDateError.textContent = "End date can't be in the past!";
        isValid = false;
    } else {
        document.querySelector("input[name='project_end_date']").classList.remove("error");
        projectEndDateError.textContent = "";
    }
    
    return isValid;
}    
// Function to display an error message
function displayErrorMessage(message){
    const errorMessage = document.getElementById("errorMessage");
    errorMessage.textContent = message;
}
// function to clear the error message
function clearErrorMessage(){
    const errorMessage = document.getElementById("errorMessage");
    errorMessage.textContent = "";
}  
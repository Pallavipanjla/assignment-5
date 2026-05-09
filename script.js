// Form Submit Event
document.getElementById("registrationForm").addEventListener("submit", function(event){

    // Prevent Form Refresh
    event.preventDefault();

    // Input Values
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    // Error Elements
    let nameError = document.getElementById("nameError");
    let emailError = document.getElementById("emailError");
    let passwordError = document.getElementById("passwordError");

    // Message Element
    let message = document.getElementById("message");

    // Clear Previous Errors
    nameError.innerHTML = "";
    emailError.innerHTML = "";
    passwordError.innerHTML = "";
    message.innerHTML = "";

    try{

        // Empty Field Validation
        if(name=="" || email=="" || password==""){
            throw "All fields are required";
        }

        // Name Validation
        // Only letters and spaces allowed
        let namePattern = /^[A-Za-z ]+$/;

        if(!namePattern.test(name)){
            nameError.innerHTML = "Name should contain only alphabets";
            throw "Invalid Name";
        }

        // Email Validation using RegEx
        let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;

        if(!emailPattern.test(email)){
            emailError.innerHTML = "Enter valid email address";
            throw "Invalid Email";
        }

        // Password Validation
        // Minimum 8 characters
        // One uppercase, one lowercase, one number, one special character
        let passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

        if(!passwordPattern.test(password)){
            passwordError.innerHTML =
            "Password must contain uppercase, lowercase, number & special character";
            
            throw "Weak Password";
        }

        // Success Popup
        alert("Registration Successful");

        // Reset Form
        document.getElementById("registrationForm").reset();
    }

    // Exception Handling
    catch(error){

        // Error Message
        message.style.color = "red";
        message.innerHTML = error;
    }

});
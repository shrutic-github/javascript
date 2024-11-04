function validateForm() {
    // Retrieve input values
    const name = document.getElementById("name").value;
    const address = document.getElementById("address").value;
    const city = document.getElementById("city").value;
    const state = document.getElementById("state").value;
    const gender = document.querySelector('input[name="gender"]:checked');
    const mobile = document.getElementById("mobile").value;
    const email = document.getElementById("email").value;

    // Regular expressions for validations
    const namePattern = /^[a-zA-Z\s]+$/;
    const mobilePattern = /^[0-9]{10}$/;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    let isValid = true;

    // Validate Name
    if (!name.match(namePattern)) {
        document.getElementById("nameError").innerText = "Please enter a valid name";
        isValid = false;
    } else {
        document.getElementById("nameError").innerText = "";
    }

    // Validate Address (Should not be empty)
    if (address === "") {
        document.getElementById("addressError").innerText = "Address cannot be empty";
        isValid = false;
    } else {
        document.getElementById("addressError").innerText = "";
    }

    // Validate City (Should not be empty)
    if (city === "") {
        document.getElementById("cityError").innerText = "City cannot be empty";
        isValid = false;
    } else {
        document.getElementById("cityError").innerText = "";
    }

    // Validate State (Should not be empty)
    if (state === "") {
        document.getElementById("stateError").innerText = "State cannot be empty";
        isValid = false;
    } else {
        document.getElementById("stateError").innerText = "";
    }

    // Validate Gender (Should be selected)
    if (gender === null) {
        document.getElementById("genderError").innerText = "Please select a gender";
        isValid = false;
    } else {
        document.getElementById("genderError").innerText = "";
    }

    // Validate Mobile Number
    if (!mobile.match(mobilePattern)) {
        document.getElementById("mobileError").innerText = "Please enter a valid 10-digit mobile number";
        isValid = false;
    } else {
        document.getElementById("mobileError").innerText = "";
    }

    // Validate Email Address
    if (!email.match(emailPattern)) {
        document.getElementById("emailError").innerText = "Please enter a valid email address";
        isValid = false;
    } else {
        document.getElementById("emailError").innerText = "";
    }

    // If all validations are correct, store the data and redirect to the success page
    if (isValid) {
        localStorage.setItem("name", name);
        localStorage.setItem("address", address);
        localStorage.setItem("city", city);
        localStorage.setItem("state", state);
        localStorage.setItem("gender", gender.value);
        localStorage.setItem("mobile", mobile);
        localStorage.setItem("email", email);
        
        // Redirect to the success page
        window.location.href = "success.html";
    } else {
        alert("Please correct the highlighted errors and submit again.");
    }
}

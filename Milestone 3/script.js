// Get references to the form and display area
var form = document.getElementById("resume-form");
var resumeDisplayElement = document.getElementById("resume-display");

// Handle form submission
if (form) {
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent page reload

        // Collect input values
        var name = document.getElementById("name").value.trim();
        var email = document.getElementById("email").value.trim();
        var phone = document.getElementById("phone").value.trim(); // Fixed phon to phone
        var education = document.getElementById("education").value.trim();
        var experience = document.getElementById("experience").value.trim();
        var skills = document.getElementById("skills").value.trim();

        // Validate input fields
        if (!name || !email || !phone || !education || !experience || !skills) {
            alert("Please fill out all fields before generating the resume.");
            return;
        }

        // Generate the resume content dynamically
        var resumeHTML = `
            <h2><b>Resume</b></h2>
            <h3>Personal Information</h3>
            <p><b>Name:</b> ${name}</p>
            <p><b>Email:</b> ${email}</p>
            <p><b>Phone:</b> ${phone}</p>
            
            <h3>Education</h3>
            <p>${education}</p>

            <h3>Experience</h3>
            <p>${experience}</p>

            <h3>Skills</h3>
            <p>${skills}</p>
        `;

        // Display the generated resume
        if (resumeDisplayElement) {
            resumeDisplayElement.innerHTML = resumeHTML;
        } else {
            console.error("The resume display element is missing.");
        }
    });
} else {
    console.error("The form element is missing. Please ensure the form has the correct ID.");
}

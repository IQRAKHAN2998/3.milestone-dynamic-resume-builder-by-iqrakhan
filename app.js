var form = document.getElementById('resume-form');
var resumeOutput = document.getElementById('resume-output');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var education = document.getElementById('education').value;
    var workExperience = document.getElementById('work-experience').value;
    var skills = document.getElementById('skills').value;
    var resumeHTML = "\n        <h2>".concat(name, "'s Resume</h2>\n        <p><strong>Email:</strong> ").concat(email, "</p>\n        <h3>Education</h3>\n        <p>").concat(education, "</p>\n        <h3>Work Experience</h3>\n        <p>").concat(workExperience, "</p>\n        <h3>Skills</h3>\n        <p>").concat(skills, "</p>\n    ");
    resumeOutput.innerHTML = resumeHTML;
});

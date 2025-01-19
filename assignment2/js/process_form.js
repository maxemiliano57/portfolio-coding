// Validation rules for each field
const validationRules = {
    firstName: { pattern: /^[A-Z][a-zA-Z]+$/, hint: "First name must start with a capital letter and contain only letters." },
    lastName: { pattern: /^[A-Z][a-zA-Z\s']+$/, hint: "Last name must start with a capital letter and contain only letters, spaces, or apostrophes." },
    phone: { pattern: /^\d{3} \d{3}-\d{4}$/, hint: "Phone format should be XXX XXX-XXXX." },
    email: { pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|edu)$/, hint: "Email should be in the format blah@blah.com or blah@blah.edu." },
    website: { pattern: /^https:\/\/.*\/.*~.*\/$/, hint: "URL must start with 'https://', contain '~', and end with '/'." }
};

// Set up onfocus and onblur for each field when the page loads
function beforeForm() {
    document.getElementById("firstName").onfocus = function () {
        displayHint("firstNameNow", "Please enter your first name.");
    };
    document.getElementById("firstName").onblur = function () {
        validateField("firstName");
    };

    document.getElementById("lastName").onfocus = function () {
        displayHint("lastNameNow", "Please enter your last name.");
    };
    document.getElementById("lastName").onblur = function () {
        validateField("lastName");
    };

    document.getElementById("phone").onfocus = function () {
        displayHint("phoneNow", "Please enter your phone number (XXX XXX-XXXX).");
    };
    document.getElementById("phone").onblur = function () {
        validateField("phone");
    };

    document.getElementById("email").onfocus = function () {
        displayHint("emailNow", "Please enter your email.");
    };
    document.getElementById("email").onblur = function () {
        validateField("email");
    };

    document.getElementById("website").onfocus = function () {
        displayHint("websiteNow", "Please enter your website URL.");
    };
    document.getElementById("website").onblur = function () {
        validateField("website");
    };
}

// Display hint when a field gains focus
function displayHint(hintId, message) {
    const hintElement = document.getElementById(hintId);
    if (hintElement.firstChild) {
        hintElement.firstChild.nodeValue = message;
    } else {
        hintElement.appendChild(document.createTextNode(message));
    }
    hintElement.className = ""; // Clear any previous styling
}

// Validate a specific field based on its ID
function validateField(fieldId) {
    const input = document.getElementById(fieldId);
    const hintElement = document.getElementById(`${fieldId}Now`);
    const rule = validationRules[fieldId];

    if (rule && !rule.pattern.test(input.value)) {
        if (hintElement.firstChild) {
            hintElement.firstChild.nodeValue = rule.hint;
        } else {
            hintElement.appendChild(document.createTextNode(rule.hint));
        }
        hintElement.className = "hint-error";
    } else {
        if (hintElement.firstChild) {
            hintElement.firstChild.nodeValue = "Success!";
        } else {
            hintElement.appendChild(document.createTextNode("Success!"));
        }
        hintElement.className = "hint-success";
    }
}

// Display results if the form is valid
function displayResults() {
    // Collect user inputs
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const website = document.getElementById("website").value;
    const codingAnswer = document.getElementById("codingYes").checked ? "Yes" : "No";
    const languageAnswer = document.getElementById("langJavaScript").checked ? "JavaScript" : "Python";

    let badgeImage;

    if (codingAnswer === "Yes") {
        badgeImage = "img/spongebob_goofy.jfif";
    } else if (codingAnswer === "No") {
        badgeImage = "img/you_are_smart.jfif";
    }

    // Clear previous results
    const resultsDiv = document.getElementById("results");
    while (resultsDiv.firstChild) {
        resultsDiv.removeChild(resultsDiv.firstChild);
    }

    // Display results
    const createElement = (tag, text = "") => {
        const element = document.createElement(tag);
        element.textContent = text;
        resultsDiv.appendChild(element);
    };

    createElement("h2", "Your Survey Results");
    createElement("p", `Name: ${firstName} ${lastName}`);
    createElement("p", `Email: ${email}`);
    createElement("p", `Phone: ${phone}`);
    createElement("p", `Website: ${website}`);
    createElement("p", `Coding Interest: ${codingAnswer}`);
    createElement("p", `Preferred Language: ${languageAnswer}`);

    const badgeImg = document.createElement("img");
    badgeImg.src = badgeImage;
    badgeImg.alt = "Badge";
    badgeImg.width = 100;
    resultsDiv.appendChild(badgeImg);
}

// Initialize form event listeners on page load
window.addEventListener("load", beforeForm, false);

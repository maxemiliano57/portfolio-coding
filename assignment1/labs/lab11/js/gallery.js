//Lab 11 Javascript

// Array to hold full-size images
const images = [
    "img/fred-marriott-stanley-steamer-1906.jpg",
    "img/Jeantaud_1898.jpg",
    "img/Golden_Arrow_1929.jpg",
    "img/Blue-Bird-CN7_1964.jpg",
    "img/Thrust-SSC-2_1997.jpg",
    "img/gardner-serpollet-oeuf-de-pacques_1902.jpg"
];

// Array to hold thumbnail
const thumbnails = [
    "img/fred-marriott-stanley-steamer-1906_tn.jpg",
    "img/Jeantaud_1898_tn.jpg",
    "img/Golden_Arrow_1929_tn.jpg",
    "img/Blue-Bird-CN7_1964_tn.jpg",
    "img/Thrust-SSC-2_1997_tn.jpg",
    "img/gardner-serpollet-oeuf-de-pacques_1902_tn.jpg"
];

const captions = [
    "Fred Marriott Stanley Steamer, 1906",
    "Jeantaud, 1898",
    "Golden Arrow, 1929",
    "Blue Bird CN7, 1964",
    "Thrust SSC, 1997",
    "Gardner-Serpollet Oeuf de Pacques, 1902"
]

// Get the containers from the HTML file
const thumbnailContainer = document.getElementById("thumbnail-container");
const fullImageContainer = document.getElementById("full-image-container");
const imageCaption = document.getElementById("image-caption");
const imageSelect = document.getElementById("image-select");

// Function to display thumbnails
function displayThumbnails() {
    for (let i = 0; i < thumbnails.length; i++) {
        let thumbnailImg = document.createElement("img");
        thumbnailImg.src = thumbnails[i];
        thumbnailImg.alt = "Thumbnail " + (i + 1);

        // This adds a click event to each thumbnail
        thumbnailImg.addEventListener("click", function () {
            displayFullImage(i);
        });

        thumbnailContainer.appendChild(thumbnailImg);
    }
}

// Function to display full-size image
function displayFullImage(index) {
    imageSelect.style.display = "none";
    // This removes any existing image in the container
    while (fullImageContainer.firstChild) {
        fullImageContainer.removeChild(fullImageContainer.firstChild);
    }

    // This creates and displays the full-size image
    let fullImg = document.createElement("img");
    fullImg.src = images[index];
    fullImg.alt = "Full-size image " + (index + 1);

    fullImageContainer.appendChild(fullImg);

    // This sets and displays the caption
    imageCaption.textContent = captions[index];
    fullImageContainer.appendChild(imageCaption);
}

// This is the call to the function to load thumbnails when page is load
displayThumbnails();

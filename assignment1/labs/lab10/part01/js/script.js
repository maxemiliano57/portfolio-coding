function replaceParkingInfo(event) {
  //stop the anchor's default behavior
  event.preventDefault();
  //select an area to add/replace new content
  var changingContentDiv = document.getElementById("changingContent");

  //make sure that area is empty when the new content is added/replaced
  while (changingContentDiv.hasChildNodes()) {
    changingContentDiv.removeChild(changingContentDiv.lastChild);
  }
  //add the content and attach it all together
  var newParagraph1 = document.createElement("p");
  var newParagraph1Text = document.createTextNode(
    "Ample downtown parking is available within close proximity to The Jacksonville Landing. Options include The Landing's own lot immediately east of the property, garage, metered street and peripheral parking."
  );
  newParagraph1.appendChild(newParagraph1Text);

  changingContentDiv.appendChild(newParagraph1);

  var newParagraph2 = document.createElement("p");
  var newParagraph2Text = document.createTextNode(
    "Complete parking information and directions are available at "
  );
  newParagraph2.setAttribute("class", "italicized");

  var newAnchor = document.createElement("a");
  var newAnchorText = document.createTextNode("Directions + Parking");
  newAnchor.appendChild(newAnchorText);
  newAnchor.setAttribute("href", "#");

  newParagraph2.appendChild(newParagraph2Text);
  newParagraph2.appendChild(newAnchor);

  //attach all the new content to the previously selected area
  changingContentDiv.appendChild(newParagraph2);
}

function replaceVendor(event) {
  //stop the anchor's default behavior
  event.preventDefault();

  //select an area to add/replace new content
  var changingContentDiv = document.getElementById("changingContent");

  //make sure that area is empty when the new content is added/replaced
  while (changingContentDiv.hasChildNodes()) {
    changingContentDiv.removeChild(changingContentDiv.lastChild);
  }

  //add the content and attach it all together
  var newH2 = document.createElement("h2");
  var newH2Anchor = document.createElement("a");
  var newH2AnchorText = document.createTextNode("Dipper Dan's");
  newH2Anchor.appendChild(newH2AnchorText);
  newH2Anchor.setAttribute("href", "#");
  newH2.appendChild(newH2Anchor);

  changingContentDiv.appendChild(newH2);

  var newParagraph1 = document.createElement("p");
  var newParagraph1Text = document.createTextNode(
    "Ice cream shop with all the fixins', fun foods, nachos and more!"
  );
  newParagraph1.appendChild(newParagraph1Text);

  changingContentDiv.appendChild(newParagraph1);

  var newParagraph2 = document.createElement("p");
  newParagraph2.setAttribute("class", "italicized");

  var newAnchor = document.createElement("a");
  var newAnchorText = document.createTextNode("View more Dining + Nightlife");
  newAnchor.appendChild(newAnchorText);
  newAnchor.setAttribute("href", "#");

  newParagraph2.appendChild(newAnchor);
  var newImage = document.createElement("img");
  newImage.setAttribute("src", "img/dansicecream.jpg");
  newImage.setAttribute("alt", "image of Jefferson Landing featured vendor");
  newImage.setAttribute("height", "150px");
  newImage.setAttribute("width", "150px");

  //attach all the new content to the previously selected area
  changingContentDiv.appendChild(newImage);
  changingContentDiv.appendChild(newParagraph2);
}
function replaceHotels(event) {
  event.preventDefault();
  //stop the anchor's default behavior
  var changingContentDiv = document.getElementById("changingContent");
  //the area to add/replace new content
  while (changingContentDiv.hasChildNodes()) {
    changingContentDiv.removeChild(changingContentDiv.lastChild);
  }
  //the area is empty when the new content is added/replaced
  var newParagraph1 = document.createElement("p");
  newParagraph1.textContent = "Find great hotels near the Jacksonville Landing!";
  var newParagraph2 = document.createElement("p");
  newParagraph2.textContent = "Explore top-rated hotels that are within walking distance of the Landing.";
  //add the content and attach it all together

  changingContentDiv.appendChild(newParagraph1);
  changingContentDiv.appendChild(newParagraph2);
  //attach all the new content to the previously selected area
}


function replaceGroups(event) {
  event.preventDefault();
  //stop the anchor's default behavior
  var changingContentDiv = document.getElementById("changingContent");
  //select an area to add/replace new content

  //make sure that area is empty when the new content is added/replaced
  while (changingContentDiv.hasChildNodes()) {
    changingContentDiv.removeChild(changingContentDiv.lastChild);
  }
  //add the content and attach it all together
  var newParagraph1 = document.createElement("p");
  newParagraph1.textContent = "Plan your next group event at the Jacksonville Landing!";
  var newParagraph2 = document.createElement("p");
  newParagraph2.textContent = "We offer group packages and event hosting services.";

  changingContentDiv.appendChild(newParagraph1);
  changingContentDiv.appendChild(newParagraph2);
  //attach all the new content to the previously selected area
}


function init() {
  // this stuff runs after the DOM finishes loading
  var parkingInfoAnchor = document.getElementById("parkingInfoAnchor");
  parkingInfoAnchor.addEventListener("click", replaceParkingInfo, false);
  var vendorAnchor = document.getElementById("vendorAnchor");
  vendorAnchor.addEventListener("click", replaceVendor, false);
  var hotelsNearbyAnchor = document.getElementById("hotelsNearbyAnchor");
  hotelsNearbyAnchor.addEventListener("click", replaceHotels, false);
  var groupsEventsAnchor = document.getElementById("groupsEventsAnchor");
  groupsEventsAnchor.addEventListener("click", replaceGroups, false);

  // could you create one function called replaceChangingContent(content) to handle all of these?
}
//make sure the DOM is loaded
window.addEventListener("load", init, false);

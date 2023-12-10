
    // Create the new div element
    var newDiv = document.createElement("div");
    newDiv.className = "hero-background-gradient";

    // Find the target div by its class name
    var targetDiv = document.querySelector(".gc-c-ejKCwK-idfGVbC-css");
    if (targetDiv) {
        // Insert the new div before the target div
        targetDiv.parentNode.insertBefore(newDiv, targetDiv);
    }
    
    
    // Create the new anchor element
    var newAnchor = document.createElement("a");
    newAnchor.href = "/";
    newAnchor.className = "new-site-title";
    newAnchor.textContent = "St. Anthony of Padua";

    // Find the target div by its class name
    var targetDiv = document.querySelector(".navbar-left.variant-expanded");
    if (targetDiv) {
        // Append the new anchor as the last element inside the target div
        targetDiv.appendChild(newAnchor);
    }
    
// Create the new div element
var newDiv3 = document.createElement("div");
newDiv3.className = "hero-logo";

// Find the target div using the compound class selector
var targetDiv3 = document.querySelector(".gc-c-dhzjXW.gc-c-iTKOFX");
if (targetDiv3) {
    // Insert the new div as the first child inside the target div
    if (targetDiv3.firstChild) {
        targetDiv3.insertBefore(newDiv3, targetDiv3.firstChild);
    } else {
        targetDiv3.appendChild(newDiv3);
    }
}
    
    
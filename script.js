// Assignment 1: Blacksmith — The Tiny Forge


// 1. Select the forge, heat, sword count, status, image, and message elements.
//    Find their IDs in index.html.

// Check if the forge has at least 30 heat.
// If there is enough heat, subtract 30 heat.
// Increase the number of swords by one.
// Displays a message saying the sword was made.
// If there isn't enough heat, display a failure message.
// Update the page to show the current forge information.

// 2. Create the two state variables: heat and swords made.

const $forge = document.getElementById("forge");
const $heat = document.getElementById("heat-value");
const $swords = document.getElementById("sword-count");
const $status = document.getElementById("forge-status");
const $image = document.getElementById("forge-image");
const $message = document.getElementById("action-message");

let forgeHeat = 20;
let swordsMade = 0;

// 3. Write getForgeStatus(heatValue). Return the correct status string.
function getForgeStatus(heatValue) {

    if (heatValue < 30) {
        return "Too cold";

    } else if (heatValue < 70) {
        return "Ready to forge";

    } else {
        return "Roaring fire";
    }

}

// 4. Write updateForge(). Update text and apply one status class.
//    Change the supplied forge image src and alt to match the heat.
//    Keep the most recent action message visible.
function updateForge() {


    $heat.textContent = forgeHeat;
    $swords.textContent = swordsMade;

    const currentStatus = getForgeStatus(forgeHeat);

    $status.textContent = currentStatus;

    $forge.classList.remove("is-cold", "is-ready", "is-roaring");

if (currentStatus === "Too cold") {
    $forge.classList.add("is-cold");
    $image.src = "assets/forge-cold.svg";
    $image.alt = "A stone forge with dark coals and no flames";

} else if (currentStatus === "Ready to forge") {
    $forge.classList.add("is-ready");
    $image.src = "assets/forge-ready.svg";
    $image.alt = "A stone forge with a small orange fire";

} else {
    $forge.classList.add("is-roaring");
    $image.src = "assets/forge-roaring.svg";
    $image.alt = "A stone forge with tall bright flames and sparks";
}

}

// 5. Write resetForge(). Restore the state, message, and display.
function resetForge() {
    forgeHeat = 20;
    swordsMade = 0;

    $message.textContent = "Welcome to the forge. Add heat to begin.";

    updateForge();
}

// 6. Write heatForge(amount). Add heat, cap it, and update the page.
function heatForge(amount) {
    forgeHeat = forgeHeat + amount;

    if (forgeHeat > 100) {
        forgeHeat = 100;
    }

    $message.textContent = "The forge has been heated by " + amount + "!";

    updateForge();
}
// 7. Write makeSword(). Handle both success and insufficient heat.
function makeSword() {

    if (forgeHeat >= 30) {
        forgeHeat = forgeHeat - 30;
        swordsMade = swordsMade + 1;

        $message.textContent = "You successfully made a sword!";

    } else {
        $message.textContent = "Not enough heat! Add more heat to make a sword.";
    }

    updateForge();
}
// 8. Call resetForge() once to start the game.
resetForge();
// Use the tests in ASSIGNMENT.md to check your work.




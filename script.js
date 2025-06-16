//give access so that the js can access the HTML elements
const form = document.getElementById("guest-form");
const guestList = document.getElementById("guest-list");
const guestName = document.getElementById("guest-name");
const guestCategory = document.getElementById("guest-category");

// an empty array to hold guest objects(name and category)
let guests = [];

//
form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the form from submitting automatically

  const name = guestName.value.trim(); // whatever the user types in the input field(value) .trim removes unwanted spaces
  const category = guestCategory.value; // the selected category from the dropdown

  if (name === "") {
    alert("Please enter a guest name.");
    return;
    // if the input is empty, alert the user
  }
 if (guests.length >= 10) {
      alert("Guest list is full. Cannot add more than 10 guests.");
      return;
      // if the array has 10 or more guests, alert the user
    }
  
  // Create a guest object with name and category
  const guest = {
    name: name,
    category: category,
    timestamp: new Date().toLocaleTimeString() // Add a timestamp for when the guest was added
  };

  // Add the guest object to the guests array
  guests.push(guest);

  // Clear the input fields
  guestName.value = "";
  guestCategory.value = "VIP";

  // Update the guest list display
  displayGuests();
});

// Function to display the guest list
function displayGuests() {
  guestList.innerHTML = ""; // Clear the current list to avoid duplicates

  // Loop through the guests array and create list items for each guest
  guests.forEach(function (guest) {
    const li = document.createElement("li"); // Create a new list item
    li.textContent = `${guest.name} (${guest.category})  ${guest.timestamp}`; // Set the text content of the list item

    // Create delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Remove";
    deleteBtn.style.marginLeft = "10px";

    // Add click event to remove this guest
    deleteBtn.addEventListener("click", function () {
      guests.splice(index, 1); // Remove from array
      displayGuests(); // Re-render
    });

    li.appendChild(deleteBtn); // Add button to list item
    guestList.appendChild(li); // Append the list item to the guest list
  });
  // the time the guest is added 
    const time = new Date().toLocaleTimeString(); // Get the current time
    const timeDisplay = document.getElementById("time-display");
  timeDisplay.textContent = `Last updated: ${time}`; // Display the last updated time
}
 // Function to clear the guest list
function clearGuestList() {
  guests = []; // Reset the guests array to an empty array
  displayGuests(); // Update the display to show the cleared list
}


 

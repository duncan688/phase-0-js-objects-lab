//Write your code here

// Write your code here

// Write your code here

// Create attendee object
const attendee = {
  attendeeId: "T001",
  name: "John Doe",
  event: "Tech Conference",
  ticketType: "VIP",
  ticketPrice: 100
};

// Function to show attendee name
function logAttendeeName(attendee) {
  console.log(attendee.name);
}

// Function to show ticket price
function logTicketPrice(attendee) {
  console.log(attendee.ticketPrice);
}

// Function to change ticket type
function updateTicketType(attendee, newType) {
  attendee.ticketType = newType;
}

// Function to change ticket price
function updateTicketPrice(attendee, newPrice) {
  attendee.ticketPrice = newPrice;
}

// Function to remove event
function removeEventProperty(attendee) {
  delete attendee.event;
}

// Function to add checkedIn
function addCheckedInProperty(attendee) {
  attendee.checkedIn = true;
}




//Needed for the tests to work. Don't modify
module.exports = {
  ...(typeof attendee !== 'undefined' && { attendee }),
  ...(typeof logAttendeeName !== 'undefined' && { logAttendeeName }),
  ...(typeof logTicketPrice !== 'undefined' && { logTicketPrice }),
  ...(typeof updateTicketType !== 'undefined' && { updateTicketType }),
  ...(typeof updateTicketPrice !== 'undefined' && { updateTicketPrice }),
  ...(typeof removeEventProperty !== 'undefined' && { removeEventProperty }),
  ...(typeof addCheckedInProperty !== 'undefined' && { addCheckedInProperty })
};

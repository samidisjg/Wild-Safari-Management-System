/*
function validatemyForm() {
  // Get the values of the name and email fields
  let FullName = document.forms["myForm"]["FullName"].value;
  let Email = document.forms["myForm"]["Email"].value;
  let BookingFor = document.forms["myForm"]["BookingFor"].value;
  let countR = document.forms["myForm"]["countR"].value;
  let countA = document.forms["myForm"]["countA"].value;
  let countC = document.forms["myForm"]["countC"].value;
  let CheckIntime = document.forms["myForm"]["CheckIntime"].value;
  let CheckOuttime = document.forms["myForm"]["CheckOuttime"].value;

  // Perform validation
  if (FullName == "") {
      alert("Full Name must be filled out");
      return false;
  }
  
  if (Email == "") {
      alert("Email must be filled out");
      return false;
  }

  if (BookingFor == "") {
      alert("Booking For must be filled out");
      return false;
  }

  if (countR == "") {
    alert("Room Type must be filled out");
    return false;
  }

  if (countA == "") {
      alert("No Of Adults must be filled out");
      return false;
  }

  if (countC == "") {
      alert("No Of Children must be filled out");
      return false;
  }

  if (CheckIntime == "") {
      alert("Check In time must be filled out");
      return false;
  }

  if (CheckOuttime == "") {
      alert("Check Out time must be filled out");
      return false;
  }

  return true;
}

//Room count validation
function validateRoomCount() {
var roomCount = document.getElementById("countR").value;
var adultCount = document.getElementById("countA").value;

  if (roomCount < adultCount) {
    alert("The Bed count cannot be less than the number of adults.");
    return true;
  } else {
      return false;
  }

}

//Date Pick
function validateDates() {
var checkInDate = new Date(document.getElementById("CheckIntime").value);
var checkOutDate = new Date(document.getElementById("CheckOuttime").value);

  if (checkOutDate < checkInDate) {
    alert("Check-out date cannot be earlier than check-in date");
    return false;
  } else {
      return true;
  }

}

//disable previous dates
var today = new Date().toISOString().slice(0, 16);
document.getElementsByName("CheckIntime")[0].min = today;
document.getElementsByName("CheckOuttime")[0].min = today;

//Calling all form functions
function validateForm() {
var isDatesValid = validateDates();
var isRoomCountValid = validateRoomCount();
var isFormInvalid = validatemyForm();

return isFormInvalid || isRoomCountValid || isDatesValid;
}

//clear form
window.addEventListener("pageshow", function(event) {
var form = document.getElementById("myForm");
  if (event.persisted) {
    form.reset(); // Clear form fields if navigating back
  }
});
*/

//delete reservation
function deleteRes() {
var msg = "Are you sure you want to delete this reservation?";
  if (confirm(msg)) {
      return true; // Proceed with the deletion
  } else {
      return false; // Cancel the deletion
  }
}


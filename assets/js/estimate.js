//Event Listener
document.getElementById("form_check").addEventListener("submit", orderEstimate);

// Function that displays the information to the webpage
function orderEstimate(event) {
  event.preventDefault();

  var checkDetailsValue = checkDetails();
  // adds the user's name and email to the doc
  if (checkDetailsValue === false) {
    checkDetails();
  } else {
    document.getElementById("nameFinal").innerHTML =
      "Name: " + firstName.value + " " + lastName.value;
    document.getElementById("emailFinal").innerHTML = "Email: " + email.value;
    prodTotal();
  }
}

// Funtion that checks to see if the required information is entered
function checkDetails() {
  // Const
  const firstName = document.getElementById("firstName");
  const lastName = document.getElementById("lastName");
  const email = document.getElementById("email");

  var infoValue;

  // If else statement
  if (firstName.value == "") {
    // Boolean
    infoValue = false;
    alert("Please enter your first name");
    firstName.focus();
    firstName.style.backgroundColor = "#ff6666";
  } else {
    if (lastName.value == "") {
      infoValue = false;
      alert("Please enter your last name");
      lastName.focus();
      lastName.style.backgroundColor = "#ff6666";
    } else {
      if (email.value == "") {
        infoValue = false;
        alert("Please enter your email address");
        email.focus();
        email.style.backgroundColor = "#ff6666";
      } else {
        // console.log(firstName.value);
        // console.log(lastName.value);
        // console.log(email.value);
        infoValue = true;
      }
    }
  }
  return infoValue;
}

// Function that adds up the total amount of product, and then finds the total price of the products
function prodTotal() {
  // Let
  let shortCost = 7;
  let longCost = 10;
  let hoodCost = 25;
  let hatCost = 5;

  // variables
  var prodShort = parseInt(document.getElementById("short_qty").value);
  var prodLong = parseInt(document.getElementById("long_qty").value);
  var prodHood = parseInt(document.getElementById("hood_qty").value);
  var prodHat = parseInt(document.getElementById("hat_qty").value);
  // Arithmetic Operations
  var totalProd = prodShort + prodLong + prodHood + prodHat;

  var prodPrice =
    shortCost * prodShort +
    longCost * prodLong +
    hoodCost * prodHood +
    hatCost * prodHat;

  document.getElementById("prodFinal").innerHTML =
    "Total item amount: " + totalProd;
  // console.log("The total cost (minus shipping) is: $" + prodPrice);

  // Calculates the total cost including shipping
  var shipPrice;

  if (document.getElementById("pickup").checked == true) {
    shipPrice = 0;
    document.getElementById("shipFinal").innerHTML =
      "Your total shipping cost is: $" + shipPrice;
  } else if (document.getElementById("ship").checked == true) {
    shipPrice = 5;
    document.getElementById("shipFinal").innerHTML =
      "Your total shipping cost is: $" + shipPrice;
  } else if (document.getElementById("prem").checked == true) {
    shipPrice = 10;
    document.getElementById("shipFinal").innerHTML =
      "Your total shipping cost is: $" + shipPrice;
  } else if (document.getElementById("air").checked == true) {
    shipPrice = 15;
    document.getElementById("shipFinal").innerHTML =
      "Your total shipping cost is: $" + shipPrice;
  }

  var totalPrice = prodPrice + shipPrice;

  document.getElementById("priceFinal").innerHTML =
    "Your estimated total is: $" + totalPrice;

  // Checks the values in the checkboxes
  // Array
  var checkValues = ["Gift", "Charity", "None"];

  if (document.getElementById("gift").checked == true) {
    document.getElementById("specCheck").innerHTML =
      "Special shipping: " + checkValues[0];
    document.getElementById("specFinal").innerHTML =
      "We will wrap your order for you!";
    if (
      document.getElementById("gift").checked === true &&
      document.getElementById("charity").checked === true
    ) {
      document.getElementById("specCheck").innerHTML =
        "Special shipping: " + checkValues[0] + " and " + checkValues[1];
      document.getElementById("thankYou").innerHTML =
        "Thank you for your charitable donation!";
    }
  } else if (document.getElementById("charity").checked == true) {
    document.getElementById("specCheck").innerHTML =
      "Special shipping: " + checkValues[1];
    document.getElementById("thankYou").innerHTML =
      "Thank you for your charitable donation!";
  } else {
    document.getElementById("specCheck").innerHTML =
      "Special shipping: " + checkValues[2];
  }
}

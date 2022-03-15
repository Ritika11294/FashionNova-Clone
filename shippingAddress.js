document.querySelector("form").addEventListener("submit", shipping);

var shippingArr = JSON.parse(localStorage.getItem("shippingInformation")) || [];

function shipping(event) {
  event.preventDefault();

  var email = document.getElementById("mobile").value;
  var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;
  var address = document.getElementById("address").value;
  var apartment = document.getElementById("apartment").value;
  var city = document.getElementById("city").value;

  var select = document.getElementById("select").value;
  var states = document.getElementById("states").value;

  var zipCode = document.getElementById("zipCode").value;

  var phoneNumber = document.getElementById("phoneNumber").value;

  var shippingObj = {
    email: email,
    firstName: firstName,
    lastName: lastName,
    address: address,
    apartment: apartment,
    city: city,
    select: select,
    states: states,
    zipCode: zipCode,
    phoneNumber: phoneNumber,
  };

  shippingArr.push(shippingObj);
  localStorage.setItem("shippingInformation", JSON.stringify(shippingArr));

  if (
    firstName !== "" &&
    lastName !== "" &&
    email !== "" &&
    address !== "" &&
    apartment !== "" &&
    city !== "" &&
    states !== "" &&
    zipCode !== "" &&
    phoneNumber !== "" &&
    select !== ""
  ) {
    window.location.href = "payment.html";
  } else {
    alert("Fill the details");
  }
}

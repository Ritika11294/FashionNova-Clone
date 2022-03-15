document.querySelector("form").addEventListener("submit", otp);

function otp(event) {
  event.preventDefault();

  var otp = document.getElementById("otp").value;

  if (otp == "1234") {
    alert("Payment Successful");
    alert("Thank You For Purchasing");
    window.location.href = "./index.html";
  } else {
    alert("Wrong Otp");
  }
}

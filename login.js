document.querySelector("button").addEventListener("click", logIn)
var regdUsers = JSON.parse(localStorage.getItem("userDatabase"));


function logIn() {
  var email = document.querySelector("#email").value;
  var password = document.querySelector("#password").value;

  flag = false;
  if (email == "") {
    alert("Please enter an email!");
  }

  else if (password == "") {
    alert("Please enter password")
  }

  else {
    for (var i = 0; i < regdUsers.length; i++) {

      if (email == regdUsers[i].emailAddress && password == regdUsers[i].pass) {
        window.location.href = "index.html";
        flag = true;
        break;
      }

    }

    if(flag) {
      alert("Login Successfully!");
    }else{
      alert("Wrong Credentials");
    }

  }


}
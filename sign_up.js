document.querySelector(".createAccount").addEventListener("click" , signup)


    var userData = JSON.parse(localStorage.getItem("userDatabase")) || [];

    function signup() {
        var firstName = document.querySelector("#firstName").value
        var lastName = document.querySelector("#lastName").value
        var email = document.querySelector("#email").value
        var password = document.querySelector("#password").value
        // var checkbox = document.querySelectorAll('input[type="checkbox"]:checked');


        //console.log(firstName, lastName, email, password);

        var userCred = {
         nameFirst: firstName,
         nameLast: lastName,
         emailAddress: email,
         pass: password,
        };

        

        userData.push(userCred);
        // console.log(userData);
        alert("Account created Successfully!")
        localStorage.setItem("userDatabase", JSON.stringify(userData));
        window.location.href = "login.html"
        
    }
    
    document.querySelector("#cus_login").addEventListener("click" , show_login)
    function show_login(event) {
      event.preventDefault();
      console.log("signin");
      window.location.href = "login.html"
    }
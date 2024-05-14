
            var attempt = 0;

            function logOut() {
                window.location.href = "LoginfinalsWEB.HTML";
                
            }
            
            function logIn() {
                var emaill = document.getElementById("userr").value;
                var passs = document.getElementById("passW").value;

                if (emaill == "hahaha" && passs == "1234"){
                    window.location.href = "finalsWEB.HTML";
                    return true;
                } 
                else {
                    alert("Wrong credentials!");
                    attempt++;
                    if (attempt == 3){
                        alert("Cannot login, 3 attempts only!");
                        document.getElementById("btnLogIn").disabled = true;
                        document.getElementById("userr").disabled = true;
                        document.getElementById("passW").disabled = true;
                        document.getElementById("userr").value = "";
                        document.getElementById("passW").value = "";
                        return false;
                    }
                    else {
                        alert("Incorrect username or password.");
                        return false;
                    }
                }
            }


            // CheckOUT


// Password and Confirm Password Verification 
// get Password
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');

confirmPasswordInput.addEventListener('input', () => {
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;
    if(password !== confirmPassword){
        confirmPasswordInput.style.outlineColor="red";
    }
    else{
        confirmPasswordInput.style.outlineColor="black";    
    }
})
// Password and Confirm Password Verification End 

// Swap to login-form using login text
var asking = document.getElementById('asking');
var user = document.getElementById('user');
var isDisplayed = true;
asking.addEventListener('click', function(){
    var removeEmail = document.getElementById('email');
    var removeConfirmPassword = document.getElementById('confirm-password');
    if(isDisplayed) {
     removeEmail.style.display="none";
     removeConfirmPassword.style.display="none";
     loginSwap.style.backgroundColor="rgb(4, 107, 217)";
     loginSwap.style.color="white";
     SignupSwap.style.backgroundColor="white";
     SignupSwap.style.color="black";
     asking.textContent="Signup"
     user.textContent="Don't have? Create a new account"
     isDisplayed = false;
    }
    else{
         removeEmail.style.display="block";
         removeConfirmPassword.style.display="block";
         SignupSwap.style.backgroundColor=" rgb(4, 107, 217)";
     SignupSwap.style.color="white";
     loginSwap.style.backgroundColor="white";
     loginSwap.style.color="black";
        asking.textContent="Login";
     user.textContent="Already have an account?";
     isDisplayed = true;
    }
})

// Swap to login-form using login button
var asking = document.getElementById('asking');
var user = document.getElementById('user');
var loginSwap = document.getElementById('login-swap');
var isDisplayed = true;
loginSwap.addEventListener('click', function(){
    var removeEmail = document.getElementById('email');
    var removeConfirmPassword = document.getElementById('confirm-password');
    if(isDisplayed) {
     removeEmail.style.display="none";
     removeConfirmPassword.style.display="none";
     loginSwap.style.backgroundColor="rgb(4, 107, 217)";
     loginSwap.style.color="white";
     SignupSwap.style.backgroundColor="white";
     SignupSwap.style.color="black";
     asking.textContent="Signup"
     user.textContent="Don't have? Create a new account"
     isDisplayed=false;
    }
})

// Swap to Signup-form using Signup button
var asking = document.getElementById('asking');
var user = document.getElementById('user');
var SignupSwap = document.getElementById('signup-swap');
SignupSwap.addEventListener('click', function(){
    var removeEmail = document.getElementById('email');
    var removeConfirmPassword = document.getElementById('confirm-password');
    if(!isDisplayed) {
     removeEmail.style.display="block";
     removeConfirmPassword.style.display="block";
     SignupSwap.style.backgroundColor="rgb(4, 107, 217)";
     SignupSwap.style.color="white";
     loginSwap.style.backgroundColor="white";
     loginSwap.style.color="black";
     asking.textContent="Login"
     user.textContent="Already have an account? "
     isDisplayed=true;
    }
    
})



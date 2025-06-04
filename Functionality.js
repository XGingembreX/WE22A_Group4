//So this patch of code calls my html elements to make them interactive
const loginText = document.querySelector(".title-text .login"); //im calling the log in log in element on the ".title-text acts as a heading that changes alongside the form

const loginForm = document.querySelector("form.login");//calls the form with login class

const loginBtn = document.querySelector("label.login");//interacts with the label that is posing like button for my log in class

const signupBtn = document.querySelector("label.signup");//interacts with the label that is posing like button for my sign up class

const signupLink = document.querySelector("form .signup-link a"); //calling my sign up quick link for whoever has never registered before

const users=[]; //Users data input will be put here


//Using arrays 
//Calling the sign up form for input modifications
const signUpForm = document.querySelector("form.signup");
signUpForm.OnSubmit = function(e){
  e.preventDefault(); //stops a default submission

  //establishing what type of inputs is expected
  const email = signUpForm.querySelector('input[type = "text"]').value;
  const password = signUpForm.querySelectorAll('input[type = "password"]')[0].value;
  const confirmPassword = signUpForm.querySelectorAll('input[type = "password"]')[1].value;


  if (password !== confirmPassword){  //if the passwords arent the same the error message get shown
    alert("Passwords isnt matching, please try again");
    return;
  }
}

//check if the email given is actually real or its valid
const UsersReal= users.find(user => user.email === email);
if (UsersReal){
  alert("Your email has already been registered...");
  return;
}

//hold a new users details here
users.push({email, password});
alert("Account registered, go ahead and log in!");
 
loginBtn.click; //slide over to the logIn side 




//handling the log in side of the form
loginForm.OnSubmit = function(e){
  e.preventDefault(); //stopping a default submission

  const email = loginForm.querySelector('input[type="text"]').value; //inspecting inputs for email and password to be of text and password values
  const password = loginForm.querySelector('input[type="password"]').value;

  const user = users.find(user => user.email === email && user.password === password);
   if (user) {  //under the condition users exist and their info is real log them in successfully
    alert("You have logged in successfully!");
   } else //otherwise
   {
    alert("The input(s) given were inaccurate!")//if the details arent accurate give this error message
   }
}



//establishing the click behaviours of the buttons
signupBtn.onclick = () => {//when my signup option is chosen the form moves to the right side of the form landing on the sign up button 
  loginForm.style.marginLeft = "-50%";
  loginText.style.marginLeft = "-50%";
};
loginBtn.onclick = () => {//if my user clicks the log in the form slides to the left and lands the user to the log in page
  loginForm.style.marginLeft = "0%";
  loginText.style.marginLeft = "0%";
};
signupLink.onclick = () => {  //for those who didnt register, they click this link thats like another option to get to the sign up page
  signupBtn.click();
  return false;
};


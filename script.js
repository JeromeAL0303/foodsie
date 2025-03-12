document.addEventListener("scroll", () => {
  var scroll = parseInt(Math.floor(window.scrollY));

  if (scroll == 0) {
    document.querySelector("header").style.backgroundColor = "transparent";
  } else {
    document.querySelector("header").style.backgroundColor = "#00380E";
  }

  for (var i = 0; i < Math.floor(document.querySelectorAll("a").length); i++) {
    if (i <= 3) {
      document.querySelectorAll("a")[i].style.color = "white";
    } else {
      document.querySelectorAll("a")[i].style.color = "black";
    }
  }

  if (scroll > 500 && scroll <= 1000) {
    document.querySelectorAll("a")[1].style.color = "black";
    document.querySelectorAll("a")[5].style.color = "white";
  } else if (scroll > 1000 && scroll <= 2000) {
    document.querySelectorAll("a")[2].style.color = "black";
    document.querySelectorAll("a")[6].style.color = "white";
  } else if (scroll > 2000) {
    document.querySelectorAll("a")[3].style.color = "black";
    document.querySelectorAll("a")[7].style.color = "white";
  } else {
    document.querySelectorAll("a")[0].style.color = "black";
    document.querySelectorAll("a")[4].style.color = "white";
  }
});

document.querySelector(".menus").addEventListener("click", () => {
  document.querySelector(".navBar").classList.toggle("visibility");
});

for (
  var i = 0;
  i < Math.floor(document.querySelectorAll("section").length);
  i++
) {
  document.querySelectorAll("section")[i].addEventListener("click", () => {
    document.querySelector(".navBar").classList.remove("visibility");
  });
}

function loginPage() {
  document.querySelector(".loginPage").classList.add("visibilityForm");
}

function signupPage() {
  document.querySelector(".signupPage").classList.add("visibilityForm");
}

document.querySelector(".backIconLogin p").addEventListener("click", () => {
  document.querySelector(".loginPage").classList.remove("visibilityForm");
});

document.querySelector(".backIconImageLogin").addEventListener("click", () => {
  document.querySelector(".loginPage").classList.remove("visibilityForm");
});

document.querySelector(".backIconSignUp p").addEventListener("click", () => {
  document.querySelector(".signupPage").classList.remove("visibilityForm");
});

document.querySelector(".backIconImageSignUp").addEventListener("click", () => {
  document.querySelector(".signupPage").classList.remove("visibilityForm");
});

function validateLogin() {
  var email_login = document.loginForm.email;
  var password_login = document.loginForm.password;

  if (email_login.value == "") {
    alert("Please Enter Email");
    document.loginForm.email.focus();
    return false;
  } else if (password_login.value == "") {
    alert("Please Enter Password");
    document.loginForm.password.focus();
    return false;
  } else {
    alert("Successfully Login!");
    return true;
  }
}

function validateSignUp() {
  var email_signup = document.signupForm.email;
  var password_signup = document.signupForm.password;

  if (email_signup.value == "") {
    alert("Please Enter Email");
    document.signupForm.email.focus();
    return false;
  } else if (password_signup.value == "") {
    alert("Please Enter Password");
    document.signupForm.password.focus();
    return false;
  } else {
    alert("Successfully signup (Beta/Not complete)");
    return true;
  }
}

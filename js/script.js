const form = document.querySelector("form"),
email = form.querySelector("#email"),
create_pw = form.querySelector("#create_pw"),
confirm_pw = form.querySelector("#confirm_pw"),
eyeIcon = form.querySelector("#eyeIcon"),
submit = form.querySelector("#submit"),
error = form.querySelectorAll("#error");

eyeIcon.addEventListener("click", function () {
if (create_pw.type === "password" && confirm_pw.type === "password") {
  create_pw.type = "text";
  confirm_pw.type = "text";
  eyeIcon.classList.replace("fa-eye-slash", "fa-eye");
} else {
  create_pw.type = "password";
  confirm_pw.type = "password";
  eyeIcon.classList.replace("fa-eye", "fa-eye-slash");
}
});

function checkEmail() {
const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
if (!email.value.match(pattern)) {
  return error[0].classList.replace("hidden", "block");
} else {
  error[0].classList.replace("block", "hidden");
}
}
function createPassword() {
// const passPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/ ;
const count = 8;

if (create_pw.value.length < count) {
  return error[1].classList.replace("hidden", "block");
} else {
  error[1].classList.replace("block", "hidden");
}
}

function confirmPassword() {
if (create_pw.value !== confirm_pw.value || confirm_pw.value === "") {
  return error[2].classList.replace("hidden", "block");
} else {
  error[2].classList.replace("block", "hidden");
}
}

form.addEventListener("submit", function (e) {
e.preventDefault();
checkEmail();
createPassword();
confirmPassword();

email.addEventListener("keyup", checkEmail);
create_pw.addEventListener("keyup", createPassword);
confirm_pw.addEventListener("keyup", confirmPassword);
});
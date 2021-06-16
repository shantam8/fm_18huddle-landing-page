let inputField = document.querySelector("#inputEmail");
let newsletter = document.querySelector("#newsletter");

function submitEmail() {
  let mail = inputField.value;
  let regex = /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/;
console.log(mail);
  if (mail.match(regex)) {
    console.log("submit data");
    newsletter.classList.remove("error");
    newsletter.classList.remove("error");
  } else {
    newsletter.classList.add("error");
    newsletter.classList.add("error");
    console.log("error");
  }
}

function init() {
  document.querySelector("#btnSubmit").addEventListener("click", submitEmail);
}

window.onload = init();

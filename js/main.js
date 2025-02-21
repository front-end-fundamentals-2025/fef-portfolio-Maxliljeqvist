const lnameElement = document.getElementById("lname");
const fnameElement = document.getElementById("fname");
const thankUElement = document.getElementById("thankU");
const buttonElement = document.getElementById("button");

if (localStorage.text) {

thankUElement.innerText = localStorage.text;
}else {
  thankUElement.innerText = "...";
}
buttonElement.addEventListener("click", function (e) {
  e.preventDefault(); 
  let text = lnameElement.value;
  let text2 = fnameElement.value;
  thankUElement.innerText = `Thank you ${text2} ${text} for your submission!`;
});
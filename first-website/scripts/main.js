const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/my-image.jpeg") {
    myImage.setAttribute("src", "images/image-2.jpeg");
  } else {
    myImage.setAttribute("src", "images/my-image.jpeg");
  }
});
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Welcome to Jaisal's Test site!, ${myName}`;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Welcome to Jaisal's Test site!, ${storedName}`;
}
myButton.addEventListener("click", () => {
  setUserName();
});

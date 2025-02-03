const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "image/4B59361A-4691-494B-939F-BB455C863508.jpg") {
    myImage.setAttribute("src", "image/A1F1FE52-B9E5-4EC2-B2FD-FAD66BF345E9.jpg");
  } else {
    myImage.setAttribute("src", "image/4B59361A-4691-494B-939F-BB455C863508.jpg");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    localStorage.setItem("name", myName);
    myHeading.textContent = `愛你臭寶`;
  }
  
if (!localStorage.getItem("name")) {
   setUserName();
} else {
  const storedName = localStorage.getItem("name");
   myHeading.textContent = `愛你臭寶`;
}
  
myButton.onclick = function () {
    setUserName();
  };

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = '愛你臭寶';
    }
  }
  
  
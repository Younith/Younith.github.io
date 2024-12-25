let first_image = document.querySelector("img")

first_image.onclick = () => {
    const mySrc = first_image.getAttribute("src");
    if (mySrc === "images/html-elements.png") {
        first_image.setAttribute("src", "images/website-screenshot.png");
    } else {
        first_image.setAttribute("src", "images/html-elements.png");
    }
  };

let user = document.querySelector("h1")
let change_user_button = document.querySelector("button")

change_user_button.onclick = () => {
    if (user.textContent == "Eng Younith") {
        user.textContent = "Keat Vichinea"
    } else {
        user.textContent = "Eng Younith"
    }
};

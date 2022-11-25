const register = document.getElementById("register");
const calendar = document.getElementById("calendar");
const buttons = document.querySelectorAll('[class~="btn"]');
const welcome = document.getElementById("welcome-container");
const facultyMembers = document.querySelector("#faculty");


  buttons.forEach((button) => {
    if (button.innerText === "READ MORE" || button.innerHTML.includes("READ MORE")) {
      button.setAttribute("data-bs-toggle", "modal");
      button.setAttribute("data-bs-target", "#facultyModal");
    }
  });


const addActiveClass = (e) => {
  console.log(e);
  let element = document.getElementById(e.target.id);
  if (!element.classList.contains("active")) {
    element.classList.add("active");
  } else {
    element.classList.remove("active");
  }
};

register.addEventListener("click", addActiveClass);
calendar.addEventListener("click", addActiveClass);



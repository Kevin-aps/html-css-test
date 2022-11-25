const register = document.getElementById("register");
const calendarBtn = document.getElementById("calendar-button");
const buttons = document.querySelectorAll('[class~="btn"]');
const welcome = document.getElementById("welcome-container");
const facultyMembers = document.querySelector("#faculty");

buttons.forEach((button) => {
  if (
    button.innerText === "READ MORE" ||
    button.innerHTML.includes("READ MORE")
  ) {
    button.setAttribute("data-bs-toggle", "modal");
    button.setAttribute("data-bs-target", "#facultyModal");
  }
});

const addActiveClass = (e) => {
  let element = document.getElementById(e.target.id);
  if (!element.classList.contains("active")) {
    element.classList.add("active");
    addShowClass(e);
  } else {
    element.classList.remove("active");
    removeShowClass(e);
  }
};

const addShowClass = (e) => {
  const parent = e.target.parentElement;
  parent.lastElementChild.classList.add("show");
};

const removeShowClass = (e) => {
  const parent = e.target.parentElement;
  parent.lastElementChild.classList.remove("show");
};

register.addEventListener("click", addActiveClass);
calendarBtn.addEventListener("click", addActiveClass);

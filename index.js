const register = document.getElementById("register");
const calendar = document.getElementById("calendar");
const calendarModal = document.getElementById('calendarModal')

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

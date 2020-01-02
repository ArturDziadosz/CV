import "../scss/style.scss";

const elements = document.querySelectorAll(".skills .column:first-of-type li:nth-of-type(2n +1)");

elements.forEach(element => {
  element.addEventListener("mouseover", function (event) {
    this.nextElementSibling.style.display = "block";
  })
})

elements.forEach(element => {
  element.addEventListener("mouseout", function (event) {
    this.nextElementSibling.style.display = "none";
  })
})

const elements2 = document.querySelectorAll(".skills .column:nth-of-type(2) li:nth-of-type(2n +1)");

elements2.forEach(element => {
  element.addEventListener("mouseover", function (event) {
    this.nextElementSibling.style.display = "block";
  })
})

elements2.forEach(element => {
  element.addEventListener("mouseout", function (event) {
    this.nextElementSibling.style.display = "none";
  })
})

const skills = document.querySelector(".skills").parentElement;
const projects = document.querySelector(".projects").parentElement;
const education = document.querySelector(".school").parentElement.parentElement;
const job = document.querySelector(".job").parentElement.parentElement;
const hobby = document.querySelector(".sectionHobby");
const course1 = document.getElementById("courses").querySelector(".course");
const course2 = document.getElementById("courses").querySelector(".course:nth-of-type(2)");
const course3 = document.getElementById("courses").querySelector(".course:nth-of-type(3)");
const course4 = document.getElementById("courses").querySelector(".course:nth-of-type(4)");
const course5 = document.getElementById("courses").querySelector(".course:nth-of-type(5)");
const course6 = document.getElementById("courses").querySelector(".course:nth-of-type(6)");
const course7 = document.getElementById("courses").querySelector(".course:nth-of-type(7)");


function fadeIn() {
  const windowHeight = window.innerHeight;
  const skillsDistToTop = skills.getBoundingClientRect().top;
  const skillsShow = skillsDistToTop + windowHeight * 0.2 < windowHeight;
  const projectsDistToTop = projects.getBoundingClientRect().top;
  const projectsShow = projectsDistToTop + windowHeight * 0.2 < windowHeight;
  const educationDistToTop = education.getBoundingClientRect().top;
  const educationShow = educationDistToTop + windowHeight * 0.2 < windowHeight;
  const jobDistToTop = job.getBoundingClientRect().top;
  const jobShow = jobDistToTop + windowHeight * 0.2 < windowHeight;
  const hobbyDistToTop = hobby.getBoundingClientRect().top;
  const hobbyShow = hobbyDistToTop + windowHeight * 0.2 < windowHeight;
  const course1DistToTop = course1.getBoundingClientRect().top;
  const course1Show = course1DistToTop + windowHeight * 0.2 < windowHeight;
  const course2DistToTop = course2.getBoundingClientRect().top;
  const course2Show = course2DistToTop + windowHeight * 0.2 < windowHeight;
  const course3DistToTop = course3.getBoundingClientRect().top;
  const course3Show = course3DistToTop + windowHeight * 0.2 < windowHeight;
  const course4DistToTop = course4.getBoundingClientRect().top;
  const course4Show = course4DistToTop + windowHeight * 0.2 < windowHeight;
  const course5DistToTop = course5.getBoundingClientRect().top;
  const course5Show = course5DistToTop + windowHeight * 0.2 < windowHeight;
  const course6DistToTop = course6.getBoundingClientRect().top;
  const course6Show = course6DistToTop + windowHeight * 0.2 < windowHeight;
  const course7DistToTop = course7.getBoundingClientRect().top;
  const course7Show = course7DistToTop + windowHeight * 0.2 < windowHeight;


  if (skillsShow && !skills.classList.contains("fade-in")) {
    skills.classList.add("fade-in")
  }
  if (projectsShow && !projects.classList.contains("fade-in")) {
    projects.classList.add("fade-in")
  }
  if (educationShow && !education.classList.contains("fade-in")) {
    education.classList.add("fade-in")
  }
  if (jobShow && !job.classList.contains("fade-in")) {
    job.classList.add("fade-in")
  }
  if (hobbyShow && !hobby.classList.contains("fade-in")) {
    hobby.classList.add("fade-in")
  }
  if (course1Show && !course1.classList.contains("fade-in")) {
    course1.classList.add("fade-in")
  }
  if (course2Show && !course2.classList.contains("fade-in")) {
    course2.classList.add("fade-in")
  }
  if (course3Show && !course3.classList.contains("fade-in")) {
    course3.classList.add("fade-in")
  }
  if (course4Show && !course4.classList.contains("fade-in")) {
    course4.classList.add("fade-in")
  }
  if (course5Show && !course5.classList.contains("fade-in")) {
    course5.classList.add("fade-in")
  }
  if (course6Show && !course6.classList.contains("fade-in")) {
    course6.classList.add("fade-in")
  }
  if (course7Show && !course7.classList.contains("fade-in")) {
    course7.classList.add("fade-in")
  }
}

fadeIn();

window.addEventListener("scroll", fadeIn);
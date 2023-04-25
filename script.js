window.addEventListener("load",()=>{
    const loader = document.querySelector(".loader")
    const hide = document.querySelector("#hide")
    loader.classList.add("loader-hidden")
    hide.classList.add('loaded')
})

const about_nav = document.getElementById("AboutMe_nav")
about_nav.classList.add("underline")
about_nav.classList.add("text-blue-700")

setTimeout(function() {
    document.querySelector('.textstyle').classList.remove('textstyle');
}, 5000);


function DisplayAbout() {
    const about = document.getElementById("AboutMe")
    const experiences = document.getElementById("Experiences")
    const skills = document.getElementById("Skills")

    const about_nav = document.getElementById("AboutMe_nav")
    const experiences_nav = document.getElementById("Experiences_nav")
    const skill_nav = document.getElementById("Skill_nav")

    about_nav.classList.add("underline")
    about_nav.classList.add("text-blue-700")

    experiences_nav.classList.remove("underline")
    experiences_nav.classList.remove("text-blue-700")
    skill_nav.classList.remove("underline")
    skill_nav.classList.remove("text-blue-700")

    about.style.display = "block"
    experiences.style.display = "none"
    skills.style.display = "none"
}

function DisplayExperiences() {
    const about = document.getElementById("AboutMe")
    const experiences = document.getElementById("Experiences")
    const skills = document.getElementById("Skills")

    const about_nav = document.getElementById("AboutMe_nav")
    const experiences_nav = document.getElementById("Experiences_nav")
    const skill_nav = document.getElementById("Skill_nav")

    experiences_nav.classList.add("underline")
    experiences_nav.classList.add("text-blue-700")

    about_nav.classList.remove("underline")
    about_nav.classList.remove("text-blue-700")
    skill_nav.classList.remove("underline")
    skill_nav.classList.remove("text-blue-700")

    document.body.style.overflow = "auto"
    about.style.display = "none"
    experiences.style.overflow = "auto"
    experiences.style.display = "block"
    skills.style.display = "none"
}
function DisplaySkills() {
    const about = document.getElementById("AboutMe")
    const experiences = document.getElementById("Experiences")
    const skills = document.getElementById("Skills")

    const about_nav = document.getElementById("AboutMe_nav")
    const experiences_nav = document.getElementById("Experiences_nav")
    const skill_nav = document.getElementById("Skill_nav")
    
    skill_nav.classList.add("underline")
    skill_nav.classList.add("text-blue-700")

    about_nav.classList.remove("underline")
    about_nav.classList.remove("text-blue-700")
    experiences_nav.classList.remove("underline")
    experiences_nav.classList.remove("text-blue-700")

    about.style.display = "none"
    experiences.style.display = "none"
    skills.style.display = "block"
}
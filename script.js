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

window.onbeforeunload = () => {
    for(const form of document.getElementsByTagName('form')) {
        form.reset();
    }
}

function DisplayAbout() {
    const about = document.getElementById("AboutMe")
    const animate_img = document.getElementById("animate_img")
    const experiences = document.getElementById("Experiences")
    const skills = document.getElementById("Skills")
    const contact = document.getElementById("Contact")


    
    const about_nav = document.getElementById("AboutMe_nav")
    const experiences_nav = document.getElementById("Experiences_nav")
    const skill_nav = document.getElementById("Skill_nav")
    const contact_nav = document.getElementById("Contact_nav")

    about_nav.classList.add("underline")
    about_nav.classList.add("text-blue-700")

    animate_img.classList.remove("animate__animated")
    experiences_nav.classList.remove("underline")
    experiences_nav.classList.remove("text-blue-700")
    skill_nav.classList.remove("underline")
    skill_nav.classList.remove("text-blue-700")
    contact_nav.classList.remove("underline")
    contact_nav.classList.remove("text-blue-700")

    about.style.display = "block"
    experiences.style.display = "none"
    skills.style.display = "none"
    contact.style.display = "none"
}

function DisplayExperiences() {
    const about = document.getElementById("AboutMe")
    const experiences = document.getElementById("Experiences")
    const skills = document.getElementById("Skills")
    const contact = document.getElementById("Contact")


    const about_nav = document.getElementById("AboutMe_nav")
    const experiences_nav = document.getElementById("Experiences_nav")
    const skill_nav = document.getElementById("Skill_nav")
    const contact_nav = document.getElementById("Contact_nav")

    experiences_nav.classList.add("underline")
    experiences_nav.classList.add("text-blue-700")

    about_nav.classList.remove("underline")
    about_nav.classList.remove("text-blue-700")
    skill_nav.classList.remove("underline")
    skill_nav.classList.remove("text-blue-700")
    contact_nav.classList.remove("underline")
    contact_nav.classList.remove("text-blue-700")

    document.body.style.overflow = "auto"
    about.style.display = "none"
    experiences.style.overflow = "auto"
    experiences.style.display = "block"
    skills.style.display = "none"
    contact.style.display = "none"
}
function DisplaySkills() {
    const about = document.getElementById("AboutMe")
    const experiences = document.getElementById("Experiences")
    const skills = document.getElementById("Skills")
    const contact = document.getElementById("Contact")


    const about_nav = document.getElementById("AboutMe_nav")
    const experiences_nav = document.getElementById("Experiences_nav")
    const skill_nav = document.getElementById("Skill_nav")
    const contact_nav = document.getElementById("Contact_nav")
    
    skill_nav.classList.add("underline")
    skill_nav.classList.add("text-blue-700")

    about_nav.classList.remove("underline")
    about_nav.classList.remove("text-blue-700")
    experiences_nav.classList.remove("underline")
    experiences_nav.classList.remove("text-blue-700")
    contact_nav.classList.remove("underline")
    contact_nav.classList.remove("text-blue-700")

    about.style.display = "none"
    experiences.style.display = "none"
    skills.style.display = "block"
    contact.style.display = "none"
}

function DisplayContact(){
    const about = document.getElementById("AboutMe")
    const experiences = document.getElementById("Experiences")
    const skills = document.getElementById("Skills")
    const contact = document.getElementById("Contact")

    const about_nav = document.getElementById("AboutMe_nav")
    const experiences_nav = document.getElementById("Experiences_nav")
    const skill_nav = document.getElementById("Skill_nav")
    const contact_nav = document.getElementById("Contact_nav")

    contact_nav.classList.add("underline")
    contact_nav.classList.add("text-blue-700")

    about_nav.classList.remove("underline")
    about_nav.classList.remove("text-blue-700")
    skill_nav.classList.remove("underline")
    skill_nav.classList.remove("text-blue-700")
    experiences_nav.classList.remove("underline")
    experiences_nav.classList.remove("text-blue-700")

    contact.style.display = "block"
    about.style.display = "none"
    experiences.style.display = "none"
    skills.style.display = "none"
}

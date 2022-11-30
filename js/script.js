var typed = new Typed(".typing",{
    strings:["","Web Developer","C++ Programmer","Python Programmer"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})


const alternateNav = document.querySelectorAll(".categeory");
function setActiveCategeory(categeory)
{
    alternateNav.forEach((style)=>{
        if(categeory===style.getAttribute("title")){
            style.classList.add("active");
        }
        else{
            style.classList.remove("active")
        }
    })
}


const home = document.querySelector("#home");
const about = document.querySelector("#about");
const portfolio = document.querySelector("#portfolio");
const contact = document.querySelector("#contact");
// const services = document.querySelector("#services");

// services.addEventListener("mouseover",()=>{
//     alternateNav.forEach((style)=>{
//         if('services'===style.getAttribute("title")){
//             style.classList.add("active");
//         }
//         else{
//             style.classList.remove("active")
//         }
//     })
// })
home.addEventListener("mouseover",()=>{
    alternateNav.forEach((style)=>{
        if('home'===style.getAttribute("title")){
            style.classList.add("active");
        }
        else{
            style.classList.remove("active")
        }
    })
})
about.addEventListener("mouseover",()=>{
    alternateNav.forEach((style)=>{
        if('about'===style.getAttribute("title")){
            style.classList.add("active");
        }
        else{
            style.classList.remove("active")
        }
    })
})
portfolio.addEventListener("mouseover",()=>{
    alternateNav.forEach((style)=>{
        if('portfolio'===style.getAttribute("title")){
            style.classList.add("active");
        }
        else{
            style.classList.remove("active")
        }
    })
})
contact.addEventListener("mouseover",()=>{
    alternateNav.forEach((style)=>{
        if('contact'===style.getAttribute("title")){
            style.classList.add("active");
        }
        else{
            style.classList.remove("active")
        }
    })
})
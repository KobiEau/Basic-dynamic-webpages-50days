<<<<<<< HEAD
const panels = document.querySelectorAll('.panel');

panels.forEach((panel) => {
 panel.addEventListener('click',() =>{
    removeActiveClasses();
    panel.classList.toggle('active')
 })
});

function removeActiveClasses(){
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
=======
const panels = document.querySelectorAll('.panel');

panels.forEach((panel) => {
 panel.addEventListener('click',() =>{
    removeActiveClasses();
    panel.classList.toggle('active')
 })
});

function removeActiveClasses(){
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
>>>>>>> c80b7c9150b6589211a715506c55698279865305
}
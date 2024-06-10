<<<<<<< HEAD
const progress=document.getElementById('progress')
const prev= document.getElementById('prev')
const next= document.getElementById('next')
const circles= document.querySelectorAll('.circle')

let currentActive=1

next.addEventListener('click',() =>{ //Adding event listener to next btn
    currentActive++

    if(currentActive> circles.length){
        currentActive=circles.length
    }
    update()
})

prev.addEventListener('click',() =>{ //Adding event listener to prev btn
    currentActive--

    if(currentActive< 1){
        currentActive=1
    }
    update()
})

function update () {
    circles.forEach((circle,idx) => { //cycling through each click, adding and removing the .active class
        if(idx<currentActive){
            circle.classList.add('active')
        }
        else{
            circle.classList.remove('active')
        }

    })

    const actives =document.querySelectorAll('.active') // initializing all the active circles

    progress.style.width=(actives.length -1)/(circles.length -1)*100+'%'  // equating the width of the line by dividing the number of
    //active circles by the total number of circles

    // console.log((actives.length -1)/(circles.length -1)*100)

    if(currentActive ===1){   // uses if statements to access the "disabled" property of the elements
        prev.disabled = true
    }
    else if (currentActive === circles.length){
        next.disabled =true
    }
    else{
        prev.disabled=false
        next.disabled =false
    }
=======
const progress=document.getElementById('progress')
const prev= document.getElementById('prev')
const next= document.getElementById('next')
const circles= document.querySelectorAll('.circle')

let currentActive=1

next.addEventListener('click',() =>{ //Adding event listener to next btn
    currentActive++

    if(currentActive> circles.length){
        currentActive=circles.length
    }
    update()
})

prev.addEventListener('click',() =>{ //Adding event listener to prev btn
    currentActive--

    if(currentActive< 1){
        currentActive=1
    }
    update()
})

function update () {
    circles.forEach((circle,idx) => { //cycling through each click, adding and removing the .active class
        if(idx<currentActive){
            circle.classList.add('active')
        }
        else{
            circle.classList.remove('active')
        }

    })

    const actives =document.querySelectorAll('.active') // initializing all the active circles

    progress.style.width=(actives.length -1)/(circles.length -1)*100+'%'  // equating the width of the line by dividing the number of
    //active circles by the total number of circles

    // console.log((actives.length -1)/(circles.length -1)*100)

    if(currentActive ===1){   // uses if statements to access the "disabled" property of the elements
        prev.disabled = true
    }
    else if (currentActive === circles.length){
        next.disabled =true
    }
    else{
        prev.disabled=false
        next.disabled =false
    }
>>>>>>> c80b7c9150b6589211a715506c55698279865305
}    
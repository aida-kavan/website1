
let $ = document;


let Deletebtn = $.querySelectorAll('.bin')
let TodoList = $.querySelector('.todos')
let section = document.querySelector(".to-do");
let input = $.getElementById('new-task')
let Enterbtn = $.querySelector('.span-img')
let  Form = $.getElementById('form')
let emptySection = $.querySelector('.empty-sec')
let preload = $.querySelector('.preLoad')
let mainCont = $.querySelector('.main-container')


Deletebtn.forEach(function (btn) {
    btn.addEventListener('click' , function (event) {
        event.target.parentElement.remove()
    })
    })

input.addEventListener('keydown', function (event) {

    let NewTask = event.target.value.trim()
    if(event.keyCode === 13){
        event.preventDefault()
        if (NewTask) {
            NewToDo(NewTask)
        }
    }
    
})


Enterbtn.addEventListener('click'  , function () {
  NewTask = input.value
  if (NewTask) {
    NewToDo( NewTask)
  }
    
} )






function NewToDo( NewTask) {
    let newToDoSection = $.createElement('section')
    newToDoSection.className = 'to-do'

    let newToDoH4 = $.createElement('h4')
    newToDoH4.className = 'title'

    newToDoSection.append(newToDoH4)

    let newToDoimg = $.createElement('img')
    newToDoimg.className = 'bin'
    newToDoimg.src = "trash-bin.png"
    newToDoSection.append(newToDoimg)

    newToDoH4.innerHTML = NewTask


    TodoList.appendChild(newToDoSection)
    newToDoSection.addEventListener('click' , function (event) {
        event.target.parentElement.remove()
    } )

    Form.reset()
    
    emptySection.remove()
    

    
    
}


function onloadHandler() {
    preload.remove()
    mainCont.style.display = 'flex'
}

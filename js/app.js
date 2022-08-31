const btnAdd = document.getElementById('add')
const input = document.querySelector('input')
const list = document.getElementById('list')
const subtext = document.getElementById('subtext')

btnAdd.addEventListener('click', function(evt){
  const li = document.createElement('li')

  if (input.value !== ""){
    li.textContent = input.value
    subtext.innerText = "Click on tasks to remove them!"
    document.querySelector('ul').appendChild(li)
  }
  
})

list.addEventListener('click', function(evt){
  let menu = document.getElementById('list')
  subtext.innerText = "Your tasks:"
  menu.removeChild(evt.target)
})


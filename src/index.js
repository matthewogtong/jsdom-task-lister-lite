document.addEventListener("DOMContentLoaded", () => {
  // your code here

  const userTaskForm = document.querySelector('#create-task-form')
  const userTaskDescription = document.querySelector('#new-task-description')
  const userToDoList = document.querySelector('#tasks') 

  userTaskForm.addEventListener('submit', createNewTask)

})

const createNewTask = function(event) {
  console.log(event)
  event.preventDefault()

  const userToDoList = document.querySelector('#tasks') 
  const userTaskDescription = document.querySelector('#new-task-description')

  const newTask = userTaskDescription.value
  const li = document.createElement('li')
  li.textContent = newTask
  userToDoList.append(li)
  event.target.reset()
}

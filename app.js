// Define UI Vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

loadEventListerners();

//LoadEvent Listerners - Listen for submit event and add task.
function loadEventListerners() {
  // Add task event
  form.addEventListener('submit', addTask);

  //remove task event
  taskList.addEventListener('click',removeTask);

  //Clear tasks event
  clearBtn.addEventListener('click',clearTasks);

}


// Add Task
function addTask(e) {
  if(taskInput.value === '') {
    alert('Add a task');  
  }

  // Create li element
  const li = document.createElement('li');


  // Add class - use collection-item to ensure formating is picked up in materialize.

  li.className = 'collection-item'; 
  //Create text node and append to li
  li.appendChild(document.createTextNode(taskInput.value));

  //Create new link element.
  const link = document.createElement('a');

  //Add Class
  link.className = 'delete-item secondary-content';

  //Add icon html  
  link.innerHTML = '<i class="fa fa-remove"></i>';

  //Append the link to li
  li.appendChild(link);



  // Append link to ul
  taskList.appendChild(li);

  // Clear input 
  taskInput.value = '';

console.log(li);

//prevent default form submit action.
e.preventDefault();
}


// Remove task
function removeTask(e) {
  if(e.target.parentElement.classList.contains
    ('delete-item')) {
      if(confirm('Are you sure?')) {
      e.target.parentElement.parentElement.remove();
    }
  }
}


// Clear Tasks
function clearTasks() {
  //example 1
  //taskList.innerHTML = '';

  //Faster method
  if(confirm('Are you sure you want to delete all tasks?')) {
    while(taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
    }
  }
}

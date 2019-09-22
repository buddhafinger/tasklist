// Define UI Vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

//Load Event Listerners
loadEventListerners();



//Events to listen for events and trigger actions.
function loadEventListerners() {
  // Add task event
  form.addEventListener('submit', addTask);

  //remove task event
  taskList.addEventListener('click',removeTask);

  //Clear tasks event
  clearBtn.addEventListener('click',clearTasks);

  // Filter tasks event
  filter.addEventListener('keyup',filterTasks);
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



// Filter tasks

//Apply function on event 
function filterTasks(e) {

  //create text variable to capture event text.
  const text = e.target.value.toLowerCase();
  //log text for debug.
  //console.log(text);

  //Use collection task items as iterator
  document.querySelectorAll('.collection-item').forEach()
  (function(task) {
    //Get value for each item
    const item = task.firstChild.textContent;

    //If item matches text content of text display it.
    if(item.toLowerCase().indexOf(text) != -1){
      task.style.display = 'block';

    //if it doesn't match then show results
    } else {
      task.style.display = 'none';
    }
  });

}
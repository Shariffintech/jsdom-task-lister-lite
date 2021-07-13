
// function logSubmit(event){
//   log.textContent = `Task entered! Time: ${event.timeStamp}`;
//   event.preventDefault();
// }
// document.addEventListener("submit", updateTasks);

// document.addEventListener("keydown", function(e){ 
//   if (e.key == "Enter") {
//     var task = document.getElementById("create-task-form").value;
//     var taskList = document.getElementById("task-list");
//     taskList.innerHTML += "<li>" + task + "</li>";
//     document.getElementById("create-task-form").value = "";
//   }
//   updateTasks();
// });

// function updateTasks(){
//   document.getElementById("create-task-form").textContent = "";
//   logSubmit();
// }

document.addEventListener("DOMContentLoaded", function(){
  //declaring form and relevant input fields 
  const newTaskForm = document.getElementById("create-task-form");
  const newTaskDescription = document.getElementById("create-task-description");
  const newTaskPriority = document.getElementById("create-task-priority");
  const newTaskUl = document.getElementById("task");

  //attaching event listeners
  newTaskForm.addEventListener("submit", createNewTask);

});

const createNewTask = function(event){
  //retreive the form values
  event.preventDefault();
  // prevent default form submission
  const taskDescription = newTaskDescription.value;
  const taskPriority = newTaskPriority.value;
  const taskList = document.getElementById("task-list");
  const newTask = document.createElement("li");
  newTask.innerText = taskDescription;

  appendTask(newTask);
  event.target.reset();
};

const appendTask = function(task){
  document.getElementById("tasks").appendChild(task);
};

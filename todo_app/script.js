  let tasks = [];
  function addTask() {
      let taskInput = document.getElementById("taskInput");
      let task = taskInput.value.trim();
      if (task !== "") {
          tasks.push(task);
          displayTasks();
          taskInput.value = "";
      } else {
          alert("Please enter a task.");
      }
  }
  // Function to edit a task in the list
  function editTask(index) {
      let newTask = prompt("Enter new task:");
      if (newTask !== null && newTask.trim() !== "") {
          tasks[index] = newTask.trim();
          displayTasks();
      }
  }
  // Function to delete a task from the list
  function deleteTask(index) {
          tasks.splice(index, 1);
          displayTasks();
      }

  // Function to display all tasks in the list
  function displayTasks() {
      let taskList = document.getElementById("taskList");
      taskList.innerHTML = "";
      if (tasks.length === 0) {
          taskList.innerHTML = " ";
      } else {
          tasks.forEach(function(task, index) {
              let listItem = document.createElement("li");
              listItem.textContent = task;
              // Add edit and delete buttons
              let editButton = document.createElement("button");
              editButton.textContent = "Edit";
              editButton.onclick = function() {
                  editTask(index);
              };
              let deleteButton = document.createElement("button");
              deleteButton.textContent = "Delete";
              deleteButton.onclick = function() {
                  deleteTask(index);
              };
              listItem.appendChild(editButton);
              listItem.appendChild(deleteButton);
              taskList.appendChild(listItem);
          });
      }
  }
  // Initial display of tasks
  displayTasks();
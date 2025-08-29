// Function to add a new task
function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();

  // Prevent empty tasks
  if (taskText === "") return;

  // Create a new list item
  const li = document.createElement("li");
  li.textContent = taskText;

  // Mark task as completed when clicked
  li.addEventListener("click", function () {
    li.classList.toggle("completed");
  });

  // Create delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "X";
  deleteBtn.classList.add("delete");

  // Delete task when button is clicked
  deleteBtn.onclick = function () {
    li.remove();
  };

  // Add delete button inside list item
  li.appendChild(deleteBtn);

  // Add task to the list
  document.getElementById("taskList").appendChild(li);

  // Clear input field
  input.value = "";
}

// Allow pressing "Enter" key to add task
document.getElementById("taskInput").addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    addTask();
  }
});

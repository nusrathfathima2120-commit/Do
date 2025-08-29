// Add a new task
function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();

  // Stop if input is empty
  if (taskText === "") return;

  // Create list item
  const li = document.createElement("li");
  li.textContent = taskText;

  // Toggle completed class when clicked
  li.addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  // Create delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "X";
  deleteBtn.classList.add("delete");

  // Remove task when delete button is clicked
  deleteBtn.addEventListener("click", (e) => {
    e.stopPropagation(); // prevent toggling completion
    li.remove();
  });

  // Add button inside list item
  li.appendChild(deleteBtn);

  // Add list item to the UL
  document.getElementById("taskList").appendChild(li);

  // Clear input field
  input.value = "";
}

// Allow pressing Enter to add a task
document.getElementById("taskInput").addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    addTask();
  }
});

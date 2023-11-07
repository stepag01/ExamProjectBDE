interface TodoList {
  container: HTMLDivElement;
  heading: HTMLHeadingElement;
  todoTextArea: HTMLDivElement;
  taskInput: HTMLInputElement;
  addButton: HTMLButtonElement;
  taskList: HTMLUListElement;
}

const todoList: TodoList = {
  container: document.querySelector(".container") as HTMLDivElement,
  heading: document.querySelector("h1") as HTMLHeadingElement,
  todoTextArea: document.querySelector("#todo-text-area") as HTMLDivElement,
  taskInput: document.querySelector("#task") as HTMLInputElement,
  addButton: document.querySelector("#btn") as HTMLButtonElement,
  taskList: document.querySelector("#taskList") as HTMLUListElement,
};


// Your TypeScript code to add tasks
const tasksToAdd = ["Task 1", "Task 2", "Task 3"];

tasksToAdd.forEach((taskText) => {
  const newTask = document.createElement("li");
  newTask.textContent = taskText;
  todoList.taskList.appendChild(newTask);
});
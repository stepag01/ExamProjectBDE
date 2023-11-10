
interface addItemTodo {      // Interface addItemTodo, properties -> tilføje ny todo item, skal være en string 
  type: 'ADD_TODO';          
  text: string;
}
 
type TodoList = addItemTodo[];     // Definerer en type (TodoList)

type TodoAction = addItemTodo | ToggleTodoAction;   // Union type, mulige de actions som kan udføres på Todo listen.

interface ToggleTodoAction {   // Definerer action, toggle den færdige status (Todo item)
  type: 'TOGGLE_TODO';
  id: number;
}

const addButton = document.querySelector("#btn") as HTMLButtonElement; 

 
function testme() {      //Funktion -> Henter aktuel værdi af HTML-input-element (id'et "task") ->og gemmer i variabel "text".
  const taskInput = document.querySelector("#task") as HTMLInputElement;
  const text = taskInput.value;
  if (text) {                         //If-statement -> Check variabel text = true
    const action: addItemTodo = {     //Objekt - Type property + text
      type: 'ADD_TODO',               //Intention -> tilføje en ny item med specifik text indhold.
      text: text,                     
    };
    console.log("test2", action);

 
    taskInput.value = "";             // Reset'er input feltet
    console.log("todo: " + text);


    const todoList = document.querySelector("#taskList") as HTMLUListElement;
    
    
    const newTodoItem = document.createElement("li");
    newTodoItem.textContent = text;
    todoList.appendChild(newTodoItem);


    
    const deleteButton = document.createElement("button");   // Slet-knap til hver todo-item. 
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => {
      todoList.removeChild(newTodoItem);
    });

   
 
    deleteButton.style.backgroundColor = "#ff8800";      // Direkte styling af delete-knappen
    deleteButton.style.color = "#black"; 
    deleteButton.style.padding = "5px 10px";
    deleteButton.style.cursor = "pointer"; 
    deleteButton.style.border = "none"; 
    deleteButton.style.fontSize = "15px"; 
    deleteButton.style.fontWeight = "600"; 


    newTodoItem.appendChild(deleteButton);   // Tilføjelse af delete-knap til todo item

    todoList.appendChild(newTodoItem);       // Tilføjelse af ny todo item til listen 
  }
}

addButton.addEventListener("click", testme);

export type { addItemTodo, TodoList, TodoAction, testme };
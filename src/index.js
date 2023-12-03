import './style.css';
import { parse, format } from 'date-fns';


class ElementCreator {
    constructor(elementType, id = null, textContent = null, classList = null, eventListener = null) {
        this.element = document.createElement(elementType);
        if (id) {
            this.element.setAttribute('id', id);
        }
        if (textContent) {
        this.element.textContent = textContent;
        }
        if (classList) {
            this.element.classList.add(classList);
        }
        if (eventListener && typeof eventListener === 'function') {
            this.element.addEventListener('click', eventListener);
        }
    }

    appendChild(childElement) {
        this.element.appendChild(childElement);
      }

    getElement() {
    return this.element;
    }
}

class Todo {
    constructor(priority, title, details, dueDate) {
        this.priority = priority;
        this.title = title;
        this.details = details;
        this.dueDate = dueDate;
    }
}

class Project {
    constructor(name) {
        this.name = name;
        this.todos = [];
    }

    addTodo(todo) {
        this.todos.push(todo);
    }

    removeTodoAtIndex(index) {
        this.todos.splice(index, 1);
    }
}

class TodoList {
    constructor() {
        this.projects = [new Project('Default Project')];
        this.currentProject = this.projects[0]; // Default project initially
    }

    createProject(name) {
        const newProject = new Project(name);
        this.projects.push(newProject);
        return newProject;
    }

    changeCurrentProject(project) {
        this.currentProject = project;
    }

    getAllProjects() {
        return this.projects;
    }

    getTodosFromProject(project) {
        return project.todos;
    }
    
}

class TodoItem {
    constructor(elementType, id = null, type = null, placeholder = null, value = null ) {
        this.element = document.createElement(elementType);
        if (id) {
            this.element.setAttribute('id', id);
          }
        if (type) {
            this.element.setAttribute('type', type);
        }
        if (placeholder) {
            this.element.setAttribute('placeholder', placeholder)
        }      
        if (value) {
            this.element.setAttribute('value', value)
        }
        
        
    }

    getElement() {
        return this.element;
      }
};

class PopUpInput {
    constructor(elementType, id = null, type = null, placeholder = null, textContent = null, value = null ) {
        this.element = document.createElement(elementType);
        if (id) {
            this.element.setAttribute('id', id);
          }
        if (type) {
            this.element.setAttribute('type', type);
        }
        if (placeholder) {
            this.element.setAttribute('placeholder', placeholder)
        }  
        if (textContent) {
            this.element.textContent = textContent;
            }    
        if (value) {
            this.element.setAttribute('value', value)
        }
    }
    getElement() {
        return this.element;
        }
}


const todoList = new TodoList();
const projectsList = new ElementCreator('div','projectsList', 'Projects List');
const todosList = new ElementCreator('div','todosList');
const todoDetails = new ElementCreator('div','todoDetails');


const element = new ElementCreator('div', '','' , 'hello');
const topBar = new ElementCreator('div', 'top-bar');
const topBarImage = new ElementCreator('div', 'logo');
const h1Header = new ElementCreator('h1', 'header', 'To Do List');

const sideBarContainer = new ElementCreator('div', 'side-bar-container');
const sideBarNav = new ElementCreator('div', 'side-bar-nav');
const navContainer = new ElementCreator('div', 'nav-container');////
// homeMenu = new HomeMenu(homeMenuItems);
const projectsInput = new TodoItem('input', 'newProjectInput','text','Enter new project name' );
const projectsInputButton = new ElementCreator('button', 'projectButton', 'Create Project');
projectsInputButton.getElement().addEventListener('click', () => {
    createNewProject();
})

const noteLink = new ElementCreator('ul', 'notes' );
const noteLinkItem = new ElementCreator('li', 'added-note', 'Note\'s');

const addNewButton = new ElementCreator('button', 'addBookButton', '+', null, () => {
    createPopUp();
  });

const mainDisplaySection = new ElementCreator('div', 'main');   
const mainHeader = new ElementCreator('h3', 'main-header');   
const userToDoList= new ElementCreator('ul', 'user-to-do-list');    
const todoItems = new ElementCreator('li','','todo1', 'todo-items');
const titleInput = new TodoItem('input', 'textarea-title', 'text', 'Title:' );
const detailInput = new TodoItem('input', 'textarea', 'text', 'Details:');
const dateInput = new TodoItem();
const select = new TodoItem();
const optionLow = new TodoItem();
const optionMedium = new TodoItem();
const optionHigh = new TodoItem();
const button = new TodoItem();

element.appendChild(topBar.getElement());
topBar.appendChild(topBarImage.getElement());
topBar.appendChild(h1Header.getElement());
element.appendChild(sideBarContainer.getElement());
sideBarContainer.appendChild(sideBarNav.getElement());
sideBarNav.appendChild(navContainer.getElement());    
navContainer.appendChild(projectsInput.getElement());
navContainer.appendChild(projectsInputButton.getElement());
navContainer.appendChild(projectsList.getElement());
navContainer.appendChild(todosList.getElement());
navContainer.appendChild(todoDetails.getElement());
navContainer.appendChild(noteLink.getElement());
noteLink.appendChild(noteLinkItem.getElement());
navContainer.appendChild(addNewButton.getElement());
element.appendChild(mainDisplaySection.getElement());
mainDisplaySection.appendChild(mainHeader.getElement());
mainDisplaySection.appendChild(userToDoList.getElement());
userToDoList.appendChild(todoItems.getElement());


// Function to create a new project using user input
function createNewProject() {
    const newProjectName = document.getElementById('newProjectInput').value.trim();
    if (newProjectName !== '') {
        const newProject = todoList.createProject(newProjectName);
        displayProject(); // Update the displayed project list
        displayTodos(newProject); // Show the todos of the newly created project
    } else {
        alert('Please provide a valid project name.');
    }
}
function displayProject() {
    const projects = todoList.getAllProjects();
    const newProject = projects[projects.length - 1]; // Get the newly created project

    const projectDiv = document.createElement('div');
    projectDiv.textContent = newProject.name;
    projectDiv.addEventListener('click', () => {
        displayTodos(newProject);
    });

    projectsList.appendChild(projectDiv); // Append only the new project
}
// // Function to display projects
// function displayProjects() {
//     // projectsList = document.getElementById('projectsList');
//     console.log(projectsList.getElement());
//     projectsList.innerHTML = '';

//     todoList.projects.forEach(project => {
//         const projectDiv = document.createElement('div');
//         projectDiv.textContent = project.name;
//         projectDiv.addEventListener('click', () => {
//             displayTodos(project);
//         });
//         projectsList.appendChild(projectDiv);
//     });
// }

// Function to display todos in a project
function displayTodos(project) {
    // const todosList = document.getElementById('todosList');
    console.log(todosList)
    todosList.innerHTML = '';

    project.todos.forEach((todo, index) => {
        const todoDiv = document.createElement('div');
        todoDiv.textContent = `${todo.title} - Due: ${todo.dueDate} - Priority: ${todo.priority}`;
        todoDiv.addEventListener('click', () => {
            displayTodoDetails(todo, index);
        });
        todosList.appendChild(todoDiv);
    });
}

// Function to display todo details
function displayTodoDetails(todo, index) {
    // const todoDetails = document.getElementById('todoDetails');
    console.log(todoDetails)
    todoDetails.innerHTML = `
        <h3>${todo.title}</h3>
        <p>Description: ${todo.description}</p>
        <p>Due Date: ${todo.dueDate}</p>
        <p>Priority: ${todo.priority}</p>
        <button onclick="deleteTodo(${index})">Delete</button>
    `;
}

// Function to delete a todo
function deleteTodo(index) {
    todoList.currentProject.removeTodoAtIndex(index);
    displayTodos(todoList.currentProject);
    const todoDetails = document.getElementById('todoDetails');
    todoDetails.innerHTML = '';
}

// Initial display of projects
// displayProjects();


const createPopUp = function() {
      
      // Create elements
      // this.createNewPopUp = new ElementCreator('div', 'create-new' );
      const createNewPopUp = document.createElement('div');
      createNewPopUp.id = 'create-new';
    //   createNewPopUp.style.display = 'none';  
      const topBarTodo = document.createElement('div');
      topBarTodo.id = 'top-bar-todo';  
      const headerTodo = document.createElement('h1');
      headerTodo.id = 'header-todo';
      headerTodo.textContent = 'Create new task';
      const sideBarCreateNew = document.createElement('div');
      sideBarCreateNew.id = 'side-bar-create-new';
      const navContainerTodo = document.createElement('div');
       navContainerTodo.id = 'nav-container-todo';
      const homeMenuTodo = document.createElement('ul');//
       homeMenuTodo.id = 'home-menu-todo';
      const menuItemToDo = document.createElement('li');  
       menuItemToDo.classList.add('menu-item-todo');
       menuItemToDo.textContent = 'To Do';
      const menuItemProject = document.createElement('li');//
       menuItemProject.classList.add('menu-item-todo');//
       menuItemProject.textContent = 'Project';
      const menuItemNote = document.createElement('li');
       menuItemNote.classList.add('menu-item-todo');
       menuItemNote.textContent = 'Note';
      const mainCreateNew = document.createElement('div');
       mainCreateNew.id = 'main-create-new';  
 
      const mainCreateNewMenu =document.createElement('div');
       mainCreateNewMenu.id = 'create-new-menu';


      const dateDiv = document.createElement('div');
      const labelDate = document.createElement('label');
      labelDate.setAttribute('for', 'dueDate');
      labelDate.textContent = 'Due Date:';
      const dateInput = document.createElement('input');
      dateInput.setAttribute('type', 'text');
      dateInput.setAttribute('id', 'dueDate');
      dateInput.setAttribute('placeholder', 'MM/DD/YYYY');
    

      const priorityDiv = document.createElement('div');
       priorityDiv.id = 'priority';   
       priorityDiv.textContent = 'Priority: '
    
      const priorityDivSub1 = document.createElement('select');
       priorityDivSub1.id = 'priorityInput'; 

      const priorityDivSub2 = document.createElement('div');
       priorityDivSub2.id = 'priority-sub-2'; 

      const lowBtn = document.createElement('option');
       lowBtn.id = 'low';
       lowBtn.textContent = 'LOW';
       lowBtn.value = 'low';
      const mediumBtn = document.createElement('option');
       mediumBtn.id = 'medium';
       mediumBtn.textContent = 'MEDIUM';
       mediumBtn.value = 'medium';
      const highBtn = document.createElement('option');
       highBtn.id = 'high';
       highBtn.textContent = 'HIGH';
       highBtn.value = 'high';

    //    const createTodo = function () {
    //     // const inputValue = titleInput.getElement();
    //     // console.log(inputValue.value);
    //     // userToDoList.appendChild(inputValue);
    //    }
      const addToDoBtn = document.createElement('button');
       addToDoBtn.id = 'add-to-do';
       addToDoBtn.textContent = 'Add To Do';
       addToDoBtn.addEventListener('click', () => {
        createTodo();
        document.body.removeChild(createNewPopUp);
          
        })
      const closeButton = document.createElement('button');
       closeButton.id = 'close';
       closeButton.textContent = 'x';
       closeButton.addEventListener('click', function() {
        this.parentElement.remove(element);
       })

       
       
       console.log(addToDoBtn)
  
      // ... (rest of your element creations)
  
      document.body.prepend(createNewPopUp);
      // Append elements to construct the popup
      
  
  
      createNewPopUp.appendChild(headerTodo);
      createNewPopUp.appendChild(closeButton);
      // createNewPopUp.appendChild(topBarTodo);
  
      createNewPopUp.appendChild(sideBarCreateNew);
      sideBarCreateNew.append(navContainerTodo);
      navContainerTodo.append(homeMenuTodo);
      homeMenuTodo.append(menuItemToDo);
      homeMenuTodo.append(menuItemProject);
      homeMenuTodo.append(menuItemNote);
  
      createNewPopUp.appendChild(mainCreateNew);
    //   mainCreateNew.append(mainTextAreaTitle);
      mainCreateNew.appendChild(titleInput.getElement());
    //   mainCreateNew.append(mainTextArea);
      mainCreateNew.append(detailInput.getElement());
      mainCreateNew.append(mainCreateNewMenu);
      mainCreateNewMenu.append(dateDiv);
      dateDiv.append(labelDate);
      dateDiv.append(dateInput);
      mainCreateNewMenu.append(priorityDiv);
      priorityDiv.append(priorityDivSub1);

      priorityDiv.append(priorityDivSub2);
      
      priorityDivSub1.append(lowBtn);
      priorityDivSub1.append(mediumBtn);
      priorityDivSub1.append(highBtn);
      priorityDivSub2.append(addToDoBtn);
  
      closeButton.addEventListener('click', () => {
        close();
      });
    
      function close() {
        createNewPopUp.style.display = 'none';
      }
    }; 
   
const createTodo = function() {
    const priority = document.getElementById('priorityInput').value;
        const title = document.getElementById('textarea-title').value;
        const details = document.getElementById('textarea').value;
        const dueDate = document.getElementById('dueDate').value;
        // const checklist = document.getElementById('check').value; 
    
    
        const newTodo = new Todo(priority, title, details, dueDate);
        displayTodo(newTodo);
    }
    
const displayTodo = function(todo) {
const todoList = document.getElementById('user-to-do-list');
const listItem = document.createElement('li');
listItem.classList.add('todo-items');
listItem.innerHTML = `- <strong>${todo.title}</strong> - ${todo.details} - Due: ${todo.dueDate} `;
if(todo.priority == 'low') {
    listItem.classList.add('low')
}
if(todo.priority == 'medium') {
    listItem.classList.add('medium')
}
if(todo.priority == 'high') {
    listItem.classList.add('high')
}
todoList.appendChild(listItem);
console.log(listItem)


const priority = document.getElementById('priorityInput');
const title = document.getElementById('textarea-title');
const details = document.getElementById('textarea');
const dueDate = document.getElementById('dueDate');

priority.value = '';
title.value = '';
details.value = '';
dueDate.value = '';
}
  

// const dueDateInput = document.getElementById('dueDate');

// // Initialize date-fns with the current date
// const currentDate = new Date();

// // Create a date picker using flatpickr or any other library or native HTML input type="date"

// // Example: Using flatpickr with date-fns
// flatpickr(dueDateInput, {
//     dateFormat: 'Y-m-d', // Date format (change as needed)
//     minDate: 'today', // Set minimum date as today
//     onChange: function(selectedDates) {
//         if (selectedDates.length > 0) {
//             const selectedDate = selectedDates[0];
//             const formattedDate = format(selectedDate, 'yyyy-MM-dd'); // Format the date
//             console.log('Selected date:', formattedDate);
//             // You can use the selected date within your to-do list application logic
//             // For instance, when creating or updating a task
//         }
//     }
// });

// Example: Using native HTML input type="date"
// dueDateInput.addEventListener('change', (event) => {
//     const selectedDate = event.target.value;
//     console.log('Selected date:', selectedDate);
//     // You can use the selected date within your to-do list application logic
//     // For instance, when creating or updating a task
// });





// Adding to the DOM



document.body.appendChild(element.getElement());
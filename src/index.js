import './style.css';
import Icon from './icon.jpg';
import printMe from './print.js';


class ElementCreator {
  constructor(elementType, id = null, textContent = null, classList= null, eventListener = null) {
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

  setAttribute(attribute, value) {
    this.element.setAttribute(attribute, value);
  }

 
  appendChild(childElement) {
    this.element.appendChild(childElement);
  }


  getElement() {
    return this.element;
  }
}


// Usage
const element = new ElementCreator('div', '','' , 'hello');
const topBar = new ElementCreator('div', 'top-bar');
const topBarImage = new ElementCreator('div', 'logo');
const h1Header = new ElementCreator('h1', 'header', 'To Do List');

const sideBarContainer = new ElementCreator('div', 'side-bar-container');
const sideBarNav = new ElementCreator('div', 'side-bar-nav');
const navContainer = new ElementCreator('div', 'nav-container');////
// homeMenu = new HomeMenu(homeMenuItems);
const noteLink = new ElementCreator('ul', 'notes' );
const noteLinkItem = new ElementCreator('li', 'added-note', 'Note\'s');
const addNewButton = new ElementCreator('button', 'addBookButton', '+', null, () => {
  const popup = new CreateNewToDoPopup();
  // To open the popup:
  popup.open();
});

const mainDisplaySection = new ElementCreator('div', 'main');   
const mainHeader = new ElementCreator('h3', 'main-header');   
const userToDoList= new ElementCreator('ul', 'user-to-do-list');    
const todoItems = new ElementCreator('li','','todo1', 'todo-items');



element.appendChild(topBar.getElement());
topBar.appendChild(topBarImage.getElement());
topBar.appendChild(h1Header.getElement());
element.appendChild(sideBarContainer.getElement());
sideBarContainer.appendChild(sideBarNav.getElement());
sideBarNav.appendChild(navContainer.getElement());
    
navContainer.appendChild(noteLink.getElement());
noteLink.appendChild(noteLinkItem.getElement());

navContainer.appendChild(addNewButton.getElement());
element.appendChild(mainDisplaySection.getElement());
mainDisplaySection.appendChild(mainHeader.getElement());
mainDisplaySection.appendChild(userToDoList.getElement());
userToDoList.appendChild(todoItems.getElement());

// Adding to the DOM
document.body.appendChild(element.getElement());


class ProjectMenu {
  constructor(items) {
    this.projectMenuItems = items;
  }

  generateProjectMenu() {
    const projectMenu = document.createElement('ul');
    projectMenu.id = 'project-menu';

    this.projectMenuItems.forEach(item => {
      const projectMenuItem = document.createElement('li');
      projectMenuItem.classList.add('project-menu-item');

      const projectMenuItemSpan = document.createElement('span');
      projectMenuItemSpan.textContent = item.count;

      const text = document.createTextNode(item.text);

      projectMenuItem.appendChild(text);
      projectMenuItem.appendChild(projectMenuItemSpan);
      projectMenu.appendChild(projectMenuItem);
    });

    return projectMenu;
  }

  appendToParent(parentId) {
    const parentElement = document.getElementById(parentId);
    if (parentElement) {
      const generatedMenuItems = this.generateProjectMenu();
      parentElement.prepend(generatedMenuItems);
    } else {
      console.error('Parent element not found');
    }
  }
}

// Usage:
const projectMenuItems = [
  { text: 'Project', count: 1 },
  { text: 'Pro1', count: 2 },
  { text: 'Pro2', count: 3 },
  { text: 'Pro3', count: 4 },
  { text: 'Pro4', count: 5 },
];

const projectMenu = new ProjectMenu(projectMenuItems);
projectMenu.appendToParent('nav-container'); // Replace 'parentElementId' with the actual ID of the parent element


class HomeMenu {
  constructor(items) {
    this.homeMenuItems = items;
  }

  generateHomeMenu() {
    // Usage:

    const homeMenu = document.createElement('ul');
    homeMenu.id = 'home-menu';

    this.homeMenuItems.forEach(item => {
      const homeMenuItem = document.createElement('li');
      homeMenuItem.classList.add('home-menu-item');

      const homeMenuItemSpan = document.createElement('span');
      homeMenuItemSpan.textContent = item.count;

      const text = document.createTextNode(item.text);

      homeMenuItem.appendChild(text);
      homeMenuItem.appendChild(homeMenuItemSpan);
      homeMenu.appendChild(homeMenuItem);
    });

    return homeMenu;
  }

  appendToParent(parentId) {
    const parentElement = document.getElementById(parentId);
    if (parentElement) {
      const generatedMenuItems = this.generateHomeMenu();
      parentElement.prepend(generatedMenuItems);
    } else {
      console.error('Parent element not found');
    }
  }
  
}
const homeMenuItems = [
  { text: 'Home', count: 1 },
  { text: 'Today', count: 2 },
  { text: 'Upcoming', count: 3 },
  { text: 'Personal', count: 4 },
  { text: 'Work', count: 5 },
];

const homeMenu = new HomeMenu(homeMenuItems);
homeMenu.appendToParent('nav-container'); // Replace 'parentElementId' with the actual ID of the parent element




class CreateNewToDoPopup {
  constructor() {
    this.createPopUp();
    this.addToDoCallback = null;

  }

  createPopUp() {
    
    // Create elements
    // this.createNewPopUp = new ElementCreator('div', 'create-new' );
    this.createNewPopUp = document.createElement('div');
    this.createNewPopUp.id = 'create-new';

    this.topBarTodo = document.createElement('div');
    this.topBarTodo.id = 'top-bar-todo';

    this.headerTodo = document.createElement('h1');
    this.headerTodo.id = 'header-todo';
    this.headerTodo.textContent = 'Create new task';
    this.sideBarCreateNew = document.createElement('div');
    this.sideBarCreateNew.id = 'side-bar-create-new';
    this.navContainerTodo = document.createElement('div');
    this.navContainerTodo.id = 'nav-container-todo';
    this.homeMenuTodo = document.createElement('ul');
    this.homeMenuTodo.id = 'home-menu-todo';
    this.menuItemToDo = document.createElement('li');

    this.menuItemToDo.classList.add('menu-item-todo');
    this.menuItemToDo.textContent = 'To Do';
    this.menuItemProject = document.createElement('li');
    this.menuItemProject.classList.add('menu-item-todo');
    this.menuItemProject.textContent = 'Project';
    this.menuItemNote = document.createElement('li');
    this.menuItemNote.classList.add('menu-item-todo');
    this.menuItemNote.textContent = 'Note';
    this.mainCreateNew = document.createElement('div');
    this.mainCreateNew.id = 'main-create-new';
    this.mainTextArea = document.createElement('input');
    this.mainTextArea.setAttribute('type', 'text');
    this.mainTextArea.setAttribute('placeholder', 'Details: ');
    this.mainTextArea.id = 'textarea';


    this.mainTextAreaTitle = document.createElement('input');
    this.mainTextAreaTitle.setAttribute('type', 'text');
    this.mainTextAreaTitle.setAttribute('placeholder', 'Title: ');
    this.mainTextAreaTitle.id = 'textarea-title';

    this.mainCreateNewMenu =document.createElement('div');
    this.mainCreateNewMenu.id = 'create-new-menu';
    this.dateDiv = document.createElement('div');
    this.dateDiv.id = 'due-date';
    this.dateDiv.textContent= 'Due Date:';
    this.dateBtn = document.createElement('button');
    this.dateBtn.id = 'full-date';
    this.dateBtn.textContent = 'MM/DD/YYYY';
    this.priorityDiv = document.createElement('div');
    this.priorityDiv.id = 'priority'; 

    this.priorityDivSub1 = document.createElement('div');
    this.priorityDivSub1.id = 'priority-sub-1'; 
    this.priorityDivSub2 = document.createElement('div');
    this.priorityDivSub2.id = 'priority-sub-2'; 
    this.lowBtn = document.createElement('button');
    this.lowBtn.id = 'low';
    this.lowBtn.textContent = 'LOW';
    this.mediumBtn = document.createElement('button');
    this.mediumBtn.id = 'medium';
    this.mediumBtn.textContent = 'MEDIUM';
    this.highBtn = document.createElement('button');
    this.highBtn.id = 'high';
    this.highBtn.textContent = 'HIGH';
    this.addToDoBtn = document.createElement('button');
    this.addToDoBtn.id = 'add-to-do';
    this.addToDoBtn.textContent = 'Add To Do';
    this.closeButton = document.createElement('button');
    this.closeButton.id = 'close';
    this.closeButton.textContent = 'x';


    // ... (rest of your element creations)

    document.body.prepend(this.createNewPopUp);
    // Append elements to construct the popup
    


    this.createNewPopUp.appendChild(this.headerTodo);
    // this.createNewPopUp.appendchild(this.closeButton);
    // this.createNewPopUp.appendChild(this.topBarTodo);

    this.createNewPopUp.appendChild(this.sideBarCreateNew);
    this.sideBarCreateNew.append(this.navContainerTodo);
    this.navContainerTodo.append(this.homeMenuTodo);
    this.homeMenuTodo.append(this.menuItemToDo);
    this.homeMenuTodo.append(this.menuItemProject);
    this.homeMenuTodo.append(this.menuItemNote);

    this.createNewPopUp.append(this.mainCreateNew);
    this.mainCreateNew.append(this.mainTextAreaTitle);
    this.mainCreateNew.append(this.mainTextArea);
    this.mainCreateNew.append(this.mainCreateNewMenu);
    this.mainCreateNewMenu.append(this.dateDiv);
    this.dateDiv.append(this.dateBtn);
    this.mainCreateNewMenu.append(this.priorityDiv);
    this.priorityDiv.append(this.priorityDivSub1);
    this.priorityDiv.append(this.priorityDivSub2);
    this.priorityDivSub1.append(this.lowBtn);
    this.priorityDivSub1.append(this.mediumBtn);
    this.priorityDivSub1.append(this.highBtn);
    this.priorityDivSub2.append(this.addToDoBtn);
    
        // ... (append other elements as needed)
    this.addToDoBtn.addEventListener('click', () => {
      this.priority = document.getElementById('priority-sub-1').value;
      this.check = document.getElementById('check').checked;// Assuming this is a checkbox
      this.title = document.getElementById('textarea-title').value;
      this.details = document.getElementById('textarea').value;
      this.date = document.getElementById('due-date').value;
      this.group = document.getElementById('group').value;

       // Validate date format (e.g., MM/DD/YYYY)
       const dateRegex = /^\d{2}\/\d{2}\/\d{4}$/;
       if (!this.date.match(dateRegex)) {
         alert('Please enter a valid date in MM/DD/YYYY format.');
         return;
       }

       if (this.addToDoCallback && priority && check && title && details && date && group) {
        this.addToDoCallback({ priority, check, title, details, date, group });
        this.close();
      } else {
        alert('Please fill all fields.');
      }
      // Create the todoData object with retrieved values
      this.todoData = { priority, check, title, details, date, group };

      // Pass todoData to the addToDoToDoList method
      this.todoList.addToDoToDoList(todoData);
    });

    this.closeButton.addEventListener('click', () => {
      this.close();
    });

  }

  open() {
    this.createNewPopUp.style.display = 'visible';
  }

  close() {
    this.createNewPopUp.style.display = 'none';
  }

  setAddToDoCallback(callback) {
    this.addToDoCallback = callback;
  }
}

// Usage:
// const popup = new CreateNewToDoPopup();
// // To open the popup:
// popup.open();
// // To close the popup:
// popup.close();



class ToDo {
  constructor(priority,check,title, details,date,group) {
    this.priority = priority;
    this.check = check;
    this.title = title;
    this.details = details;
    this.date = date;
    this.group = group;
    
  }
//toggleReadStatus
  toggleCheckStatus() {
    this.check = !this.check;
  }
//info()
  toDoItem() {
    return `${this.priority}  ${this.check ? true : false}  ${this.title}  ${this.details}  ${this.date}  ${this.group}`;
  }

};


class ToDoList {
  constructor() {
    this.userToDoList = [];
  }

  addToDoToDoList(todoData) {
    
    const userPriority = document.getElementById('priority');
    const userCheck = document.getElementById('check');
    const userTitle = document.getElementById('textarea-title');
    const userDetails = document.getElementById('textarea');
    const userTime = document.getElementById('date');
    const userGroup = document.getElementById('group');

    const { priority, check, title, details, date, group } = todoData;

    if (
      userPriority === '' ||
      userCheck === '' ||
      userTitle === '' ||
      userDetails === '' ||
      userTime === '' ||
      userGroup === ''
    ) { 
      alert('Please enter to-do info.');
      return;
    } else {
      const todo = new ToDo(priority,check, title, details, date, group);
      this.userToDoList.push(todo);
      this.displayToDo(todo);
    }

    //Clear input feilds after adding todo
      document.getElementById('priority').value = '';
      document.getElementById('check').value = '';
      document.getElementById('textarea-title').value = '';
      document.getElementById('details').value = '';
      document.getElementById('date').value = '';
      document.getElementById('group').value = '';

  }

  displayToDo(todo) {
    const cardDiv = new ElementCreator('div', null, todo.toDoItem(), 'todo-items');
    // const cardDiv = document.getElementsByClassName('todo-items');
    // cardDiv.setAttribute('class', 'cardDiv');
    cardDiv.style.maxWidth = '155px';
    cardDiv.style.padding = '10px';

    const subtext = document.createElement('div');
    subtext.style.fontSize = '12px';
    subtext.textContent = todo.toDoItem();


    const deleteButton = new ElementCreator('button', null, 'x', () => {
      this.deleteToDoItem(todo, cardDiv.getElement());
    });


    const toggleButton = new ElementCreator('button', null, 'Read', null, () => {
      todo.toggleCheckStatus();
      cardDiv.element.textContent = todo.toDoItem();
    });

    cardDiv.append(todo.priority + todo.check + todo.title + todo.details + todo.date + todo.group);
    cardDiv.append(subtext);
    cardDiv.append(deleteButton);
    cardDiv.append(toggleButton);

    todoListContainer.appendChild(cardDiv.getElement());
    // deleteButton.addEventListener('click', function () {
    //   cardDiv.parentNode.removeChild(cardDiv);
    //   const index = this.userToDoList.indexOf(todo);
    //   if (index !== -1) {
    //     this.userToDoList.splice(index, 1);
    //   }
    // });

   

    // const toggleButton = document.createElement('button');
    // toggleButton.textContent = true;
    // // toggleButton.addEventListener('click', function () {
    // //   book.toggleCheckStatus();
    // //   subtext.textContent = todo.toDoItem();
    // // });

   

    
  }

  deleteToDoItem(todo, elementToRemove) {
    const index = this.userToDoList.indexOf(todo);
    if (index !== -1) {
      this.userToDoList.splice(index, 1);
      elementToRemove.remove();
    }
  }
  

}





// Event listener for adding todos
const newBookButton = document.getElementById('addBookButton');
const todoListContainer = document.getElementById('main');
const toDoListInstance = new ToDoList();

newBookButton.addEventListener('click', function () {
toDoListInstance.addToDoToDoList();
});

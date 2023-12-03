import './style.css';
import Icon from './icon.jpg';
import printMe from './print.js';
import { CONNECTING } from 'ws';

function component() {
    const element = document.createElement('div');
///     DOM ELEMENTS CREATED main page

    const btn = document.createElement('button');
    const topBar = document.createElement('div');
    const topBarImage = document.createElement('div');
    const h1Header = document.createElement('h1');

    const sideBarContainer = document.createElement('div');
    const sideBarNav = document.createElement('div');
    const navContainer = document.createElement('div');////

    const noteLink = document.createElement('ul');
    const noteLinkItem = document.createElement('li');
    const addNewButton = document.createElement('button');
    addNewButton.addEventListener('click', () => {
        open();
    })

    const mainDisplaySection = document.createElement('div');   
    const mainHeader = document.createElement('h3');   
    const userToDoList = document.createElement('ul');    
    const todoItems = document.createElement('li');


/////// POP UP CREATE NEW TODO popup module


    const createNewPopUp = document.createElement('div');
    createNewPopUp.id = 'create-new';
    const topBarTodo = document.createElement('div');
    topBarTodo.id = 'top-bar-todo';
    const headerTodo = document.createElement('h1');
    headerTodo.id = 'header-todo';
    headerTodo.textContent = 'Create a New';

    const sideBarCreateNew = document.createElement('div');
    sideBarCreateNew.id = 'side-bar-create-new';
    const navContainerTodo = document.createElement('div');
    navContainerTodo.id = 'nav-container-todo';
    const homeMenuTodo = document.createElement('ul');
    homeMenuTodo.id = 'home-menu-todo';

    const menuItemToDo = document.createElement('li');
    menuItemToDo.classList.add('menu-item-todo');
    menuItemToDo.textContent = 'To Do';

    const menuItemProject = document.createElement('li');
    menuItemProject.classList.add('menu-item-todo');
    menuItemProject.textContent = 'Project';

    const menuItemNote = document.createElement('li');
    menuItemNote.classList.add('menu-item-todo');
    menuItemNote.textContent = 'Note';

    

    const mainCreateNew = document.createElement('div');
    mainCreateNew.id = 'main-create-new';
    const mainTextArea = document.createElement('input');
    mainTextArea.setAttribute('type', 'text');
    mainTextArea.setAttribute('placeholder', 'Title: ');
    mainTextArea.setAttribute('placeholder', 'Details: ');
    mainTextArea.id = 'textarea';
    const mainCreateNewMenu =document.createElement('div');
    mainCreateNewMenu.id = 'create-new-menu';
    const dateDiv = document.createElement('div');
    dateDiv.id = 'due-date';
    dateDiv.textContent= 'Due Date:';
    const dateBtn = document.createElement('button');
    dateBtn.id = 'full-date';
    dateBtn.textContent = 'MM/DD/YYYY';

    const priorityDiv = document.createElement('div');
    priorityDiv.id = 'priority';

    const lowBtn = document.createElement('button');
    lowBtn.id = 'low';
    lowBtn.textContent = 'LOW';
    const mediumBtn = document.createElement('button');
    mediumBtn.id = 'medium';
    mediumBtn.textContent = 'Medium';
    const highBtn = document.createElement('button');
    highBtn.id = 'high';
    highBtn.textContent = 'High';
    const addToDoBtn = document.createElement('button');
    addToDoBtn.id = 'add-to-do';
    addToDoBtn.textContent = 'Add To Do';

    const closeButton = document.createElement('button');
    closeButton.id = 'close';
    closeButton.textContent = 'x';


    




    //// SET ATTRIBUTES FOR DOM ELEMENTS

    noteLink.setAttribute('id', 'notes');
    noteLinkItem.setAttribute('id', 'added-note');
    noteLinkItem.textContent = 'Note\'s';
    addNewButton.setAttribute('id', 'add-new');
    addNewButton.textContent = '+';

    element.classList.add('hello');
    topBar.setAttribute('id', 'top-bar');
    topBarImage.setAttribute('id', 'logo');
    h1Header.setAttribute('id', 'header');
    h1Header.textContent = 'To Do List';
    sideBarContainer.setAttribute('id', 'side-bar-container');
    sideBarNav.setAttribute('id', 'side-bar-nav');
    navContainer.setAttribute('id', 'nav-container');

    mainDisplaySection.id = 'main';
    mainHeader.id = 'main-header';
    userToDoList.id = 'user-to-do-list';
    todoItems.classList.add('todo-items');
    mainHeader.textContent = 'Users To Do list';   
    todoItems.textContent = 'todo1';   




 ////// ARRAY MENU ITEMS     
    const homeMenuItems = [
    { text: 'Home', count: 1 },
    { text: 'Today', count: 2 },
    { text: 'Upcoming', count: 3 },
    { text: 'Personal', count: 4 },
    { text: 'Work', count: 5 },

    ]  
  // Function to create the HTML structure
    function generateHomeMenu(homeMenuItems) {
        const homeMenu = document.createElement('ul');
        homeMenu.id = 'home-menu';
    
        homeMenuItems.forEach(item => {
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
     // Generate the HTML and append it to the parent element
    const generatedMenuItems = generateHomeMenu(homeMenuItems);
  
    const projectMenuItems =[
        { projectText: 'Project\'s', count: 1 },
        { projectText: 'Pro1', count: 2 },
        { projectText: 'Pro2', count: 3 },
        { projectText: 'Pro3', count: 4 },
        { projectText: 'Pro4', count: 5 },
        // Add more items as needed
    ];
       
  
    function generateProjectMenu(projectMenuItems) {
        const projectMenu = document.createElement('ul');
        projectMenu.id = 'project-menu';
    
        projectMenuItems.forEach(item => {
        const projectMenuItem = document.createElement('li');
        projectMenuItem.classList.add('project-menu-item');
    
        const projectMenuItemSpan = document.createElement('span');
        projectMenuItemSpan.textContent = item.count;
    
        const projectText = document.createTextNode(item.projectText);
        
        projectMenuItem.appendChild(projectText);
        projectMenuItem.appendChild(projectMenuItemSpan);
        projectMenu.appendChild(projectMenuItem);

        
        });
    
        return projectMenu;
    }

    const generatedProjectMenuItems = generateProjectMenu(projectMenuItems);

    const myIcon = new Image();
    myIcon.src = Icon;
    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;

 
////////   SIDEBAR MENU & HEADER APPEND
    element.append(topBar)
    
    topBar.append(topBarImage)
    topBar.append(h1Header)
    element.appendChild(sideBarContainer)
    sideBarContainer.appendChild(sideBarNav)
    sideBarNav.append(navContainer)
    navContainer.append(generatedMenuItems)
  
   
    navContainer.append(generatedProjectMenuItems)     
    navContainer.append(noteLink)
    noteLink.append(noteLinkItem)

    navContainer.append(addNewButton);
    
////// MAIN SECTION 
    
    element.appendChild(mainDisplaySection);
    mainDisplaySection.appendChild(mainHeader);
    mainDisplaySection.appendChild(userToDoList);
    userToDoList.appendChild(todoItems)
    // element.appendChild(btn)


///// POP-UP SECTION
    element.appendChild(createNewPopUp);
    createNewPopUp.appendChild(topBarTodo);
    createNewPopUp.appendChild(headerTodo);
    createNewPopUp.appendChild(sideBarCreateNew);
    sideBarCreateNew.append(navContainerTodo);
    navContainerTodo.append(homeMenuTodo);
    homeMenuTodo.append(menuItemToDo);
    homeMenuTodo.append(menuItemProject);
    homeMenuTodo.append(menuItemNote);
    createNewPopUp.append(mainCreateNew);
    mainCreateNew.append(mainTextArea);
    mainCreateNew.append(mainCreateNewMenu);
    mainCreateNewMenu.append(dateDiv);
    mainCreateNewMenu.append(dateBtn);
    mainCreateNewMenu.append(priorityDiv);
    priorityDiv.append(lowBtn);
    priorityDiv.append(mediumBtn);
    priorityDiv.append(highBtn);
    priorityDiv.append(addToDoBtn);
    priorityDiv.append(closeButton);

    return element;

}


/////// POP UP CREATE NEW TODO popup module


const createNewPopUp = document.createElement('div');
createNewPopUp.id = 'create-new';
const topBarTodo = document.createElement('div');
topBarTodo.id = 'top-bar-todo';
const headerTodo = document.createElement('h1');
headerTodo.id = 'header-todo';
headerTodo.textContent = 'Create a New';

const sideBarCreateNew = document.createElement('div');
sideBarCreateNew.id = 'side-bar-create-new';
const navContainerTodo = document.createElement('div');
navContainerTodo.id = 'nav-container-todo';
const homeMenuTodo = document.createElement('ul');
homeMenuTodo.id = 'home-menu-todo';

const menuItemToDo = document.createElement('li');
menuItemToDo.classList.add('menu-item-todo');
menuItemToDo.textContent = 'To Do';

const menuItemProject = document.createElement('li');
menuItemProject.classList.add('menu-item-todo');
menuItemProject.textContent = 'Project';

const menuItemNote = document.createElement('li');
menuItemNote.classList.add('menu-item-todo');
menuItemNote.textContent = 'Note';



const mainCreateNew = document.createElement('div');
mainCreateNew.id = 'main-create-new';
const mainTextArea = document.createElement('input');
mainTextArea.setAttribute('type', 'text');
mainTextArea.setAttribute('placeholder', 'Title: ');
mainTextArea.setAttribute('placeholder', 'Details: ');
mainTextArea.id = 'textarea';
const mainCreateNewMenu =document.createElement('div');
mainCreateNewMenu.id = 'create-new-menu';
const dateDiv = document.createElement('div');
dateDiv.id = 'due-date';
dateDiv.textContent= 'Due Date:';
const dateBtn = document.createElement('button');
dateBtn.id = 'full-date';
dateBtn.textContent = 'MM/DD/YYYY';

const priorityDiv = document.createElement('div');
priorityDiv.id = 'priority';

const lowBtn = document.createElement('button');
lowBtn.id = 'low';
lowBtn.textContent = 'LOW';
const mediumBtn = document.createElement('button');
mediumBtn.id = 'medium';
mediumBtn.textContent = 'Medium';
const highBtn = document.createElement('button');
highBtn.id = 'high';
highBtn.textContent = 'High';
const addToDoBtn = document.createElement('button');
addToDoBtn.id = 'add-to-do';
addToDoBtn.textContent = 'Add To Do';

const closeButton = document.createElement('button');
closeButton.id = 'close';
closeButton.textContent = 'x';
closeButton.addEventListener('click', () => {

        close();
      });

function open() {
    createNewPopUp.style.display = 'visible';
  }

  function close() {
    this.createNewPopUp.style.display = 'none';
  }

// element.appendChild(createNewPopUp);
createNewPopUp.appendChild(topBarTodo);
createNewPopUp.appendChild(headerTodo);
createNewPopUp.appendChild(sideBarCreateNew);
sideBarCreateNew.append(navContainerTodo);
navContainerTodo.append(homeMenuTodo);
homeMenuTodo.append(menuItemToDo);
homeMenuTodo.append(menuItemProject);
homeMenuTodo.append(menuItemNote);
createNewPopUp.append(mainCreateNew);
mainCreateNew.append(mainTextArea);
mainCreateNew.append(mainCreateNewMenu);
mainCreateNewMenu.append(dateDiv);
mainCreateNewMenu.append(dateBtn);
mainCreateNewMenu.append(priorityDiv);
priorityDiv.append(lowBtn);
priorityDiv.append(mediumBtn);
priorityDiv.append(highBtn);
priorityDiv.append(addToDoBtn);
priorityDiv.append(closeButton);







document.body.appendChild(component());

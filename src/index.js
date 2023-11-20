import './style.css';
import Icon from './icon.jpg';
import printMe from './print.js';

function component() {
    const element = document.createElement('div');

    const btn = document.createElement('button');
    const topBar = document.createElement('div');
      const topBarImage = document.createElement('div');
      const h1Header = document.createElement('h1');

    const sideBarContainer = document.createElement('div');
      const sideBarNav = document.createElement('div');
        const navContainer = document.createElement('nav');
          const homeMenu = document.createElement('ul');
            const homeMenuItem1 = document.createElement('li');
            const homeMenuItemSpan1 = document.createElement('span');
            const homeMenuItem2 = document.createElement('li');
            const homeMenuItemSpan2 = document.createElement('span');
            const homeMenuItem3 = document.createElement('li');
            const homeMenuItemSpan3 = document.createElement('span');
            const homeMenuItem4 = document.createElement('li');
            const homeMenuItemSpan4 = document.createElement('span');
            const homeMenuItem5 = document.createElement('li');
            const homeMenuItemSpan5 = document.createElement('span');
        
        const projectMenu = document.createElement('ul');
          const projectMenuItem1 = document.createElement('li');
          const projectMenuItemSpan1 = document.createElement('span');
          const projectMenuItem2 = document.createElement('li');
          const projectMenuItemSpan2 = document.createElement('span');
          const projectMenuItem3 = document.createElement('li');
          const projectMenuItemSpan3 = document.createElement('span');
          const projectMenuItem4 = document.createElement('li');
          const projectMenuItemSpan4 = document.createElement('span');

        const noteLink = document.createElement('ul');
         const noteLinkItem = document.createElement('li');
      const addNewButton = document.createElement('button');




 

    element.classList.add('hello');
    topBar.setAttribute('id', 'top-bar');
    topBarImage.setAttribute('id', 'logo');
    h1Header.setAttribute('id', 'header');
    h1Header.textContent = 'To Do List';
    sideBarContainer.setAttribute('id', 'side-bar-container');
    sideBarNav.setAttribute('id', 'side-bar-nav');
    navContainer.setAttribute('id', 'nav-container');
    homeMenu.setAttribute('id', 'home-menu');

    homeMenuItem1.setAttribute('class', 'home-menu-item');
    homeMenuItem1.setAttribute('id', 'home-menu-item1');
    homeMenuItemSpan1.setAttribute('id', 'home-menu-item1');
    homeMenuItem1.textContent = 'Home';
    homeMenuItemSpan1.textContent = 6;

    homeMenuItem2.setAttribute('class', 'home-menu-item');
    homeMenuItem2.setAttribute('id', 'home-menu-item2');
    homeMenuItemSpan2.setAttribute('id', 'home-menu-item2');
    homeMenuItem2.textContent = 'Today';
    homeMenuItemSpan2.textContent = 5;
    
    homeMenuItem3.setAttribute('class', 'home-menu-item');
    homeMenuItem3.setAttribute('id', 'home-menu-item3');
    homeMenuItemSpan3.setAttribute('id', 'home-menu-item3');
    homeMenuItem3.textContent = 'Upcoming';
    homeMenuItemSpan3.textContent = 4;
    
    homeMenuItem4.setAttribute('class', 'home-menu-item');
    homeMenuItem4.setAttribute('id', 'home-menu-item4');
    homeMenuItemSpan4.setAttribute('id', 'home-menu-item4');
    homeMenuItem4.textContent = 'Personal';
    homeMenuItemSpan4.textContent = 3;
    
    homeMenuItem5.setAttribute('class', 'home-menu-item');
    homeMenuItem5.setAttribute('id', 'home-menu-item5');
    homeMenuItemSpan5.setAttribute('id', 'home-menu-item5');
    homeMenuItem5.textContent = 'Work';
    homeMenuItemSpan5.textContent = 2;

    
    
    const myIcon = new Image();
    myIcon.src = Icon;
    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;

   
   
      
    // element.appendChild(myIcon);
    element.append(topBar)
    
  topBar.append(topBarImage)
  topBar.append(h1Header)
element.appendChild(sideBarContainer)
  sideBarContainer.appendChild(sideBarNav)
   sideBarNav.append(navContainer)
    navContainer.append(homeMenu)
     homeMenu.append(homeMenuItem1)
     homeMenuItem1.append(homeMenuItemSpan1)
     homeMenu.append(homeMenuItem2)
     homeMenuItem2.append(homeMenuItemSpan2)
     homeMenu.append(homeMenuItem3)
     homeMenuItem3.append(homeMenuItemSpan3)
     homeMenu.append(homeMenuItem4)
     homeMenuItem4.append(homeMenuItemSpan4)
     homeMenu.append(homeMenuItem5)
     homeMenuItem5.append(homeMenuItemSpan5)
   
     navContainer.append(projectMenu)
     projectMenu.append(projectMenuItem1)
     projectMenuItem1.append(projectMenuItemSpan1)
     projectMenu.append(projectMenuItem2)
     projectMenuItem2.append(projectMenuItemSpan2)
     projectMenu.append(projectMenuItem3)
     projectMenuItem3.append(projectMenuItemSpan3)
     projectMenu.append(projectMenuItem4)
     projectMenuItem4.append(projectMenuItemSpan4)
     
     navContainer.append(noteLink)
     noteLink.append(noteLinkItem)

     navContainer.append(addNewButton)

     element.appendChild(btn); 
    return element;

}

document.body.appendChild(component());


// import './style.css';


// class StartModule {
//   constructor() {
    
//   }

//   createComponent() {
//     const element = document.createElement('div');
//     // ... (rest of your code)
//     return element;
//   }

//   showTab(tabId) {
//     // ... (your showTab logic)
//   }

//   setupEventListeners() {
//     // ... (your event listener setup)
//   }

//   render() {
//     const component = this.createComponent();
//     this.setupEventListeners();
//     document.body.appendChild(component);
//   }
// }

// export default StartModule;
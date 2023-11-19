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
            const menuItemSpan1 = document.createElement('span');
            const homeMenuItem2 = document.createElement('li');
            const menuItemSpan2 = document.createElement('span');
            const homeMenuItem3 = document.createElement('li');
            const menuItemSpan3 = document.createElement('span');
            const homeMenuItem4 = document.createElement('li');
            const menuItemSpan4 = document.createElement('span');
            const homeMenuItem5 = document.createElement('li');
            const menuItemSpan5 = document.createElement('span');
        
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



element.appendChild(topBar)
  topBar.append(topBarImage)
  topBar.append(h1Header)
element.appendChild(sideBarContainer)
  sideBarContainer.appendChild(sideBarNav)
   sideBarNav.append(navContainer)
    navContainer.append(homeMenu)
     homeMenu.append(homeMenuItem1)
     homeMenuItem1.append(menuItemSpan1)
     homeMenu.append(homeMenuItem2)
     homeMenuItem2.append(menuItemSpan2)
     homeMenu.append(homeMenuItem3)
     homeMenuItem3.append(menuItemSpan3)
     homeMenu.append(homeMenuItem4)
     homeMenuItem4.append(menuItemSpan4)
     homeMenu.append(homeMenuItem5)
     homeMenuItem5.append(menuItemSpan5)
   
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
 

    element.classList.add('hello');
    element.innerHTML = 'Hello';
    const myIcon = new Image();
    myIcon.src = Icon;
    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;

   
   
    element.appendChild(btn);    
    element.appendChild(myIcon);


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
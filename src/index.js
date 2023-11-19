import './style.css';
import Icon from './icon.jpg';
import printMe from './print.js';

function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button');

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
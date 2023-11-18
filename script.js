import './style.css';


class StartModule {
  constructor() {
    if (process.env.NODE_ENV !== 'production') {
      console.log('Looks like we are in development mode!');
    }
  }

  createComponent() {
    const element = document.createElement('div');
    // ... (rest of your code)
    return element;
  }

  showTab(tabId) {
    // ... (your showTab logic)
  }

  setupEventListeners() {
    // ... (your event listener setup)
  }

  render() {
    const component = this.createComponent();
    this.setupEventListeners();
    document.body.appendChild(component);
  }
}

export default StartModule;

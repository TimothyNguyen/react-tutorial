// Import React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Import styling for the application (styles.css)
import "./App.css";

// Navigation menu items data
const menus = [
  { key: 'home', label: 'Home' },
  { key: 'product', label: 'Product' },
  { key: 'about', label: 'About' },
  { key: 'secure', label: 'Secure', disabled: true },
];

// Nav component for rendering a list of navigation items
const Nav = ({ selected, items }) => {
  // Function to check if an item is active based on its key
  const isActive = (item) => item.key === selected;

  // Function to handle click events on navigation items, redirecting to the item's URL
  const onClick = (item) => () => {
    // Handle click event logic would be added here
    window.location.href = item.url;
  };
  
  // Placeholder JSX for the component, describing its purpose
  return (
    
      <ul id="navigation-bar" className="nav-menu">
        {items.map((item) => (
          <li
            key={item.key}
            className ={isActive(item) ? 'active' : ''}>
              <button
                disabled={item.disabled}
                onClick={onClick(item)}
              >
                {item.label}
              </button>
          </li>
        ))}
      </ul>
    
  );
};

// App component using Nav with predefined menu items and the selected item set to "home"
export const App = () => {
  return <Nav items={menus} selected="home" />; 
};

// // Get the root element by its ID ("root")
// const rootEl = document.getElementById('root');

// // Render the App component into the root element using ReactDOM
// ReactDOM.createRoot(<App />, rootEl);
export default App;
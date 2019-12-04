/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>
  

  The function takes an array as its only argument.
*/

function createMenu(items) {
  
  // create menu parent
  const menu = document.createElement('div');
  menu.classList.add('menu');

  // create ul
  const ul = document.createElement('ul');

  // Step 2: Inside this function, iterate over the array creating a list item <li> element for each item in the array. 
  // Add those items to the <ul>

  // create menu items
  menuItems.forEach(item => {
    const itemEl = document.createElement('li');
    itemEl.textContent = item;
    ul.appendChild(itemEl);
  });

  // add menu items to menu
  menu.appendChild(ul);

  // make sure menu is hidden to start
  menu.style.display = 'none';

  // Step 5: return the menu component.
  return menu;
}

// create the menu
const menu = createMenu(menuItems);

// toggle the menu open/close

  // Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.
const menuBtn = document.querySelector('.menu-button');

 // Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).
menuBtn.addEventListener('click', () => {
  menu.style.display = 'block';
  menu.classList.toggle('menu--open');
});


  // Step 6: add the menu component to the DOM.
document.querySelector('body').prepend(menu);




 

  


  


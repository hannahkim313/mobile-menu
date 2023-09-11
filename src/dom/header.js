import menuImg from '../img/menu.svg';
import searchImg from '../img/search.svg';
import appendChildren from '../logic/helper-functions';

const createHeader = () => {
  const menuIcon = document.createElement('img');
  menuIcon.src = menuImg;
  menuIcon.alt = 'Click to expand menu options';
  const menuBtn = document.createElement('button');
  menuBtn.className = 'menu';
  menuBtn.setAttribute('type', 'button');
  menuBtn.appendChild(menuIcon);
  const heading = document.createElement('h1');
  heading.textContent = 'De Lune';
  const searchIcon = document.createElement('img');
  searchIcon.src = searchImg;
  searchIcon.alt = 'Click to search for something';
  const searchBtn = document.createElement('button');
  searchBtn.className = 'search';
  searchBtn.setAttribute('type', 'button');
  searchBtn.appendChild(searchIcon);
  const header = document.createElement('header');
  appendChildren(
    header,
    menuBtn,
    heading,
    searchBtn,
  );

  return header;
};

export default createHeader;
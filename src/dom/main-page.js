import menuImg from '../img/menu.svg';
import searchImg from '../img/search.svg';
import chevronLeftImg from '../img/chevron-left.svg';
import circleImg from '../img/circle.svg';
import chevronRightImg from '../img/chevron-right.svg';
import slider1aImg from '../img/model-1a.jpg';
import slider1bImg from '../img/model-1b.jpg';
import slider1cImg from '../img/model-1c.jpg';
import slider2aImg from '../img/model-2a.jpg';
import slider2bImg from '../img/model-2b.jpg';
import slider2cImg from '../img/model-2c.jpg';
import slider3aImg from '../img/model-3a.jpg';
import slider3bImg from '../img/model-3b.jpg';
import slider3cImg from '../img/model-3c.jpg';
import githubImg from '../img/github-mark.svg';
import appendChildren from './helper-functions';

const createHeader = () => {
  const menuIcon = document.createElement('img');
  menuIcon.src = menuImg;
  menuIcon.alt = 'Click to expand menu options';
  menuIcon.className = 'menu';

  const heading = document.createElement('h1');
  heading.textContent = 'Acaer';

  const searchIcon = document.createElement('img');
  searchIcon.src = searchImg;
  searchIcon.alt = 'Click to search for something';
  searchIcon.className = 'search';

  const header = document.createElement('header');
  appendChildren(
    header,
    menuIcon,
    heading,
    searchIcon,
  );

  return header;
};

const createSliderImgs = (...imgSources) => {
  const sliderImgs = [];
  imgSources.forEach(src => {
    const sliderImg = document.createElement('img');
    sliderImg.src = src;
    sliderImg.alt = 'Photo of a fashion model';
    sliderImgs.push(sliderImg);
  });

  return sliderImgs;
};

const createImageSlider = (sliderName, ...sliderImgs) => {
  const imageContainer = document.createElement('div');
  appendChildren(
    imageContainer,
    ...sliderImgs,
  );

  const chevronLeft = document.createElement('img');
  chevronLeft.src = chevronLeftImg;
  chevronLeft.alt = 'Click to go to previous image';
  
  const navButton = document.createElement('img');
  navButton.src = circleImg;
  navButton.alt = 'Click to select new photo of the model';
  
  const chevronRight = document.createElement('img');
  chevronRight.src = chevronRightImg;
  chevronRight.alt = 'Click to go to next image';

  const createMenuItems = (...items) => {
    const menuItems = [];
    items.forEach(item => {
      const list = document.createElement('li');
      list.appendChild(item);
      menuItems.push(list);
    });

    return menuItems;
  };

  const menuItems = createMenuItems(
    chevronLeft,
    navButton,
    navButton.cloneNode(),
    navButton.cloneNode(),
    chevronRight,
  );
  const sliderMenu = document.createElement('menu');
  appendChildren(
    sliderMenu,
    ...menuItems,
  );

  const name = document.createElement('h2');
  name.textContent = sliderName;

  const imageSlider = document.createElement('article');
  appendChildren(
    imageSlider,
    imageContainer,
    sliderMenu,
    name,
  );
  
  return imageSlider;  
};

const createMainContent = () => {
  const slider1Imgs = createSliderImgs(slider1aImg, slider1bImg, slider1cImg);
  const imageSlider1 = createImageSlider('Alyssa', ...slider1Imgs);
  const slider2Imgs = createSliderImgs(slider2aImg, slider2bImg, slider2cImg);
  const imageSlider2 = createImageSlider('Jackie', ...slider2Imgs);
  const slider3Imgs = createSliderImgs(slider3aImg, slider3bImg, slider3cImg);
  const imageSlider3 = createImageSlider('Sam', ...slider3Imgs);

  const main = document.createElement('main');
  appendChildren(
    main,
    imageSlider1,
    imageSlider2,
    imageSlider3,
  );

  return main;
};

const createFooter = () => {
  const githubIcon = document.createElement('img');
  githubIcon.src = githubImg;
  githubIcon.alt = 'Github logo';

  const authorName = document.createElement('p');
  authorName.textContent = 'Hannah Kim';

  const link = document.createElement('a');
  link.href = 'https://github.com/hannahkim313';
  appendChildren(
    link,
    githubIcon,
    authorName,
  );

  const footer = document.createElement('footer');
  footer.appendChild(link);

  return footer;
};

const createMainPage = () => {
  const body = document.querySelector('body');
  appendChildren(
    body,
    createHeader(),
    createMainContent(),
    createFooter(),
  );
};

export default createMainPage;
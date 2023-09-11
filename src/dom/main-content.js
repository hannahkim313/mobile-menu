import chevronLeftImg from '../img/chevron-left.svg';
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
import appendChildren from '../logic/helper-functions';

const createSliderImgs = (...imgSources) => {
  const sliderImgs = [];
  imgSources.forEach(src => {
    const sliderImg = document.createElement('img');
    sliderImg.src = src;
    sliderImg.alt = 'Photo of a fashion model';
    sliderImg.className = 'slider-img';
    sliderImgs.push(sliderImg);
  });

  sliderImgs[1].classList.add('active');

  return sliderImgs;
};

const createImageSlider = (sliderName, ...sliderImgs) => {
  const imageContainer = document.createElement('div');
  imageContainer.className = 'image-container';
  appendChildren(
    imageContainer,
    ...sliderImgs,
  );

  const chevronLeft = document.createElement('img');
  chevronLeft.src = chevronLeftImg;
  chevronLeft.alt = 'Click to go to previous image';
  const chevronLeftBtn = document.createElement('button');
  chevronLeftBtn.className = 'previous';
  chevronLeftBtn.setAttribute('type', 'button');
  chevronLeftBtn.appendChild(chevronLeft);
  
  const navBtn = document.createElement('button');
  navBtn.className = 'nav';
  navBtn.setAttribute('type', 'button');
  const navBtns = document.createElement('div');
  navBtns.className = 'nav-container';
  appendChildren(
    navBtns,
    navBtn,
    navBtn.cloneNode(true),
    navBtn.cloneNode(true),
  );
  
  const chevronRight = document.createElement('img');
  chevronRight.src = chevronRightImg;
  chevronRight.alt = 'Click to go to next image';
  const chevronRightBtn = document.createElement('button');
  chevronRightBtn.className = 'next';
  chevronRightBtn.setAttribute('type', 'button');
  chevronRightBtn.appendChild(chevronRight);

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
    chevronLeftBtn,
    navBtns,
    chevronRightBtn,
  );
  const sliderMenu = document.createElement('menu');
  sliderMenu.className = 'slider-container';
  appendChildren(
    sliderMenu,
    ...menuItems,
  );

  const name = document.createElement('h2');
  name.textContent = sliderName;

  const imageSlider = document.createElement('article');
  imageSlider.className = 'image-slider';
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
  const imageSlider1 = createImageSlider('Jamia Lawson', ...slider1Imgs);
  const slider2Imgs = createSliderImgs(slider2aImg, slider2bImg, slider2cImg);
  const imageSlider2 = createImageSlider('Alyssa Owens', ...slider2Imgs);
  const slider3Imgs = createSliderImgs(slider3aImg, slider3bImg, slider3cImg);
  const imageSlider3 = createImageSlider('Sam Baker', ...slider3Imgs);

  const main = document.createElement('main');
  appendChildren(
    main,
    imageSlider1,
    imageSlider2,
    imageSlider3,
  );

  return main;
};

export default createMainContent;
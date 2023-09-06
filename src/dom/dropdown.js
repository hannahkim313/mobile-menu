import closeImg from '../img/close.svg';
import appendChildren from '../logic/helper-functions';

const createCloseBtn = () => {
  const closeIcon = document.createElement('img');
  closeIcon.src = closeImg;
  closeIcon.alt = 'Click to close the dropdown';

  const closeBtn = document.createElement('button');
  closeBtn.className = 'close';
  closeBtn.setAttribute('type', 'button');
  closeBtn.appendChild(closeIcon);

  return closeBtn;
};

const sections = [
  'Home',
  'Services',
  'About',
  'Careers',
  'Contact',
];

const createSectionLinks = () => {
  const sectionLinks = [];
  sections.forEach(section => {
    const link = document.createElement('a');
    link.href = '#';
    link.textContent = section;
    sectionLinks.push(link);
  });

  return sectionLinks;
};

const createList = () => {
  const listItems = [];
  const sectionLinks = createSectionLinks();
  sectionLinks.forEach(link => {
    const listItem = document.createElement('li');
    listItem.appendChild(link);
    listItems.push(listItem);
  });
  const list = document.createElement('ul');
  appendChildren(
    list,
    ...listItems,
  );

  return list;
};

const createDropdownMenu = () => {
  const dropdownMenu = document.createElement('nav');
  dropdownMenu.className = 'dropdown';
  appendChildren(
    dropdownMenu,
    createCloseBtn(),
    createList(),
  );

  return dropdownMenu;
};

export default createDropdownMenu;
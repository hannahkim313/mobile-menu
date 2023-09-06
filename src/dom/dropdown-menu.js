import appendChildren from '../logic/helper-functions';

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
  dropdownMenu.className = 'dropdown-menu';
  appendChildren(
    dropdownMenu,
    createList(),
  );

  return dropdownMenu;
};

export default createDropdownMenu;
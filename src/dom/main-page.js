import createHeader from './header';
import createDropdownMenu from './dropdown-menu';
import createMainContent from './main-content';
import createFooter from './footer';
import appendChildren from '../logic/helper-functions';

const createMainPage = () => {
  const body = document.querySelector('body');
  appendChildren(
    body,
    createHeader(),
    createDropdownMenu(),
    createMainContent(),
    createFooter(),
  );
};

export default createMainPage;
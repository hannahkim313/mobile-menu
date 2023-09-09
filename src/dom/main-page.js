import createHeader from './header';
import createDropdown from './dropdown';
import createMainContent from './main-content';
import createFooter from './footer';
import appendChildren from '../logic/helper-functions';

const createMainPage = () => {
  const body = document.querySelector('body');
  appendChildren(
    body,
    createDropdown(),
    createHeader(),
    createMainContent(),
    createFooter(),
  );
};

export default createMainPage;
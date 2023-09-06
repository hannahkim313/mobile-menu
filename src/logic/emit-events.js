import emitHeaderEvents from './events/header-events';
import emitDropdownEvents from './events/dropdown-events';

const emitEvents = () => {
  const body = document.querySelector('body');
  body.addEventListener('click', e => {
    if (e.target.closest('header')) {
      emitHeaderEvents(e);
    };

    if (e.target.closest('nav')) {
      emitDropdownEvents(e);
    };
  });
};

export default emitEvents;
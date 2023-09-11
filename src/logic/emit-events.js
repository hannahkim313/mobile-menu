import emitHeaderEvents from './events/header-events';
import emitDropdownEvents from './events/dropdown-events';
import emitSliderEvents from './events/slider-events';

const emitEvents = () => {
  const body = document.querySelector('body');
  body.addEventListener('click', e => {
    if (e.target.closest('header')) {
      emitHeaderEvents(e);
    };

    if (e.target.closest('nav')) {
      emitDropdownEvents(e);
    };

    if (
      e.target.closest('menu')
      && e.target.closest('menu').classList.contains('slider-container')
    ) {
      emitSliderEvents(e);
    };
  });
};

export default emitEvents;
import emitHeaderEvents from './events/header-events';

const emitEvents = () => {
  const body = document.querySelector('body');
  body.addEventListener('click', e => {
    if (e.target.closest('header')) {
      emitHeaderEvents(e);
    };
  });
};

export default emitEvents;
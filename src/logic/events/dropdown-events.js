const toggleDropdown = () => {
  const dropdown = document.querySelector('.dropdown');
  dropdown.classList.toggle('visible');
};

const toggleMainElements = () => {
  const header = document.querySelector('header');
  const main = document.querySelector('main');
  const dropdown = document.querySelector('.dropdown');

  if (dropdown.classList.contains('visible')) {
    header.style.visibility = 'hidden';
    main.style.visibility = 'hidden';
  } else {
    header.style.visibility = 'visible';
    main.style.visibility = 'visible';
  };
};

const emitClickEvents = (e) => {
  if (e.target.closest('button') && e.target.closest('button').classList.contains('menu')) {
    toggleDropdown();
    const dropdown = document.querySelector('.dropdown');
    dropdown.addEventListener('transitionend', () => toggleMainElements());
  };

  if (e.target.closest('button') && e.target.closest('button').classList.contains('close')) {
    toggleDropdown();
    toggleMainElements();
  };
};

const events = {
  click: emitClickEvents,
};

const emitDropdownEvents = (e) => {
  const emittedEvent = e.type;
  const eventTypes = Object.keys(events);
  eventTypes.find(eventType => eventType === emittedEvent ? events[eventType](e) : undefined);
};

export default emitDropdownEvents;
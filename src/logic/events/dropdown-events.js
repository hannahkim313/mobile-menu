const showDropdown = () => {
  const dropdown = document.querySelector('.dropdown');
  dropdown.classList.toggle('visible');
};

const hideElements = () => {
  const header = document.querySelector('header');
  header.style.visibility = 'hidden';
  const main = document.querySelector('main');
  main.style.visibility = 'hidden';
};

const emitClickEvents = (e) => {
  if (e.target.closest('button') && e.target.closest('button').classList.contains('menu')) {
    showDropdown();
    hideElements();
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
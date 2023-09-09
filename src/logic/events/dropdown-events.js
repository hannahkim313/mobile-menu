const toggleDropdown = () => {
  const dropdown = document.querySelector('.dropdown');
  dropdown.classList.toggle('visible');
};

const emitClickEvents = (e) => {
  if (e.target.closest('button') && e.target.closest('button').classList.contains('menu')) {
    toggleDropdown();
  };

  if (e.target.closest('button') && e.target.closest('button').classList.contains('close')) {
    toggleDropdown();
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
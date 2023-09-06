import emitDropdownEvents from './dropdown-events';

const emitClickEvents = (e) => {
  if (e.target.closest('button') && e.target.closest('button').classList.contains('menu')) {
    emitDropdownEvents(e);
  };
};

const events = {
  click: emitClickEvents,
};

const emitHeaderEvents = (e) => {
  const emittedEvent = e.type;
  const eventTypes = Object.keys(events);
  eventTypes.find(eventType => eventType === emittedEvent ? events[eventType](e) : undefined);
};

export default emitHeaderEvents;
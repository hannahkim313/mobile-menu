const updateNavBtn = (slider) => {
  const currentActiveNavBtn = slider.querySelector('.selected');
  currentActiveNavBtn.classList.toggle('selected');
  const activeImgIndex = slider.querySelector('.active').dataset.index;
  const newActiveNavBtn = slider.querySelector(`.nav[data-index='${activeImgIndex}']`);
  newActiveNavBtn.classList.toggle('selected');
};

const getPreviousImg = (activeImg) => {
  if (!activeImg.previousElementSibling) {
    return activeImg.closest('div').lastElementChild;
  };
  
  return activeImg.previousElementSibling;
};

const showPreviousImg = (slider) => {
  const activeImg = slider.querySelector('.active');
  activeImg.classList.toggle('active');
  const previousImg = getPreviousImg(activeImg);
  previousImg.classList.toggle('active');
};

const getNextImg = (activeImg) => {
  if (!activeImg.nextElementSibling) {
    return activeImg.closest('div').firstElementChild;
  };
  
  return activeImg.nextElementSibling;
};

const showNextImg = (slider) => {
  const activeImg = slider.querySelector('.active');
  activeImg.classList.toggle('active');
  const nextImg = getNextImg(activeImg);
  nextImg.classList.toggle('active');
};

const emitClickEvents = (e) => {
  if (e.target.closest('button') && e.target.closest('button').classList.contains('next')) {
    const slider = e.target.closest('article');
    showNextImg(slider);
    updateNavBtn(slider);
  };

  if (e.target.closest('button') && e.target.closest('button').classList.contains('previous')) {
    const slider = e.target.closest('article');
    showPreviousImg(slider);
    updateNavBtn(slider);
  };
};

const automateSliders = () => {
  const sliders = document.querySelectorAll('.image-slider');
  sliders.forEach(slider => {
    setInterval(() => {
      showNextImg(slider);
      updateNavBtn(slider);
    }, 5000);
  });
};

const emitLoadEvents = () => {
  automateSliders();
};

const events = {
  load: emitLoadEvents,
  click: emitClickEvents,
};

const emitSliderEvents = (e) => {
  const emittedEvent = e.type;
  const eventTypes = Object.keys(events);
  eventTypes.find(eventType => eventType === emittedEvent ? events[eventType](e) : undefined);
};

export default emitSliderEvents;
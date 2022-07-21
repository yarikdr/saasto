function moveElement({size, what, firstCase, secondCase}) {
  const mediaQuery = window.matchMedia(`(max-width: ${size}px)`);

  const mediaHandler = e => {
    if (e.matches) {
      const {where, index} = firstCase;
      document.querySelector(where).insertBefore(document.querySelector(what), index);
    } else {
      const {where, index} = secondCase;
      document.querySelector(where).insertBefore(document.querySelector(what), index);
    }
  };

  mediaQuery.addListener(mediaHandler);

  mediaHandler(mediaQuery);
}

function burgerActive(selBurger, selMenu) {
  const burger = document.querySelector(selBurger),
        menu = document.querySelector(selMenu);      
  burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    menu.classList.toggle('active');
  });
}

module.exports = {
  moveElement,
  burgerActive
};
// menu__icon -> _active
// menu__body -> _active
// body -> _lock

function headerMenu() {
  const iconMenuElement = document.querySelector('.menu__icon');
  const menuBodyElement = document.querySelector('.menu__body');

  const toggleBurgerMenu = () => {
    document.body.classList.toggle("_lock");
    iconMenuElement.classList.toggle("_active");
    menuBodyElement.classList.toggle("_active");
  }

  iconMenuElement.addEventListener("click", () => {
    toggleBurgerMenu();
  });


  const linkGoto = () => {
    const menuLinkElemenets = document.querySelectorAll('[data-goto]');
    if (menuLinkElemenets.length > 0) {
      menuLinkElemenets.forEach(link => {
        link.addEventListener("click", event => {
          const menuLink = event.target; // сама ссылка на которую кликнули
          const gotoSectionElement = document.querySelector(`.${menuLink.dataset.goto}`);

          if (menuLink.dataset.goto && gotoSectionElement) {
            const gotoSectionValue = gotoSectionElement.getBoundingClientRect().top + window.pageYOffset - document.querySelector('header').offsetHeight;
            window.scrollTo({
              top: gotoSectionValue,
              behavior: "smooth"
            });
            event.preventDefault();
          }
        });
      });
    }
  }
  linkGoto();
}
headerMenu();
const refs = {
  switcher: document.getElementById('theme-switch-toggle'),
  body: document.body,
};

const { switcher, body } = refs;

const THEME = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const { LIGHT, DARK } = THEME;

const LOCALSTORAGE_THEME_KEY = 'current-theme';

switcher.addEventListener('change', themeChange);

function themeChange({ target }) {
  if (target.checked) {
    setDarkTheme();
  } else {
    setLightTheme();
  }
}

function setLightTheme() {
  getTheme(DARK, LIGHT);
  switcher.checked = false;
}
function setDarkTheme() {
  getTheme(LIGHT, DARK);
  switcher.checked = true;
}
function getTheme(oldTheme, newTheme) {
  body.classList.remove(oldTheme);
  body.classList.add(newTheme);
  localStorage.setItem(LOCALSTORAGE_THEME_KEY, newTheme);
}

const setDefaultTheme = ({ DARK }) => {
  const themeDefault = localStorage.getItem(LOCALSTORAGE_THEME_KEY);

  switch (themeDefault) {
    case DARK:
      setDarkTheme();
      break;

    default:
      setLightTheme();
  }
};

setDefaultTheme(THEME);

import menuData from './menu.json';
import menuCard from '../handlebars/menu-card.hbs';

const menuList = document.querySelector('.js-menu');

menuList.insertAdjacentHTML('beforeend', menuCard(menuData));

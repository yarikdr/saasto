import '../scss/style';
import '../index';
import services from './services/services';

try {
  services.burgerActive('.burger', '.menu');
} catch (error) {
  console.log(error);  
}

try {
  services.moveElement({
    size: 914, 
    what: '.header__active', 
    firstCase: {where: '.header__menu', index: null}, 
    secondCase: {where: '.header__inner', index: null}
  });
} catch (error) {
  console.log(error);
}
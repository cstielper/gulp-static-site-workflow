import { sayHello } from './modules/mod1';
import { listFavoriteFoods } from './modules/mod1';
import buildMessage from './modules/mod2';

// Run some functions from our imported modules.
const name = sayHello('John Doe');
const foods = listFavoriteFoods(['pizza', 'sushi', 'steak', 'coffee']);

const message = buildMessage(name, foods);
document.write(message);

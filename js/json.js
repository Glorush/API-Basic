// Javascript Object Notation
const user = { id: 11, name: 'shanto', height: 'mail'};

// JSON
const stringified = JSON.stringify(user);

const car = {name: 'bmw', modal: 'nano', color: 'red', products: ['chaka', 'tayer', 'light', 'antina'], service: true}
const stringifiedCar = JSON.stringify(car);
const stringiFiedCarObject = JSON.parse(stringifiedCar);
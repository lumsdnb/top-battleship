import ship from './ship';

const testShip = ship(2);

test('was ship hit?', () => {
  expect(testShip.hit(1)).toBe(true);
});

test('was ship missed?', () => {
  expect(testShip.hit(3)).toBe(false);
});

test('was ship sunk?', () => {
  testShip.hit(0);
  testShip.hit(1);
  expect(testShip.wasSunk()).toBe(true);
});

test('get length', () => {
  expect(testShip.getLength()).toBe(2);
});

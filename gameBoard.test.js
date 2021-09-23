// Gameboards should be able to place ships at specific coordinates by calling the ship factory function.
// Gameboards should have a receiveAttack function that takes a pair of coordinates, determines whether or not the attack hit a ship and then sends the ‘hit’ function to the correct ship, or records the coordinates of the missed shot.
// Gameboards should keep track of missed attacks so they can display them properly.
// Gameboards should be able to report whether or not all of their ships have been sunk.

import gameBoard from './gameBoard';
import ship from './ship';
//contains 10x10 grid
//holds 10 ships
//  4x1 long
//  3x2 long
//  2x3 long
//  1x4 long

const testShip = ship(2);

test('place a ship', () => {
  expect(gameBoard().placeShip(testShip, 1, 2)).toBe(true);
});

test('place ship out of bounds', () => {
  expect(gameBoard().placeShip(testShip, 10, 2)).toBe(false);
});

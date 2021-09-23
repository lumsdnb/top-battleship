import ship from './ship';

const gameBoard = () => {
  let _placedShips;
  let xRow = new Array(10).fill(0);

  const placeShip = (ship, x, y) => {
    if (ship) {
      if (x + ship.getLength() >= 10 || y + ship.getLength() >= 10) {
        return false;
      } else return true;
    }
  };
  return { placeShip };
};
export default gameBoard;

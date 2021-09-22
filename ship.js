const ship = (length) => {
  const _length = length;
  const _positions = new Array(length).fill(0);
  const getLength = () => _length;
  const hit = (i) => {
    if (i < _length) {
      _positions[i] = 1;
      return true;
    } else return false;
  };
  const wasSunk = () => {
    if (_positions.every((i) => i == 1)) return true;
    else return false;
  };
  return { getLength, hit, wasSunk };
};

export default ship;

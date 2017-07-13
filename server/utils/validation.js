var isRealString = (str) => {
  return typeof str === 'string' && str.trim().length > 0;
};

var validateRoom = (str) => {
  return str.trim().toLowerCase();
};

module.exports = {isRealString, validateRoom};

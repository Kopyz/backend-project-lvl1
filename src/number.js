
const genRandomNumber = () => {
  const upperLimitForRandomNum = 50;
  const bottomLimitForRandomNum = 1;
  return Math.floor(Math.random() * upperLimitForRandomNum) + bottomLimitForRandomNum;
};

export default genRandomNumber;

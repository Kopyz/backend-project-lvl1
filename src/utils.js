
const genRandomNumber = (minNumber, maxNumber) => Math.floor(Math.random() * maxNumber) + minNumber;

const genDataFunction = (genData, genAnswer, toString) => {
  const genGameData = () => {
    const data = genData();
    const sendData = (selector) => {
      if (selector === 'result') {
        return genAnswer(data);
      }
      if (selector === 'question') {
        return toString(data);
      }
      return 'Use right selector: "result" or "question"';
    };
    return sendData;
  };
  return genGameData();
};
export { genRandomNumber, genDataFunction };

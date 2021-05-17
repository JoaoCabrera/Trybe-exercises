const generateNumber = () => {
  const myPromise = new Promise((resolve, reject) => {
    let array = [];
    while (array.length < 10) {
      const random = Math.floor(Math.random() * 50);
      array.push(random ** 2)
    }
    const result = array.reduce((acc, crr) => acc + crr);
    if (result < 8000) {
      newArray = [2, 3, 5, 10];
      resolve();
      const numbers = newArray.map((number) => {
        return result / number
      })
      const sum = numbers.reduce((acc, crr) => acc + crr);
      console.log(numbers);
      console.log(sum);
    } else {
      reject();
      console.log('É mais de oito mil! Essa promise deve estar quebrada!');
    }
})
myPromise
  .then ()
  .catch ((error) => (error));
}

generateNumber();

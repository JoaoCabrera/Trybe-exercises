const generateNumber = () => {
  const myPromise = new Promise((resolve, reject) => {
    let array = [];
    while (array.length < 10) {
      const random = Math.floor(Math.random() * 50);
      array.push(random ** 2)
    }
    const result = array.reduce((acc, crr) => acc + crr);
    (result < 8000) ? resolve() : reject()
})
myPromise
  .then (() => console.log('Promise resolvida'))
  .catch (() => console.log('Promise rejeitada'));
}

generateNumber();
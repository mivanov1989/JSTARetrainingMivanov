//Task1

function getPromise(message, delay) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(message);
      }, delay);
    });
  }
  
  getPromise("Hello!", 2000).then((data) => console.log(data));
  
  //Task2
  
  function callArrProduct(numbers) {
    let result = 1;
    const arr = Array.from(numbers);
    return new Promise((resolve, reject) => {
      if (
        arr.every((number) => {
          return typeof number === "number";
        })
      ) {
        arr.forEach((number) => (result *= number));
        resolve(result);
      } else {
        reject("Error! Incorrect array!");
      }
    });
  }
  
  callArrProduct([3, 5, 6]).then((res) => console.log(res)); //90
  callArrProduct([3, 5, "a", 6]).catch((res) => console.log(res)); //Error! Incorrect array!
  
  //Task3
  const delay = (i, time) =>
    new Promise((resolve) => setTimeout(() => resolve(i), time));
  
  function showNumbers() {
    for (let i = 0, p = Promise.resolve(); i < 10; i++) {
      let t = Math.random() * 1000;
      p = p.then(
        () =>
          new Promise((resolve) => {
            delay(i, t).then((result) => {
              console.log(result);
              resolve();
            });
          })
      );
    }
  }
  
  showNumbers();
  
  //Task4
  const delay = (i, time) =>
    new Promise((resolve) => setTimeout(() => resolve(i), time));
  
  async function showNumbers() {
    for (let i = 0; i < 10; i++) {
      let t = Math.random() * 1000;
      await delay(i, t).then((result) => console.log(result));
    }
  }
  
  showNumbers();  
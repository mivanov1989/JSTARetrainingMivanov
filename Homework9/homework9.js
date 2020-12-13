//Task1
let arr = ["Tom", "Sam", "Ray", "Bob"];

let [x, y,,...z] = arr;

console.log(x);
console.log(y);
console.log(z);

//Task2
let data = {
    names: ["Sam", "Tom", "Ray", "Bob"],
    ages: [20, 24, 22, 26],
 };

let {names:[, name2,, name4], ages:[, age2,, age4]} = data;

console.log(name2); // "Tom"
console.log(age2); // 24
console.log(name4); // "Bob"
console.log(age4); // 26

//Task3
function mul(...args) {
    let sum = 0;
    Array.from(args).forEach(arg => {
        if(!isNaN(arg) && typeof arg === "number") {
            sum += arg;
        }
    })
    return sum;
}

console.log(mul(1, "str", 2, 3, true)); //6

//Task4
let server = {
    data: 0,
    convertToString: function (callback) {
      callback(() => this.data + "");
    },
  };
  let client = {
    server: server,
    result: "",
    calc: function (data) {
      this.server.data = data;
      this.server.convertToString(this.notification());
    },
    notification: function () {
      return (callback) => {
        this.result = callback();
      };
    },
  };
  client.calc(123);
  console.log(client.result); // "123"
  console.log(typeof client.result); // "string"

  //Task5
let keys = [1, 2, 3, 4];
let values = ["div", "span", "b", "i"];

function mapBuilder(keysArray, valuesArray) {
  const k = Array.from(keysArray);
  const v = Array.from(valuesArray);
  if (k.length === v.length) {
    let result = new Map();
    k.forEach((k, i) => {
      result.set(k, v[i]);
    });
    return result;
  } else {
    console.log("Arrays with keys and values have different lengths");
  }
}

console.log(mapBuilder(keys, values).size); //4
console.log(mapBuilder(keys, values).get(2)); //span
  
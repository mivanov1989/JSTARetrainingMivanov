//Task1
function testThrow(e) {
    try {
      throw e;
    } catch (e) {
      console.log(`Caught ${e}`);
    }
  }
  
  testThrow(5);
  
  //Task2
  function calcArea(width, height) {
    try {
      if (isNaN(width) || isNaN(height) && (width <= 0 || height <= 0)) {
        throw new Error(
          "One or both parameters is not numeric, or less than a zero."
        );
      } else {
        return width * height;
      }
    } catch (e) {
      console.log("Error: " + e.message);
    }
  }
  
  calcArea(10, 5);
  
  //Task3
  function checkAge() {
    try {
      const age = prompt("Please enter your age:");
      if (age.trim() === "") {
        throw new Error("The field is empty! Please enter your age.");
      } else if (!parseFloat(age)) {
        throw new Error("You've enter non-numeric value! Please enter your age.");
      } else if (parseFloat(age) < 14) {
        throw new Error("Your are under 14! Please enter your age.");
      } else {
        alert("Access to the movie granted!");
      }
    } catch (e) {
      alert(e);
      //Here we call the function checkAge() recursivelly to ask for the age again
      checkAge();
    }
  }
  
  checkAge();
  
  //Task4
  class MonthException extends Error {
    constructor(message) {
      super(message);
      this.name = "MonthException";
    }
  }
  
  function showMonthName(month) {
    switch (month) {
      case 1:
        return "January";
      case 2:
        return "February";
      case 3:
        return "March";
      case 4:
        return "April";
      case 5:
        return "May";
      case 6:
        return "June";
      case 7:
        return "July";
      case 8:
        return "August";
      case 9:
        return "September";
      case 10:
        return "October";
      case 11:
        return "November";
      case 12:
        return "December";
      default:
        if (!parseInt(month) || month < 1 || month > 12) {
          throw new MonthException("Incorrect month number");
        }
        break;
    }
  }
  
  //Task5
  const userIds = [7, -12, 44, 22];
  
  function showUser(_id) {
    try {
      if (_id >= 0) {
        //Also we can use here JSON.stringify({id: _id});
        return `{id: ${_id}}`;
      } else {
        throw new Error(`ID must not be negative: ${_id}`);
      }
    } catch (e) {
      throw e;
    }
  }
  
  function showUsers(ids) {
    let arr = Array.from(ids);
    let arr2 = arr
      .map((id) => {
        try {
          return showUser(id);
        } catch (e) {
          if (e.message.startsWith("ID must not be negative")) {
            alert(e);
          }
        }
      })
      .filter((id) => id);
    alert(arr2);
  }
  
  showUsers(userIds);
  
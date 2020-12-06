//Task1

function upperCase(string) {
    /^[A-Z]/.test(string) 
    ? console.log("String starts with uppercase character")
    : console.log("String does not start with uppercase character");
}

//console.log(upperCase('GGijijjioaSSSD')); //"String starts with uppercase character"

//Task2

function checkEmail(email) {
    return  /[^ @]+@{1}[^ @]+\.[^ @]+$/y.test(email);
}

//console.log(checkEmail('name@2.asd.com')); //true

//Task5

'hello world'.replace(/(\S+)\s(\S+)/, "$2, $1");

//Task6

function checkEmailWithRequirements(email) {
//Requirement to not allow more than 1 "-" does not work
  if(/^[^#-_].+-?[\w]+@{1}[\w]+\.[\w]+$/g.test(email)) {
    console.log("Email is correct!");
  } else {
    console.log("Email is not correct!");
  }
}

//checkEmailWithRequirements('my_mail@gmail.com') //true
//checkEmailWithRequirements('#my_mail@gmail.com') //false

//Task7
function checkLogin(login) {
    console.log(/^[^\d][A-Za-z\d(\.\d+)?]{1,9}$/.test(login));
    console.log(login.match(/\d+(\.\d)?/g));
};

//checkLogin("ee1.1ret3");
//true
//1.1, 3

//checkLogin("ee1*1ret3");
//false
//1, 1, 3
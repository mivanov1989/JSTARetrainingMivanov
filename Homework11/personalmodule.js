exports.greetUser = function(username) {
    const date = new Date();
    switch (true) {
        case (6 < date.getHours() < 12): 
        return `Date of request: ${date}\nGood morning, ${username}!`;
            break;
        case (12 < date.getHours() < 18): 
        return `Date of request: ${date}\nGood day, ${username}!`;
            break;
        case (18 < date.getHours() < 23): 
        return `Date of request: ${date}\nGood evening, ${username}!`;
            break;
        case (0 < date.getHours() < 6): 
        return `Date of request: ${date}\nGood night, ${username}!`;
            break;
        default:
            break;
    }
  }
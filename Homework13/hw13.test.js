const userList = ['Nick', 'Kate', 'quest123', 'admin', 'new_user_2']; 

//Custom matcher for task 2
expect.extend({
    arrayToHaveElementAtIndex(array, el, index) {
      const pass = Array.from(array)[index] === el;
      if (pass) {
        return {
          message: () =>
            `expected ${el} to be at index ${index} of array ${array}`,
          pass: true,
        };
      } else {
        return {
          message: () =>
            `expected ${el} not to be at index ${index} of array ${array}`,
          pass: false,
        };
      }
    },
  });

describe("Homework 13 tests", () => {

    //Task 1
    test('adding of 0.2 and 0.1 resultts with 0.3', () => {
        expect(+(0.1 + 0.2).toPrecision(1)).toBe(0.3);
    });

    //Task 2
    test('the array has element "admin"', () => {
        expect(userList).toContain('admin');
    });
    test('the array starts with "Nick"', () => {
        expect(userList).arrayToHaveElementAtIndex('Nick', 0);
    });
    test('the array ends with "new_user_2"', () => {
        expect(userList).arrayToHaveElementAtIndex('new_user_2', userList.length - 1);
    });
    test('the length of the array equals 5', () => {
        expect(userList).toHaveLength(5);
    });
    test('the type of 3rd element is "string"', () => {
        expect(typeof userList[3]).toBe('string');
    });
    test('there\'s no 8th element in the array', () => {
        expect(userList[8]).toBeUndefined();
    });

});


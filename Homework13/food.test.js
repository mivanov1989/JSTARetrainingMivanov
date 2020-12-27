const foodFilter = require('./food');

const food = [
    { kind: 'potato', price: 10 },
    { kind: 'bred', price: 16 },
    { kind: 'pepper', price: 27 },
    { kind: 'banana', price: 32 },
    { kind: 'lemon', price: 50 }
];

describe('tests for functions in food.js', () => {
    test('length of the filtered array equals 3', () => {
        expect(foodFilter.filterFoodPrice(food, 12, 40)).toHaveLength(3);
    });
    test('the filtered array contains object {kind: "pepper", price: 27}', () => {
        expect(foodFilter.filterFoodPrice(food, 12, 40)).toContainEqual({kind: "pepper", price: 27});
    });
    test('the filtered array contains 2nd, 3rd and 4th elements of array "food" ', () => {
        expect(foodFilter.filterFoodPrice(food, 12, 40)).toEqual(expect.arrayContaining(food.slice(1, 3)));
    });
    test('"price" property of 1st element of the filtered array is greater than min value - 12', () => {
        expect(foodFilter.filterFoodPrice(food, 12, 40)[0].price).toBeGreaterThan(12);
    });
    test('"price" property of 3rd element of the filtered array is less than max value - 40', () => {
        expect(foodFilter.filterFoodPrice(food, 12, 40)[2].price).toBeLessThan(40);
    });
    test('the filtered array does not contain object {kind: "lemon", price: 50}', () => {
        expect(foodFilter.filterFoodPrice(food, 12, 40)).not.toContainEqual({kind: "lemon", price: 50});
    });
    test('objects in the filtered array matches pattern {kind: expect.stringMatching(/bread|pepper|banana/)}', () => {
        foodFilter.filterFoodPrice(food, 12, 40).forEach(f => {
            expect(f).toMatchObject({kind: expect.stringMatching(/bred|pepper|banana/)});
        }); 
    });
    test('the filter function return an empty array if there are no elements match limits', () => {
        expect(foodFilter.filterFoodPrice(food, 100, 200)).toHaveLength(0);
    });
    test('the filter function throws error if passed array is not defined', () => {
        expect(() => {foodFilter.filterFoodPrice(undefined, 12, 40);}).toThrow();
    });
});
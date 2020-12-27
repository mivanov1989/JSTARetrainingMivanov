const circle = require('./calcCircle');

describe('test for functions in calcCircle.js', () => {
    test('circle length equals 138.2 with precision equals 1 and radius equals 22', () => {
        expect(+circle.getCircleLength(22).toPrecision(4)).toBe(138.2);
    });
    test('circle area equals 254.47 if radius equals 9', () => {
        expect(Math.round(circle.getCircleArea(9) * 100)/100).toBe(254.47);
    });
    test('calling of the function getCircleLength', () => {
        expect(circle.getCircleLength()).toBeNaN();
    });
    test('calling of the function getCircleArea', () => {
        expect(circle.getCircleArea()).toBeNaN();
    });
});
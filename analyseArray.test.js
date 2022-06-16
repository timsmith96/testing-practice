import analyseArray from './analyseArray';

test('check an object is returned', () => {
  expect(analyseArray([1, 2, 3])).toEqual({
    average: expect.any(Number),
    min: expect.any(Number),
    max: expect.any(Number),
    length: expect.any(Number),
  });
});

test('check average property works', () => {
  expect(analyseArray([10, 20, 30])).toEqual({
    average: 20,
    min: expect.any(Number),
    max: expect.any(Number),
    length: expect.any(Number),
  });
});

test('check min property works', () => {
  expect(analyseArray([450, 2, 3, 67, 120])).toEqual({
    average: expect.any(Number),
    min: 2,
    max: expect.any(Number),
    length: expect.any(Number),
  });
});

test('check max property works', () => {
  expect(analyseArray([4000, 5, 7, 50])).toEqual({
    average: expect.any(Number),
    min: expect.any(Number),
    max: 4000,
    length: expect.any(Number),
  });
});

test('check length property works', () => {
  expect(analyseArray([10])).toEqual({
    average: expect.any(Number),
    min: expect.any(Number),
    max: expect.any(Number),
    length: 1,
  });
});

test('check everything works together', () => {
  expect(analyseArray([5, 2, 5, 10, 34, 53, 23, 9.3, -1, -40])).toEqual({
    average: expect.closeTo(10.03),
    min: -40,
    max: 53,
    length: 10,
  });
});

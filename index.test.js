const index=require('./index');

test('should count the max amount of consecutive number ones in the array', () => {
    expect(index([1,1,0,0,0,1,1,1,1])).toBe(4);
})

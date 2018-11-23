assert = require('chai').assert
const quickSort = require('../quick-sort')

describe("Sorting Algorithm", function() {
  context("Quick Sort", function() {
    it('should sort the array', function () {
      const originalArray = [8,4,5,9,1];
      const sortedArray = [1,4,5,8,9];
      assert.deepEqual(quickSort(originalArray), sortedArray)
    });
  });
});

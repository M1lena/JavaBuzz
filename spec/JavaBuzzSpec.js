describe('Javabuzz', function() {

  var javabuzz;

  beforeEach(function() {
      javabuzz = new Javabuzz();
  });

  describe("it knows when number is", function() {
    it("divisible by three", function() {
      expect(javabuzz.isDivisibleByThree(3)).toBe(true);
    });

  });

  describe("it knows when a number is NOT", function() {

    it("divisible by three", function() {
      expect(javabuzz.isDivisibleByThree(1)).toBe(false);
    });

  });

});

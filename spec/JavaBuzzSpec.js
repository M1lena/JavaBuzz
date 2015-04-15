describe('Javabuzz', function() {

  var javabuzz;

  describe("it knows when number is", function() {

    it("divisible by three", function() {
      javabuzz = new Javabuzz();
      expect(isDivisibleByThree(3)).toBe(true);
    });

  });

});
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

  describe('it knows when number is', function() {

    it('divisible by five', function() {
      expect(javabuzz.isDivisibleByFive(5)).toBe(true);
    });

  });

  describe('it knows when number is NOT', function() {

    it('divisible by five', function() {
      expect(javabuzz.isDivisibleByFive(1)).toBe(false);
    });

  });

  describe('it knows when number is', function() {

    it('divisible by fifteen', function() {
      expect(javabuzz.isDivisibleByFifteen(15)).toBe(true);
    });

  });

  describe('it knows when number is NOT', function () {

    it('divisible by fifteen', function() {
      expect(javabuzz.isDivisibleByFifteen(1)).toBe(false);
    });

  });

  describe('when playing says "Java"', function() {

    it('when divisible by three', function() {
      expect(javabuzz.says(3)).toEqual('Java');
    });

  });

  describe('when playing says "Buzz"', function () {

    it('when divisible by five', function() {
      expect(javabuzz.says(5)).toEqual('Buzz');
    });

  });

  describe('when playing says "JavaBuzz"', function() {

    it('when divisible by fifteen', function() {
      expect(javabuzz.says(15)).toEqual('JavaBuzz');
    });

  });

});

describe("Simplest Test", function() {

  it("should work", function() {
   expect(true).toBe(true);
  });

  it("should return random number between 0 and 9999", function() {
    let answer = setHiddenFields();
    expect(answer).toBeGreaterThan(0);
    expect(answer).toBeLessThan(10000);
  });


});

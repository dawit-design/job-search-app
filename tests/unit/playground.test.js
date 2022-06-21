import {evenOrOdd, multiply} from "@/playGround"

describe("basic math", () =>{
  it("adds two numbers", () => {
    expect(1 + 2).toBe(3);
  });
  it("subtracts two numbers", () => {
    expect(30 - 25).toBe(5);
  });
  describe("evenOrOdd", () => {
    describe("when the number is even", () =>{
      it("indicates the number is even", () =>{
        expect(evenOrOdd(4)).toBe("Even")
      })
    })
    describe("when the number is odd", () => {
      it("indicates the number is odd", () => {
        expect(evenOrOdd(3)).toBe("Odd")
      })
    })
  })

  describe("multiply", () => {
    it("multiply two numbers together", () => {
      expect(multiply(4,3)).toBe(12)
    })
  })
});

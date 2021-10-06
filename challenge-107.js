/* Given a string of characters, return the character that appears the most often.

describe("Max Character", () => {
 it("Should return max character", () => {
  assert.equal(max("Hello World!"), "l");
 });
});

No String or Array Methods (well brute force it first, but then no methods)!  */

function tripleTrouble(one, two, three) {
    let result = "";
    for (let i = 0; i < one.length; i++) {
      result += one.charAt(i) + two.charAt(i) + three.charAt(i);
    }
    return result;
  }
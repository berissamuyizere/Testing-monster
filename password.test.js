const validPassword = require("./password")

describe("tests", ()=>{
    test("Password that contains 8 to 16 characters,contains atleat one letter and a number and is alphanumeric", ()=>{
        expect(validPassword("Berissa@123")).toBe(true)
    });

    test("Password that contains  charaters less than 8 and more than 16 characters, and is not alphanumeric", ()=>{
        expect(validPassword("berissa")).toBe(false)
    });
});
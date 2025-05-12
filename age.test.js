const isValidAge = require("./age")


describe("valid and invalid", () =>{
    test("should succesfully login", () =>{
        expect(isValidAge(18)).toBe(true);
        expect(isValidAge(19)).toBe(true);
        expect(isValidAge(59)).toBe(true);
        expect(isValidAge(60)).toBe(true);
    });

    test("should throw an error", ()=>{
        expect(isValidAge(17)).toBe(false);
        expect(isValidAge(61)).toBe(false)
    })

});
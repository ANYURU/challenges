const IS_DISARIUM = require("../src/disarium")

console.log(typeof IS_DISARIUM)
test("Expect IS_DISARIUM to be a function.", ()=>{
    expect(typeof IS_DISARIUM).toEqual('function')
})

test("Expect IS_DINARIUM not to be undefined.", ()=>{
    expect(IS_DISARIUM()).toBeDefined()
})
const IS_DISARIUM = require("../src/disarium")
//Testing whether IS_DISARIUM is a function
test(`Expect IS_DISARIUM toBe a function.`, ()=>{
    expect(typeof IS_DISARIUM).toEqual('function')
})

//Testing whether IS_DISARIUM is defined
test(`Expect IS_DINARIUM toBe defined.`, ()=>{
    expect(IS_DISARIUM()).toBeDefined()
})


//Testing for disarium numbers 
test(`Expect IS_DISARIUM(89) toBe true`, ()=>{
    expect(IS_DISARIUM(89)).toBe(true)
})

test(`Expect IS_DISARIUM(135) toBe true`, ()=>{
    expect(IS_DISARIUM(135)).toBe(true)
})
 
test(`Expect IS_DISARIUM(518) toBe true`, ()=>{
    expect(IS_DISARIUM(518)).toBe(true)
})

//Testing for non disarium numbers
test(`Expect IS_DISARIUM(500) toBe true`, ()=>{
    expect(IS_DISARIUM(500)).toBe(false)
})


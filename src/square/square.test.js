const square = require('./square')

test('Валидация значения', ()=>{
    expect(square(50)).toBe(2500)
})

describe('square', ()=>{
    // test('Валидация значения1', ()=>{
    //     expect(square(1)).toEqual(1)
    // })
    // test('Валидация значения2', ()=>{
    //     expect(square(5)).toEqual(25)
    // })
    // test('Валидация значения3', ()=>{
    //     expect(square(-7)).toEqual(49)
    // })
    const spyMathPow = jest.spyOn(Math, 'pow');
    square(5)
    expect(spyMathPow).toBeCalledTimes(1)// cколько вызовов ждем метода pow выше описано

    square(1)
    expect(spyMathPow).toBeCalledTimes(0)


    afterEach(()=>{
        jest.clearAllMocks()
    })
})

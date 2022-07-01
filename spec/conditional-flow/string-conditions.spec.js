const { answerOne,
    answerTwo,
    answerThree,
    answerFour,
    answerFive,
    answerSix,
    answerSeven,
    MONTH,
    answerEight } = require('../../src/conditional-flow/string-conditions')

describe("answerOne", () => {
    it("should be true", () => {
        expect(answerOne).toBe(true)
    })
})

describe("answerTwo", () => {
    it("should be true", () => {
        expect(answerTwo).toBe(true)
    })
})

describe("answerThree", () => {
    it("should be true", () => {
        expect(answerThree).toBe(true)
    })
})

describe("answerFour", () => {
    it("should be true", () => {
        expect(answerFour).toBe(true)
    })
})

describe("answerFive", () => {
    it("should be false", () => {
        expect(answerFive).toBe(false)
    })
})

describe("answerSix", () => {
    it("should be 'y'", () => {
        expect(answerSix).toBe('y')
    })
})

describe("answerSeven", () => {
    it("should be 'le'", () => {
        expect(answerSeven).toBe('le')
    })
})

describe("answerEight", () => {
    it("should be 'Winter'", () => {
        if (MONTH in ['December', 'January', 'February']) {
            expect(answerEight).toEqual('Winter')
        }
    })

    it("should be 'Autumn'", () => {
        if (MONTH in ['September', 'October', 'November']) {
            expect(answerEight).toEqual('Autumn')
        }
    })

    it("should be 'Summer'", () => {
        if (MONTH in ['June', 'July', 'August']) {
            expect(answerEight).toEqual('Summer')
        }
    })

    it("should be 'Spring'", () => {
        if (MONTH in ['March', 'April', 'May']) {
            expect(answerEight).toEqual('Spring')
        }
    })
})

const hero = require('./heroes-model')

const db = require("../data/config")

beforeEach(async () => {
    await db.seed.run()
})

afterAll(async () => {
    await db.destroy()
})

describe("db functions unit tests", () => {
    it("Adds a hero", () => {
        return hero.add({name:"Groot", universe:"Marvel"})
            .then(res => {
                expect(res).toMatchObject({name:"Groot", universe:"Marvel"})
            })

       
    })
})
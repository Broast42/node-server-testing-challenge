const supertest = require("supertest")
const server = require("../index")
const db = require("../data/config")

beforeEach(async () => {
    await db.seed.run()
})

afterAll(async () => {
    await db.destroy()
})

describe("heroes intergration tests", () => {
    it("POST /heroes", async () => {
        const data = { name: "Groot", universe: "Marvel"}
        const res = await supertest(server).post("/heroes").send(data)
		expect(res.statusCode).toBe(201)
		expect(res.type).toBe("application/json")
		expect(res.body.name).toBe("Groot")
    })
   
    it("POST /heroes (missing data)", async () => {
        const data = { name: "Groot"}
        const res = await supertest(server).post("/heroes").send(data)
		expect(res.statusCode).toBe(500)
 
    })

    it("DELETES /heroes/:id", async () => {
        const res = await supertest(server).delete("/heroes/4")
        expect(res.statusCode).toBe(201)
    })

    it("DELETES /heroes/ (missing id)", async () => {
        const res = await supertest(server).delete("/heroes/50")
        expect(res.statusCode).toBe(500)
    })

    
})
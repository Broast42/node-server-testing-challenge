
const db = require("../data/config")

async function add(hero){
    const [id] = await db("heroes").insert(hero)
    const result = await db("heroes")
        .select("name", "universe")
        .where("id", id)
        .first()

    return result 
}

function remove(id){
    return db("heroes").where("id", id).del()
}

function getById(id){
    return db("heroes")
    .select("name", "universe")
    .where("id", id)
    .first()
}

module.exports = {
    add,
    remove,
    getById,
}
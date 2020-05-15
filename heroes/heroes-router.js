const router = require("express").Router()
const db = require("./heroes-model")

router.post("/", async(req, res, next) => {
    try{
        if(!req.body.name || !req.body.universe){
            res.status(500).json({message: "There was an error: missing data"})
        }else{
            const hero = await db.add(req.body)
            res.status(201).json(hero)
        }
    }catch(err){
        next(err)
    }
})

router.delete("/:id", async (req, res, next) => {
    try{
        const hero = await db.getById(req.params.id)
        if(!hero){
            res.status(500).json({message: "There was an error"})
        }else{
            const hero = await db.remove(req.params.id)
            res.status(201).json(hero)
        }
    }catch(err){
        next(err)
    }
})


module.exports = router
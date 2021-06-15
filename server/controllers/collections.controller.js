const collectionRouter = require("express").Router();
const User = require("../models/User");
const Collection = require("../models/Collection");

collectionRouter.get("/allcollections/:name", async (req, res) => {
    const { params } = req
    const { name } = params

    const collectionsFound = await Collection.findById(name)

    
    res.send({price: collectionsFound.price})
});

collectionRouter.get('/allcollections', async (req, res) => {
    const collectionsFound = await Collection.find({})
    const length = collectionsFound.length
    res.send({length: length})
})

module.exports = collectionRouter;































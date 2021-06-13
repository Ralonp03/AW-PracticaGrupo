const bcrypt = require("bcrypt");
const bonificacionRouter = require("express").Router();
const User = require("../models/User");

bonificacionRouter.post("/", async (req, res) => {

    const { body } = req;

    const { nameUser, pointsUser } = body;

    const doc = await User.findOneAndUpdate(
        { name: nameUser },
        { $set: { points: pointsUser } },
        // If `new` isn't true, `findOneAndUpdate()` will return the
        // document as it was before it was updated.
        { new: true }
    );

    const savedDoc = await doc.save();

    res.json(savedDoc);

});

module.exports = bonificacionRouter;
const express = require("express");
const statusRouter = express.Router();
var pjson = require('../package.json');

// Status Check 
statusRouter.get('/', async (req, res) => {
    

    try {

        res.status(200).json({
            "Author": `${pjson.author}`,
            "Services": `${pjson.description}`,
            "Status": "🟢 Its Working",
            "Version": `${pjson.version}`
        })
    } catch (error) {
        res.status(500).json({ error: error.message });
        
    }


});
module.exports = statusRouter;

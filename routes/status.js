const express = require("express");
const Status = require("../models/api_status");
const statusRouter = express.Router();

// Status Check 
statusRouter.get('/', async (req, res) => {
    

    try {
        const status = await req.status;
        if (status == 200) {
            return res.status(200).json({
                msg: "Its Working"
            });
            
        }
        
    } catch (error) {
        res.status(500).json({ error: error.message });
        
    }


});
module.exports = statusRouter;

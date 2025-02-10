import express from "express";
import Item from "../models/item.model.js"; 

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const items = await Item.find(); 
        res.json({ items });
    } catch (error) {
        console.error("Error fetching items:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});


export default router;

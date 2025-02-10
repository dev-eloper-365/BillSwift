import express from "express";
import { getNetAmounts } from "../models/item.model.js"

const router = express.Router();

router.get("/", async (req, res) => {
    try {
      const netAmounts = await getNetAmounts();
      res.json(netAmounts);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch net amounts" });
    }
  });

  export default router;
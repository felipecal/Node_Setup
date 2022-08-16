import express from "express";
import { createServer } from "http";
const app = express();
const httpServer = createServer(app);
const port = process.env.PORT || 4001;

app.get("/", (req, res) => 
    res.send("Fumegou"));

httpServer.listen(port, () => {
    console.log(`🔥 Running at ${port} 🔥`);
});

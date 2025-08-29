import express from "express";
import documentRoutes from "./routes/document.routes";

const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.json({ limit: "15mb" }));

app.use("/document", documentRoutes);

app.get("/health", (_req, res) => res.json({ status: "ok" }));

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

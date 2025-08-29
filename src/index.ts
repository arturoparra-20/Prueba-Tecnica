import express from "express";
import documentRoutes from "./routes/document.routes";

// Configura el servidor Express puerto 3000
const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.json({ limit: "15mb" }));

//Endpoint para generar documentos
app.use("/document", documentRoutes);

app.get("/health", (_req, res) => res.json({ status: "ok" }));

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

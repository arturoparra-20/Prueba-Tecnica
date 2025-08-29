import { Request, Response } from "express";
import { generateDocx } from "../utils/docx.util";

export async function createDocument(req: Request, res: Response) {
  try {
    const { nombre, departamento, descripcion } = req.body;

    if (!nombre || !departamento || !descripcion) {
      return res.status(400).json({
        error: "Faltan parámetros requeridos: nombre, departamento, descripcion (HTML)"
      });
    }

    // genera un Buffer .docx
    const buffer = await generateDocx(nombre, departamento, descripcion);

    const filenameSafe =
      `${String(nombre).trim().replace(/[^\w\-]+/g, "_") || "documento"}.docx`;

    res.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    );
    res.setHeader("Content-Disposition", `attachment; filename="${filenameSafe}"`);
    return res.send(buffer);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Error al generar el documento" });
  }
}

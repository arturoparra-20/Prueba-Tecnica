import htmlToDocx from "@turbodocx/html-to-docx";

export async function generateDocx(
  nombre: string,
  departamento: string,
  descripcionHtml: string
): Promise<Buffer> {
    // Construye el contenido HTML para el documento incluyendo los parametros de la solicitud
  const htmlContent = `
    <div style="font-family: Arial, sans-serif; font-size: 12pt;">
      <h1 style="text-align:center; color:#0056b3;">${nombre}</h1>
      <h3 style="color:#333;">Departamento: ${departamento}</h3>
      <div>${descripcionHtml}</div>
    </div>
  `;

  // Convierte el HTML a un Buffer .docx utilizando html-to-docx turbodocx
  try {
    const buffer = await htmlToDocx(htmlContent, "documento.docx", {
      table: { row: { cantSplit: true } },
      footer: true,
      pageNumber: true,
      font: "Arial",
    });

    return buffer as Buffer;
  } catch (error) {
    console.error("Error en generateDocx:", error);
    throw new Error("No se pudo generar el DOCX");
  }
}

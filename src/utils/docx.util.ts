// @ts-ignore
import htmlToDocx from "html-to-docx";

export async function generateDocx(
  nombre: string,
  departamento: string,
  descripcionHtml: string
): Promise<Buffer> {
  const htmlContent = `
    <div style="font-family: Arial, sans-serif; font-size: 12pt;">
      <h1 style="text-align:center;">${nombre}</h1>
      <h3>Departamento: ${departamento}</h3>
      <div>${descripcionHtml}</div>
    </div>
  `;
  try {
    const buffer = await htmlToDocx(htmlContent, {
      table: { row: { cantSplit: true } },
      footer: true,
      pageNumber: true,
    });
    return buffer;
  } catch (error) {
    console.error("Error en htmlToDocx:", error);
    throw new Error("No se pudo generar el DOCX");
  }
}

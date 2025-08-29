API - Generador de DOCX desde HTML (Node.js + Express + TypeScript)

Genera documentos Word (.docx) a partir de contenido HTML (texto enriquecido, tablas, imágenes —incluyendo imágenes en Base64—). La ruta para crear documentos está protegida con Basic Authentication.

Instalación: 

1. clona el repositorio y entra en la carpeta
    git clone <repo-url>
    cd api-docx
   
2. instala dependencias: npm install
   Opcional instala nodemon global o usa npm run dev
   
3. Prueba el API
   
   Username: admin
   
   Password: 1234
   
   PUERTO: 3000
   
   SE RECOMIENDA UTILIZAR POSTMAN PARA LA PRUEBA DEL API (En la pestaña Authorization ingresar las credenciales )

   ENDPOINT(POST): http://localhost:3000/document

   
   EJEMPLO DE CUERPO DE SOLICITUD CON URL DE IMAGEN:
   
    <```json{
  "nombre": "Joseph Paredes",
  "departamento": "Ventas",
  "descripcion": "<h2 style='color:#0056b3;'>Perfil Profesional</h2>\n<div style='background-color:#eaf5ff; padding:10px; border-radius:8px;'>\n  <p style='font-family:Arial, sans-serif; color:#333; line-height:1.5;'>\n    <b>Juan Pérez</b> es un especialista en el área de <b>Tecnologías de la Información</b>, con amplia experiencia en desarrollo de software, administración de sistemas y soporte técnico.\n  </p>\n</div>\n\n<h2 style='color:#0056b3;'>Habilidades Clave</h2>\n<table style='border-collapse:collapse; width:80%; margin:15px 0; font-family:Arial;'>\n  <tr style='background-color:#0056b3; color:#fff;'>\n    <th style='border:1px solid #ccc; padding:8px 12px;'>Lenguaje</th>\n    <th style='border:1px solid #ccc; padding:8px 12px;'>Nivel</th>\n    <th style='border:1px solid #ccc; padding:8px 12px;'>Experiencia</th>\n  </tr>\n  <tr>\n    <td style='border:1px solid #ccc; padding:8px 12px;'>JavaScript</td>\n    <td style='border:1px solid #ccc; padding:8px 12px;'>Avanzado</td>\n    <td style='border:1px solid #ccc; padding:8px 12px;'>5 años</td>\n  </tr>\n  <tr>\n    <td style='border:1px solid #ccc; padding:8px 12px;'>Python</td>\n    <td style='border:1px solid #ccc; padding:8px 12px;'>Intermedio</td>\n    <td style='border:1px solid #ccc; padding:8px 12px;'>3 años</td>\n  </tr>\n  <tr>\n    <td style='border:1px solid #ccc; padding:8px 12px;'>SQL</td>\n    <td style='border:1px solid #ccc; padding:8px 12px;'>Avanzado</td>\n    <td style='border:1px solid #ccc; padding:8px 12px;'>4 años</td>\n  </tr>\n</table>\n\n<div style='text-align:center; margin:20px 0;'>\n  <img src='https://www.aljazeera.com/wp-content/uploads/2025/06/GettyImages-2214571794-1750583909.jpg?resize=770%2C513&quality=80' alt='Imagen centrada' style='border-radius:12px; box-shadow:0 4px 10px rgba(0,0,0,0.2);' />\n  <p style='font-style:italic; color:#555;'>Imagen ilustrativa</p>\n</div>"
}``` />

   EJEMPLO DE CUERPO DE SOLICITUD CON IMAGEN BASE64 (REEMPLAZAR POR CODIGO GENERADO A BASE64)
   
   <```json{
  "nombre": "Joseph Paredes",
  "departamento": "Ventas",
  "descripcion": "<h2 style='color:#0056b3;'>Perfil Profesional</h2>\n<div style='background-color:#eaf5ff; padding:10px; border-radius:8px;'>\n  <p style='font-family:Arial, sans-serif; color:#333; line-height:1.5;'>\n    <b>Juan Pérez</b> es un especialista en el área de <b>Tecnologías de la Información</b>, con amplia experiencia en desarrollo de software, administración de sistemas y soporte técnico.\n  </p>\n</div>\n\n<h2 style='color:#0056b3;'>Habilidades Clave</h2>\n<table style='border-collapse:collapse; width:80%; margin:15px 0; font-family:Arial;'>\n  <tr style='background-color:#0056b3; color:#fff;'>\n    <th style='border:1px solid #ccc; padding:8px 12px;'>Lenguaje</th>\n    <th style='border:1px solid #ccc; padding:8px 12px;'>Nivel</th>\n    <th style='border:1px solid #ccc; padding:8px 12px;'>Experiencia</th>\n  </tr>\n  <tr>\n    <td style='border:1px solid #ccc; padding:8px 12px;'>JavaScript</td>\n    <td style='border:1px solid #ccc; padding:8px 12px;'>Avanzado</td>\n    <td style='border:1px solid #ccc; padding:8px 12px;'>5 años</td>\n  </tr>\n  <tr>\n    <td style='border:1px solid #ccc; padding:8px 12px;'>Python</td>\n    <td style='border:1px solid #ccc; padding:8px 12px;'>Intermedio</td>\n    <td style='border:1px solid #ccc; padding:8px 12px;'>3 años</td>\n  </tr>\n  <tr>\n    <td style='border:1px solid #ccc; padding:8px 12px;'>SQL</td>\n    <td style='border:1px solid #ccc; padding:8px 12px;'>Avanzado</td>\n    <td style='border:1px solid #ccc; padding:8px 12px;'>4 años</td>\n  </tr>\n</table>\n\n<div style='text-align:center; margin:20px 0;'>\n  <img src='data:image/png;base64,{{AQUI_TU_BASE64}}' alt='Imagen centrada' style='border-radius:12px; box-shadow:0 4px 10px rgba(0,0,0,0.2); max-width:400px;' />\n  <p style='font-style:italic; color:#555;'>Imagen ilustrativa</p>\n</div>"
}``` />


   UNA VEZ EJECUTADO DEBE RESPONDER CON UN 200 OK (EN EL MENU DE LOS TRES PUNTOS (MAS OPCIONES) ELEGIR LA OPCION DE GUARDAR RESPUESTA COMO ARCHIVO Y POSTERIORMETE ELEGIR EL ALOJAMIENTO DEL ARCHIVO .docx)

   Notas sobre HTML, tablas e imágenes

Tablas: El util docx.util.ts preprocesa tablas con cheerio y asegura border, padding, border-collapse en estilos inline para que Word las interprete correctamente.

Imágenes:

Base64 (data:image/png;base64,...) → recomendado (funciona offline y siempre se embeberá).

Remote URLs (https://...) → pueden funcionar si la API puede descargarlas (y la URL responde con Content-Type: image/*). Si falla, el util intenta convertir la URL a dataURI antes de generar el docx.

Tamaño: Si mandas imágenes grandes en base64, aumente el límite de body en index.ts (express.json({ limit: '15mb' }) o más).


PSDT: En esta API se implementaron los requerimientos impuestos en el documento de la prueba tecnica, sin embargo se es consciente de que podian usarse otros tipos de validacion con jwt y otro endpoint que validara al usuario, por otro lado la implementacion de una interfaz visual(frontend) tambien facilitaria el manejo de la misma. 
   

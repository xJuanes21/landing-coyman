export function getEmailTemplate(data: { name: string; email: string; phone: string; message: string }) {
  const { name, email, phone, message } = data;
  
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <style>
          body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #343434;
            margin: 0;
            padding: 0;
            background-color: #f4f4f3;
          }
          .container {
            max-width: 600px;
            margin: 20px auto;
            background: #ffffff;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 4px 15px rgba(0,0,0,0.05);
          }
          .header {
            background-color: #0f2549;
            padding: 40px;
            text-align: center;
          }
          .logo-wrapper {
            display: inline-block;
            background-color: #0f2549;
            padding: 25px;
            border-radius: 30px;
            box-shadow: inset 4px 4px 10px rgba(0,0,0,0.5), inset -2px -2px 6px rgba(255,255,255,0.05);
          }
          .header img {
            max-width: 150px;
            height: auto;
            display: block;
            margin: 0 auto;
          }
          .content {
            padding: 40px;
          }
          .content h1 {
            color: #0f2549;
            font-size: 24px;
            margin-bottom: 20px;
            border-bottom: 2px solid #e4802c;
            display: inline-block;
            padding-bottom: 5px;
          }
          .field {
            margin-bottom: 20px;
          }
          .label {
            font-weight: bold;
            color: #e4802c;
            display: block;
            text-transform: uppercase;
            font-size: 12px;
            letter-spacing: 1px;
          }
          .value {
            font-size: 16px;
            color: #0f2549;
            display: block;
            margin-top: 5px;
          }
          .footer {
            background-color: #f4f4f3;
            padding: 20px;
            text-align: center;
            font-size: 12px;
            color: #8d9299;
            border-top: 1px solid #e0e0e0;
          }
          .accent-bar {
            height: 4px;
            background: linear-gradient(90deg, #0f2549 0%, #e4802c 100%);
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <div class="logo-wrapper">
              <img src="cid:logo_coyman" alt="COYMAN PROYECTOS">
            </div>
          </div>
          <div class="accent-bar"></div>
          <div class="content">
            <h1>Nuevo Lead de Contacto</h1>
            
            <div class="field">
              <span class="label">Nombre Completo:</span>
              <span class="value">${name}</span>
            </div>
            
            <div class="field">
              <span class="label">Correo Electrónico:</span>
              <span class="value">${email}</span>
            </div>
            
            <div class="field">
              <span class="label">Teléfono Móvil:</span>
              <span class="value">${phone}</span>
            </div>
            
            <div class="field">
              <span class="label">Requerimiento:</span>
              <span class="value" style="white-space: pre-wrap;">${message}</span>
            </div>
          </div>
          <div class="footer">
            Este es un correo automático enviado desde el sitio web de COYMAN PROYECTOS.
          </div>
        </div>
      </body>
    </html>
  `;
}

# 📊 Guía de Conexión: Google Sheets como Base de Datos

Esta guía explica en 5 pasos sencillos cómo conectar el **Desafío de Liderazgo Medipiel** con una **Hoja de Cálculo en Google Drive** para recibir en tiempo real las respuestas de todos los participantes de la empresa.

---

## Paso 1: Crear la Hoja de Cálculo en Google Drive
1. Abre tu cuenta de Google (de preferencia la cuenta institucional de **Medipiel**).
2. Ve a [Google Drive](https://drive.google.com/) o directamente a [Google Sheets](https://sheets.new).
3. Crea una hoja en blanco y nómbrala:  
   **`Desafío de Liderazgo - Medipiel (Respuestas)`**

---

## Paso 2: Abrir el Editor de Apps Script
1. En el menú superior de la hoja de cálculo, haz clic en:  
   **Extensiones** ➔ **Apps Script**
2. Se abrirá una nueva pestaña con el editor de código de Google.
3. Si hay código previo (por ejemplo `function myFunction() { ... }`), **bórralo todo**.

---

## Paso 3: Pegar el Código del Backend
1. Abre en este repositorio el archivo [`google_apps_script.js`](./google_apps_script.js).
2. Copia todo su contenido (Ctrl + A y luego Ctrl + C).
3. Pégalo en el editor de Apps Script.
4. Presiona el ícono del disquete 💾 o **Ctrl + S** para guardar el proyecto.

> **Opcional (Crear encabezados de inmediato):**  
> En la barra de herramientas de Apps Script, en el desplegable de funciones selecciona `setupSheet` y haz clic en **Ejecutar**. La primera vez te pedirá autorizar permisos; luego, tu hoja de cálculo quedará formateada con los colores oficiales de Medipiel (azul marino y dorado) y todos los encabezados listos.

---

## Paso 4: Publicar como Aplicación Web (¡Paso Clave!)
1. En la esquina superior derecha del editor de Apps Script, haz clic en el botón azul **Implementar** (o *Deploy*) ➔ **Nueva implementación**.
2. En la ventana emergente, haz clic en el ícono de engranaje ⚙️ (*Seleccionar tipo*) y elige **Aplicación web**.
3. Llena los siguientes campos:
   * **Descripción:** `API Medipiel v1`
   * **Ejecutar como:** `Yo (tu_correo@medipiel.com.co)`
   * **Quién tiene acceso:** **`Cualquier usuario`** *(o "Anyone" en inglés)*.  
     *(⚠️ Es indispensable seleccionar "Cualquier usuario" para que los celulares de los líderes puedan enviar sus respuestas a la hoja sin tener que pedir inicio de sesión a Google).*
4. Haz clic en **Implementar**.
5. Google te mostrará una ventana pidiendo autorización de permisos:
   * Haz clic en **Revisar permisos**.
   * Selecciona tu cuenta de Google.
   * Si sale un aviso *"Google no ha verificado esta aplicación"*, haz clic en **Avanzado** (abajo a la izquierda) y luego en **Ir a Proyecto (no seguro)**.
   * Haz clic en **Permitir**.
6. Google te entregará una ventana final con la **URL de la aplicación web**.  
   *Se ve algo así:* `https://script.google.com/macros/s/AKfycbx.../exec`
7. Haz clic en **Copiar**.

---

## Paso 5: Vincular la URL en el Proyecto
Tienes dos formas sencillas de conectarla:

### Forma A: Desde el Portal Administrador (Recomendada, sin tocar código)
1. Abre tu aplicación: [https://desafio-liderazgo-medipiel.vercel.app/admin.html](https://desafio-liderazgo-medipiel.vercel.app/admin.html)
2. Inicia sesión con tus credenciales de Administrador.
3. Haz clic en el botón **⚙️ Google Sheets** en la barra superior.
4. Pega la URL copiada en el campo de texto y haz clic en **Probar y Guardar Conexión**.
5. ¡Listo! El portal confirmará la conexión y empezará a sincronizar en vivo.

### Forma B: En el archivo `google_sheets_config.js`
1. Abre el archivo [`google_sheets_config.js`](./google_sheets_config.js).
2. Pega tu URL en la línea `DEFAULT_SCRIPT_URL`:
   ```javascript
   DEFAULT_SCRIPT_URL: "https://script.google.com/macros/s/TU_CODIGO_AQUI/exec",
   ```
3. Guarda el archivo y despliégalo a GitHub / Vercel.

---

## ¿Qué información verás en tu Hoja de Google Sheets?
La hoja organizará automáticamente:
* **Datos del participante:** ID, Nombre Completo, Fecha de Inicio, Última Actividad, % de Progreso y Estado (En Progreso / Completado).
* **Respuestas de casos:** Letra seleccionada en cada uno de los 15 casos (D1_C1 a D5_C3).
* **Reflexiones diarias:** Texto completo de la reflexión que escribió el líder al final de cada uno de los 5 días.

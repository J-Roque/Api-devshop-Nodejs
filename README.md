# Api devshop

Descripción concisa del proyecto.

## Inicializar el Proyectos

Para comenzar un nuevo proyecto Node.js, ejecuta el siguiente comando para generar un archivo `package.json` con la configuración predeterminada:

```bash
npm init -y
```

## Instalar Dependencias de Desarrollo

Estas dependencias son útiles durante el desarrollo de aplicaciones Node.js, permitiendo la compilación de código moderno, registro HTTP y reinicio automático del servidor.

```bash
npm i @babel/cli @babel/core @babel/node @babel/preset-env morgan nodemon -D
```

- **@babel/cli:** Interfaz de línea de comandos para Babel.
- **@babel/core:** Núcleo de Babel para compilar código ECMAScript.
- **@babel/node:** Permite ejecutar archivos de Node.js con soporte para transformación de Babel en tiempo de ejecución.
- **@babel/preset-env:** Preset de Babel para compilar automáticamente código a una versión compatible con navegadores y entornos Node.js.
- **morgan:** Middleware de registro HTTP para Node.js que registra detalles de solicitudes HTTP.
- **nodemon:** Herramienta que reinicia automáticamente el servidor Node.js cuando detecta cambios en los archivos.

## Conexión con MySQL y Express

Para conectar tu proyecto con MySQL y Express, instala las siguientes dependencias:

```bash
npm i dotenv express promise-mysql
```

- **dotenv:** Carga variables de entorno desde un archivo .env en process.env.
- **express:** Framework de aplicaciones web para Node.js.
- **promise-mysql:** Adaptador para MySQL que utiliza promesas en lugar de devoluciones de llamada.
## Validar Json para ejecutar proyecto
## Licencia

[Licencia](#) © [Jroque]

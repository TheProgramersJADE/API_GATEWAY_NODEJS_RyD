# API Gateway Node.js

Este proyecto es un API Gateway construido con Node.js y Express que se conecta a una API de autenticación de .NET. Proporciona rutas para manejar la autenticación de usuarios, incluyendo inicio de sesión y registro.

## Estructura del Proyecto

```
apigateway-nodejs
├── src
│   ├── index.js               # Punto de entrada de la aplicación
│   ├── routes
│   │   └── auth.js            # Rutas relacionadas con la autenticación
│   ├── controllers
│   │   └── authController.js   # Lógica de autenticación
│   └── utils
│       └── httpClient.js       # Funciones para realizar solicitudes HTTP
├── package.json                # Configuración de npm y dependencias
├── .env                        # Variables de entorno
└── README.md                   # Documentación del proyecto
```

## Requisitos

- Node.js (versión 14 o superior)
- npm (gestor de paquetes de Node.js)

## Instalación

1. Clona el repositorio:

   ```bash
   git clone <url-del-repositorio>
   cd apigateway-nodejs
   ```

2. Instala las dependencias:

   ```bash
   npm install
   ```

3. Configura las variables de entorno en el archivo `.env`:

   ```
   AUTH_API_URL=<url-de-la-api-de-autenticacion>
   ```

## Ejecución

Para iniciar el servidor, ejecuta el siguiente comando:

```bash
npm start
```

El servidor se ejecutará en `http://localhost:3000` (puedes cambiar el puerto en el archivo `src/index.js`).

## Rutas

- `POST /auth/login`: Inicia sesión un usuario.
- `POST /auth/register`: Registra un nuevo usuario.

## Contribuciones

Las contribuciones son bienvenidas. Si deseas contribuir, por favor abre un issue o envía un pull request.

## Licencia

Este proyecto está bajo la Licencia MIT.
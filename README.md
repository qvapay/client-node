# 📚 QvaPay SDK: client-node
![alt: "QvaPay Banner"](https://pbs.twimg.com/media/Eu2VPzEXEAEyVxs.jpg)
Este proyecto consiste en un SDK de TypeScript para Node.js que permite a los desarrolladores interactuar con la API de QvaPay. El SDK proporciona un conjunto de funciones asíncronas que retornan una promesa con la data o el error de la consulta, permitiendo a los desarrolladores crear aplicaciones que se conecten a la API de QvaPay. Se incluye una documentación detallada y ejemplos de código.

## 🚀 Estructura del Proyecto

Dentro del proyecto verás las estructura de carpetas y archivos:

```
/      
├── src/
│   ├── api/
│   │   └── ...
│   ├── helpers/
│   │   └── ...
│   └── interfaces/
│       └── ...
├── test/
│   ├── ...
└── package.json
```
___

## 📖 Documentación:
1. Instala el SDK.

```shell
npm install qvapay-sdk
o
yarn add qvapay-sdk
```

2. Configure en su archivo .env las siguentes variables de entorno:

```shell
APP_ID=
APP_SECRET=
EMAIL=
PASSWORD=
```

3. Cree un objeto de con sus credenciales para hacer login:

```js
const userLogin = {
    email: process.env.EMAIL,
    password: process.env.PASSWORD
}
```
4. Cree un objeto con sus credenciales de Auth para su app:

```js
const appAuth = {
    app_id: process.env.APP_ID,
    app_secret: process.env.APP_SECRET
}
```
> Ya estás listo para comenzar a usar todas las funciones que te provee este SDK.

___

## 🚀 Auth:

> La sección Auth contiene las funciones login, register y logout. Estas funciones son esenciales para garantizar que solo los usuarios autorizados puedan acceder al contenido y realizar acciones en la aplicación. Todas las funciones son asíncronas y retornan una promesa con la data o el error de la request.

### Login

> Esta función se encarga de realizar una petición POST a la API de Qvapay para iniciar sesión.

```js
    import { login } from 'qvapay-sdk'

    const res = await login(userLogin)
```

### Register

> Esta función se usa para registrar un usuario. Utiliza la API de qvapay para enviar los datos de registro al servidor. Si el registro se realiza correctamente, devuelve los datos recibidos del servidor. Si hay algún error, devuelve el error.

```js
    import { register } from 'qvapay-sdk'

    const newUser = {
      "name": "Juan Perez",
      "email": "juan@gmail.com",
      "password": "CffasdKB73iTtzNJN",
      "c_password": "CffasdKB73iTtzNJN",
      "invite": "referer_username (OPTIONAL)"
    }

    const res = await register(newUser)
```

### Logout

> Esta función intenta realizar una solicitud GET a la API qvapay para cerrar la sesión del usuario. Si la solicitud se realiza con éxito, devuelve los datos de respuesta. Si hay algún error, devuelve los datos de respuesta del error.

```js
    import { login, logout } from 'qvapay-sdk'

    const { accessToken } = await login(userLogin)
    const res = await logout(accessToken)
```
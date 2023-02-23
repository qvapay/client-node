# 📚 QvaPay SDK: client-node

![alt: "QvaPay Banner"](https://pbs.twimg.com/media/Eu2VPzEXEAEyVxs.jpg)
Este proyecto consiste en un SDK de TypeScript para Node.js que permite a los desarrolladores interactuar con la API de QvaPay. El SDK proporciona un conjunto de funciones asíncronas que retornan una promesa con la data o el error de la consulta, permitiendo a los desarrolladores crear aplicaciones que se conecten a la API de QvaPay. Se incluye una documentación detallada y ejemplos de código.

## 🚀 Estructura del Proyecto

Dentro del proyecto verás las estructura de carpetas y archivos:

```
/
├── __test__/
│   ├── auth/
│   │   └── ...
│   ├── .../
│   │   └── ...
├── docs/
│   ├── ...
├── src/
│   ├── api/
│   │   └── ...
│   ├── helpers/
│   │   └── ...
│   └── interfaces/
│   │   └── ...
│   └── index.ts
└── package.json
```

---

## 📖 Instrucciones:

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

3. Cree un objeto con sus credenciales, incluyendo nombre de usuario y contraseña. Asegúrese de que la contraseña sea segura y no se comparta con nadie:

```js
const userLogin = {
  email: process.env.EMAIL,
  password: process.env.PASSWORD,
};
```

4. Cree un objeto con sus credenciales de Auth para su aplicación:

```js
const appAuth = {
  app_id: process.env.APP_ID,
  app_secret: process.env.APP_SECRET,
};
```

> Ahora que has instalado el SDK y configurado sus opciones primarias, estás listo para comenzar a usar todas las funcionalidades que te ofrece. ¡Aprovecha al máximo todas las posibilidades que este SDK te ofrece!

---

## 🗒️ Docs
[Accede a la documentación detallada aquí](https://qvapay-ts.surge.sh/#/)


> 💡 Este proyecto está en desarrollo y busca ofrecer una solución de código abierto para interactuar con la API de QvaPay. Estamos abiertos a cualquier sugerencia o feedback que nos ayude a mejorar el proyecto. Estamos comprometidos con la satisfacción de nuestros usuarios, por lo que cualquier contribución es bienvenida. Si tienes alguna idea para mejorar el proyecto, no dudes en compartirla con nosotros. ¡Estamos ansiosos por escuchar tus ideas!

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

---

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
  password: process.env.PASSWORD,
};
```

4. Cree un objeto con sus credenciales de Auth para su app:

```js
const appAuth = {
  app_id: process.env.APP_ID,
  app_secret: process.env.APP_SECRET,
};
```

> Ya estás listo para comenzar a usar todas las funciones que te provee este SDK.

---

## 🔐 Auth:

> La sección Auth contiene las funciones login, register y logout. Estas funciones son esenciales para garantizar que solo los usuarios autorizados puedan acceder al contenido y realizar acciones en la aplicación. Todas las funciones son asíncronas y retornan una promesa con la data o el error de la request.

### Login

> Esta función se encarga de realizar una petición POST a la API de Qvapay para iniciar sesión.

```js
import { login } from 'qvapay-sdk';

const res = await login(userLogin);
```

### Register

> Esta función se usa para registrar un usuario. Utiliza la API de qvapay para enviar los datos de registro al servidor. Si el registro se realiza correctamente, devuelve los datos recibidos del servidor. Si hay algún error, devuelve el error.

```js
import { register } from 'qvapay-sdk';

const newUser = {
  name: 'Juan Perez',
  email: 'juan@gmail.com',
  password: 'CffasdKB73iTtzNJN',
  c_password: 'CffasdKB73iTtzNJN',
  invite: 'referer_username (OPTIONAL)',
};

const res = await register(newUser);
```

### Logout

> Esta función intenta realizar una solicitud GET a la API qvapay para cerrar la sesión del usuario. Si la solicitud se realiza con éxito, devuelve los datos de respuesta. Si hay algún error, devuelve los datos de respuesta del error.

```js
import { login, logout } from 'qvapay-sdk';

const { accessToken } = await login(userLogin);
const res = await logout(accessToken);
```

---

## 😎 User:

> La sección User ofrece una variedad de funcionalidades para administrar la información de los usuarios. La función getUser permite obtener información acerca de un usuario específico. La función updateUser permite actualizar la información del usuario. La función deposit permite realizar depósitos en la cuenta del usuario. Por último, la función withdraw permite realizar retiros desde la cuenta del usuario. Estas funcionalidades permiten a los usuarios administrar sus cuentas de forma segura y eficiente. Todas las funciones retornan una promesa con la data o el error de la request.

### getUser

> Este código es una función asíncrona que obtiene un usuario de la API de Qvapay. Esta función toma un token de acceso como parámetro y realiza una solicitud GET a la ruta '/user' con el token de acceso en los encabezados. Si la solicitud se completa con éxito, devuelve los datos del usuario como respuesta. Si hay algún error, devuelve los datos del error como respuesta.

```js
import { login, getUser } from 'qvapay-sdk';

const { accessToken } = await login(userLogin);
const res = await getUser(accessToken);
```

### updateUser

> Esta función se utiliza para actualizar un usuario en la API de Qvapay. Toma dos parámetros: un token de acceso y los datos a actualizar. La función intenta realizar la solicitud PUT a la API con los datos proporcionados y el token de acceso. Si la solicitud es exitosa, devuelve los datos recibidos. Si hay algún error, devuelve los datos recibidos en la respuesta del error.

```js
import { login, updateUser } from 'qvapay-sdk';

const { accessToken } = await login(userLogin);
const dataToUpdate = {
  name: 'Pedro Perez1',
  lastname: 'st',
  bio: 'svwb erberberb',
  logo: '',
  kyc: 1,
  username: 'wpiuwe',
  email: 'egc31@gmail.com',
  password: 'CffasdKB73iTtzNJN',
};

const res = await updateUser(accessToken, dataToUpdate);
```

### deposit

> Esta función se utiliza para realizar un depósito. La función toma dos parámetros: un token de acceso y un nuevo depósito. Utiliza la API de Qvapay para realizar el depósito. Si hay un error, la función devuelve los datos de la respuesta del servidor. Si no hay errores, devuelve los datos de la transacción.

```js
import { login, deposit } from 'qvapay-sdk';

const { accessToken } = await login(userLogin);
const newDeposit = {
  pay_method: 'BTCLN',
  amount: 67,
};

const res = await deposit(accessToken, newDeposit);
```

### withdraw

> Esta función se utiliza para hacer una extracción de la API Qvapay. Toma dos parámetros: un token de acceso y un objeto Withdraw. Luego, intenta realizar una solicitud POST a la ruta '/withdraw' con los datos del objeto Withdraw y el token de acceso en el encabezado. Si la solicitud es exitosa, devuelve los datos recibidos. Si hay algún error, devuelve los datos recibidos en la respuesta del error.

```js
import { login, withdraw } from 'qvapay-sdk';

const { accessToken } = await login(userLogin);
const newWithdraw = {
  pay_method: 'BTCLN',
  amount: 4,
  details: [
    {
      Wallet: 'bc1qs67kwcf7znpnc06xjh8cnc0zwsechcfxscghun',
    },
  ],
};

const res = await withdraw(accessToken, newWithdraw);
```

---

## 💱 Transactions:

> La sección Transactions ofrece una variedad de funciones para administrar las transacciones y retiros realizados por los usuarios. Estas funciones incluyen getOneTransaction, que permite obtener información sobre una transacción específica; getOneWithdraw, que permite obtener información sobre un retiro específico; getTransactionsFromUserAuth, que permite obtener todas las transacciones realizadas por el usuario autenticado; getWithdrawsFromUserAuth, que permite obtener todos los retiros realizados por el usuario autenticado; payPendingTransaction, que permite pagar una transacción pendiente; y transferBetweenUser, que permite transferir fondos entre dos usuarios. Estas funciones permiten a los usuarios administrar sus transacciones y retiros de forma segura y eficiente.

### getTransactionsFromUserAuth

> Esta función obtiene transacciones de un usuario autenticado. Toma dos parámetros, un token de acceso y un objeto de propiedades de transacción. Convierte el objeto de propiedades en entradas y parámetros de búsqueda, luego hace una solicitud GET a la API qvapay con los encabezados adecuados. Si la solicitud se realiza con éxito, devuelve los datos recibidos. Si hay un error, devuelve los datos recibidos como respuesta del error.

```js
import {login, getTransactionsFromUserAuth} from 'qvapay-sdk'

const { accessToken } = await login(userLogin);
const props = {
    start: date_time
    end: date_time
    status: [paid, pending, cancelled]
    remote_id: string
    description: string
}

const res = await getTransactionsFromUserAuth(accessToken, props)
```

### getOneTransaction

> Este código es una función asíncrona que se utiliza para obtener una transacción específica a partir de un token de acceso y un ID. Utiliza la API Qvapay para hacer la solicitud, y devuelve los datos de la transacción como respuesta. Si hay algún error, devuelve los datos de la respuesta del error.

```js
import { login, getOneTransaction } from 'qvapay-sdk';

const { accessToken } = await login(userLogin);
const id = '7e48853f-949c-4271-9b4a-1213ee83ac11';

const res = await getOneTransaction(accessToken, id);
```

### getWithdrawsFromUserAuth

> Esta función se utiliza para obtener los retiros de un usuario autenticado. Utiliza el token de acceso proporcionado como parámetro para realizar una solicitud GET a la API Qvapay. Si la solicitud es exitosa, devuelve los datos recibidos en forma de respuesta con retiro. Si hay algún error, devuelve los datos recibidos en la respuesta del error.

```js
import { login, getWithdrawsFromUserAuth } from 'qvapay-sdk';

const { accessToken } = await login(userLogin);
const res = await getWithdrawsFromUserAuth(accessToken);
```

### getOneWithdraw

> Esta función recibe dos parámetros: un token de acceso y una identificación. Esta función intenta obtener los datos de un retiro específico a través de la API Qvapay utilizando el token de acceso proporcionado. Si la solicitud se realiza con éxito, devuelve los datos del retiro. Si hay algún error, devuelve los datos del error.

```js
import { login, getOneWithdraw } from 'qvapay-sdk';

const { accessToken } = await login(userLogin);
const id = '10790';

const res = await getOneWithdraw(accessToken, id);
```

### transferBetweenUser

> Esta función se utiliza para transferir fondos entre usuarios. La función toma dos parámetros: accessToken y transfer. El accessToken se utiliza para autenticar la solicitud de transferencia. El transfer es un objeto que contiene información sobre el monto a transferir, el destinatario, etc. La función realiza una solicitud POST a la API qvapay para realizar la transferencia. Si la solicitud es exitosa, devuelve los datos de la transacción como resultado. En caso de error, devuelve los datos de error.

```js
import { login, transferBetweenUser } from 'qvapay-sdk';

const { accessToken } = await login(userLogin);
const transfer = {
  to: '52ff1628-5e91-4083-bc8e-6accce9a7d15',
  amount: 10,
  description: 'TESTING',
};

const res = await transferBetweenUser(accessToken, transfer);
```

### payPendingTransaction

> Esta función se encarga de realizar el pago de una transacción pendiente. Toma como parámetros el token de acceso y los detalles de la transacción a pagar. Intenta realizar el pago utilizando la API Qvapay y devuelve una respuesta con los resultados. Si hay un error, devuelve los datos del error. El PIN por defecto es 0000, pero se recomienda configurar un PIN secreto en el panel de usuario para mayor seguridad.

```js
import { login, payPendingTransaction } from 'qvapay-sdk'

const { accessToken } = await login(userLogin);
const pay = {
    "uuid": "710296b7-0d5d-4e86-ab1b-9d79080dd042",
    "pin": "0000"
}

const res = await payPendingTransaction(accessToken, pay)
```
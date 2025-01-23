# React ⚛️

## ¿Qué es React? ⚛️

React es una de las librearias de JavaScript (JS de ahora en más) diseñada para hacer interfaces de usuario y la más utilizada y solicitada en cuanto a desarrollo frontend (seguido de Angular y Vue).

React surge en 2011 como una forma de simplificar las interfaces de usuario por parte de Meta que desde 2013 es completamente de código abierto y posee una licencia que permite usarlo para proyectos comerciales no realacionados con Meta. Con React tenemos la posibilidad de tener una misma aplicación en cliente y servidor lo que reduce el código

## ¿Por Qué Aprender React? 🤔

Además de ser muy utilizado React tiene las siguientes ventajas:
- Permite crear aplicaciones moviles y de escritorio por medio de React Native y React for MacOS y Windows.
- Mantenimiento asegurado: Meta utiliza React en muchos de sus producto (Facebook, Instagram, WhatsApp, y otros lo usan) por lo que React va a seguir siendo actualizado y mantenido por un largo tiempo además de que cuenta con una enorme comunidad con gran cantidad de colaboradores.
- Ayuda a aprender otras librerias/frameworks: al estar basado en componentes muchos conceptos de React pueden ser llevados a Angular, Vue, Svelt y otras librerias y frameworks de JS.
- Estabilidad de la API: A diferencia de otros frameworks como Angular o Vue que a lo largo del tiempo han tenido problemas con los cambios de versiones (paso de Vue 2.x a 3.x o Angular 16 a 17) con React esto no ha ocurrido ya que la sintaxis se ha mantenido o se implementaron formas de cambiarla de forma automatica.

## Recurso ⭐

- [Pagina oficial](https://es.react.dev/)
- [Documentación de React](https://es.react.dev/reference/react)
- [Wiki de la comunidad con preguntas frecuentes](https://www.reactjs.wiki/)

## Ejemplo Donde Conviene Usar React 🛠️

Supongamos que tenemos el siguiente HTML y JS (código en [esta](./1.ejemplo-donde-serviria-react/) carpeta).

```html
<style>
  button {
    background-color: rgb(103, 156, 230);
    border-radius: 6px;
    border: none;
    padding: .4rem;
    cursor: pointer;
    transition: all .2s ease;

    &:hover {
      background-color: rgb(71, 119, 188);
      transform: scale(1.1);
    }
  }

  .liked {
    background-color: rgb(238, 114, 114);

    &:hover {
      background-color: rgb(190, 56, 56);
    }
  }
</style>

<button data-id="1" data-status="dont-liked">like</button>
<button data-id="2" data-status="dont-liked">like</button>
<button data-id="3" data-status="dont-liked">like</button>
```

```js
const btns = document.querySelectorAll('button')

btns.forEach(btn => {
  btn.addEventListener('click', () => {
    const id = btn.getAttribute('data-id')

    // llamamos a un servicio para actualizar el me gusta
    // toggleLike(id)

    if (btn.classList.contains('liked')) {
      btn.textContent = 'like'
    } else {
      btn.textContent = 'dislike'
    }
    btn.classList.toggle('liked')
  })
})
```

Es fácil ver que si tenemos que implementar la funcionalidad de me gusta en una parte muy separada de nuestra aplicación esto puede complicarse mucho, es por eso que es conveniente usar componentes, en nuestro caso, de React.

## Bases de React 🏛️

React es en su nivel más bajo no dista mucho de lo que vimos, nos permite crear elementos de forma más rápida (agrgando complejidad) pero no es declarativo, si no que tenemos que especificar muy paso por paso lo que debe hacer. Esto podemos verlo en el JS del directorio ["react-en-cliente"](./2.react-en-cliente/)

```js
// importamos React y ReactDOM de forma en el cliente
import React from "https://esm.sh/react@18.2.0"
import ReactDOM from "https://esm.sh/react-dom@18.2.0/client"

const appDomElement = document.getElementById('app')

// creamos la raiz de React (donde se van a renderizar los componentes) en el elemento "appDomElement"
const root = ReactDOM.createRoot(appDomElement)

// React.createElement(type, attributes, text)
const btn1 = React.createElement('button', {'data-id': '1'}, 'Like')
const btn2 = React.createElement('button', {'data-id': '2'}, 'Like')
const btn3 = React.createElement('button', {'data-id': '3'}, 'Like')

// un React.Fragment es un tipo de elemento vacio que otroga React para que no tengamos que crear un div y que podamos renderizar vario componentes
const app = React.createElement(React.Fragment, null, [btn1, btn2, btn3])

// root.render(component) -> renderiza un componente de React
root.render(app)
```

Esto es nuevamente muy engorroso y es por eso que se creó la extensión de archivos ".jsx"

## JSX ⚛️

JSX está basado en XML y permite escribir lo mismo que vimos antes pero de una forma mucho más comprensible, como si escribieramos código HTML

```jsx
<React.Fragment>
  // Como React es JS y no HTML los atributos los ponemos con camelCase
  <button dataId="1">Boton 1</button>
  <button dataId="2">Boton 2</button>
  <button dataId="3">Boton 3</button>
</React.Fragment>
```

Es importante entender la base de React porque el código que escribamos en JSX es compilado a la forma que vimos antes.

### Expresiones

JSX también permite evaluar expresiones al ponerlas entre llaves, como por ejemplo:

```jsx
const userName = 'Paco'

<h1>Hola, {userName}</h1>
<p>número: {Math.random()}</p>
```

## Vite Como Empaquetador⚡

Vite es un empaquetador de aplicaciones que nos permitirá trabajar con JSX de una forma mucho más sencilla, para ello debemos instalarlo como se ve en la [web oficial](https://vite.dev/) (con el comando `npm create vite@latest`) dentro de la carpeta en la que vamos a guardar el proyecto (por lo general simplemente ejecutamos).

A continuación nos va a pedir hacer una serie de configuraciones en el siguiente orden:

- Nombre del proyecto
- Framework: Vanilla, React, Preact, Vue, Svelt, Lit u Otro; en nuestro caso diremos que React
- JS o TS con o sin SWC: SWC es un compilador de JSX hecho en Rust por lo que siemre debemos elegir una de las opciones con SWC

Esto crea un proyecto base con React, Vite y esLint ya configurados

Posteriormente vamos al proyecto con `cd nombre-del-proyecto` y ejecutamos primero un `npm install` para que se instalen las dependecias base.

Con esto ya tenemos nuestro proyecto base con el cual empezar a trabajar, si ejecutamos el comando `npm run dev` nos mostrara el proyecto base que crea Vite, que no es más que algunos componentes de React y algo de interactividad.
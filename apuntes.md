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

### Punto de Entrada de una Aplicación

Es básicamente lo que acabamos de hacer, es el archivo encargado de renderizar nuestra aplicación cuando se ejecuta.

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

## Proyecto Básico de React Creado con Vite

Si vamos a un proyecto recién creado con Vite nos vamos a encontrar con una serie de archivos y carpetas, algunos de ellos deberiamos ya conocerlos como el package.json, el .gitignore o el README.md pero hay otros nuevos que vamos a explicar a continuación:

- **eslint.config.js**: Configura esLint, uno de los linters más utilizados, para trabajar con el estandar de React
- **vite.config.js**: Configura Vite para poder hacer la compilación de JSX a "React normal"
- **index.html**: Es el archivo en el que se renderizará nuestra aplicación de React
- **public/**: Por convención es donde se almacenan los archivos estáticos
- **src/**: Es donde se encuentra nuestra aplicación de React
- **src/main.jsx**: Punto de entrada de la aplicación
- **src/App.jsx**: Es la aplicación creada por Vite

Todos estos archivos de la carpeta "src" podemos eliminarlos para trabajar desde cero pero por lo general eliminaremos solo los estilos y el código por defecto del App.jsx (además obvio de los SVG de la aplicación por defecto de Vite)

## Componentes

Un componente es en esencia una función que crea un elemento, lo que permite reutilizarlo mucho más fácil, veamos un ejemplo de esto.

Supongamos que tenemos el siguiente código que genera 3 botones con un ícono de like:

```jsx
import React from 'react'
import ReactDOM from 'react-dom/client'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.Fragment>
    <button>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z" />
      </svg>
      button 1
    </button>
    <button>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z" />
      </svg>
      button 2
    </button>
    <button>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z" />
      </svg>
      button 3
    </button>
  </React.Fragment>
)
```

Como es evidente esto es poco práctico por lo que podemos crear la siguiente función para poder crear botones cambiando el texto:

```jsx
const createBtn = ({ text }) => {
    return (
      <button>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
          <path
            strokeLinecap="round"
            strokeLinejoin="round" 
            d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z" />
        </svg>
        {text}
      </button>
    )
}
```

De esta forma cuando vamos a renderizar solo tenemos que hacer lo siguiente:

```jsx
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.Fragment>
    {createBtn({ text: 'button 1' })}
    {createBtn({ text: 'button 2' })}
    {createBtn({ text: 'button 3' })}
  </React.Fragment>
)
```

No obstante esto sigue siendo imperativo, no declarativo, nosotros lo que buscamos es que conceptualmente digamos "mostrar un botón" y no "crear un botón". Para ello lo primero es cambiar el nombre a la función, pasamos de "createBtn" a "Button" que va a ser el nombre del componente y en segundo lugar debemos cambiar la forma en la que llamamos la función, en vez de hacerlo de la forma tradicional lo hacemos como si "Button" fuera una "etiqueta HTML" y los parametros sus atributos, con esto el código quedaría de la siguiente manera

```jsx
import React from 'react'
import ReactDOM from 'react-dom/client'

const Button = ({text}) => {
    return (
      <button>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z" />
        </svg>
        {text}
      </button>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.Fragment>
    <Button text="Boton 1" />
    <Button text="Boton 2" />
    <Button text="Boton 3" />
  </React.Fragment>
)
```

Este codigo se encuentra en el primer proyecto de ejemplo en [este](./3.example-projects/00-first-component/src/main.jsx) archivo

Notese que el nombre del componente está en PascalCase, esto es necesario porque no sabemos los elementos que se agregarán a HTML en un futuro y debemos tenerlo en cuenta porque si intentamos llamar a nuestro componente como "button" cuando intentemos usarlo React interpretará que queremos usar el botón de HTML y no el nuestro, al usar PascalCase evitamos estas colisiones y la posibilidad de que ocurran en un futuro.

Otra cosa a tener en cuenta es que por lo general cada componente se crea por separado y después se unen es decir que por un lado deberiamos tener:

```jsx
// path: MyComponent.jsx
export MyComponent () {
  return (
    // ... código del componente
  )
}
```

Y por otro lado en donde lo necesitemos tener lo siguiente:

```jsx
// path: main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import { MyComponent } from './MyComponent.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <MyComponent />
)
```
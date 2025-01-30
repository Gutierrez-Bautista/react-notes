# Apuntes de React ⚛️

## ¿Qué es React?

React es una de las librearias de JavaScript (JS de ahora en más) diseñada para hacer interfaces de usuario y la más utilizada y solicitada en cuanto a desarrollo frontend (seguido de Angular y Vue).

React surge en 2011 como una forma de simplificar las interfaces de usuario por parte de Meta que desde 2013 es completamente de código abierto y posee una licencia que permite usarlo para proyectos comerciales no realacionados con Meta. Con React tenemos la posibilidad de tener una misma aplicación en cliente y servidor lo que reduce el código

## ¿Por Qué Aprender React?

Además de ser muy utilizado React tiene las siguientes ventajas:
- Permite crear aplicaciones moviles y de escritorio por medio de React Native y React for MacOS y Windows.
- Mantenimiento asegurado: Meta utiliza React en muchos de sus producto (Facebook, Instagram, WhatsApp, y otros lo usan) por lo que React va a seguir siendo actualizado y mantenido por un largo tiempo además de que cuenta con una enorme comunidad con gran cantidad de colaboradores.
- Ayuda a aprender otras librerias/frameworks: al estar basado en componentes muchos conceptos de React pueden ser llevados a Angular, Vue, Svelt y otras librerias y frameworks de JS.
- Estabilidad de la API: A diferencia de otros frameworks como Angular o Vue que a lo largo del tiempo han tenido problemas con los cambios de versiones (paso de Vue 2.x a 3.x o Angular 16 a 17) con React esto no ha ocurrido ya que la sintaxis se ha mantenido o se implementaron formas de cambiarla de forma automatica.

## Recurso

- [Pagina oficial](https://es.react.dev/)
- [Documentación de React](https://es.react.dev/reference/react)
- [Wiki de la comunidad con preguntas frecuentes](https://www.reactjs.wiki/)

## Ejemplo Donde Conviene Usar React

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

## Bases de React

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

## JSX

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

## Vite Como Empaquetador

Vite es un empaquetador de aplicaciones que nos permitirá trabajar con JSX de una forma mucho más sencilla, para ello debemos instalarlo como se ve en la [web oficial](https://vite.dev/) (con el comando `npm create vite@latest`) dentro de la carpeta en la que vamos a guardar el proyecto (por lo general simplemente ejecutamos).

A continuación nos va a pedir hacer una serie de configuraciones en el siguiente orden:

- Nombre del proyecto
- Framework: Vanilla, React, Preact, Vue, Svelt, Lit u Otro; en nuestro caso diremos que React
- JS o TS con o sin SWC: SWC es un compilador de JSX hecho en Rust por lo que siemre debemos elegir una de las opciones con SWC

Esto crea un proyecto base con React, Vite y esLint ya configurados

Posteriormente vamos al proyecto con `cd nombre-del-proyecto` y ejecutamos primero un `npm install` para que se instalen las dependecias base.

Con esto ya tenemos nuestro proyecto base con el cual empezar a trabajar, si ejecutamos el comando `npm run dev` nos mostrara el proyecto base que crea Vite, que no es más que algunos componentes de React y algo de interactividad.

### Proyecto Básico de React Creado con Vite

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

Un componente es en esencia una función que crea un elemento, lo que permite reutilizarlo mucho más fácil, también podemos pensarlos como una fábrica de elementos. Veamos un ejemplo de esto:

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

Otra cosa a nivel conceptual es que a los parametros que le pasamos a los compoenentes se les suele llamar **propiedades** del componente 

Este codigo se encuentra en el [proyecto de ejemplo 00](./3.example-projects/00-first-component/) en [este](./3.example-projects/00-first-component/src/main.jsx) archivo

Notese que el nombre del componente está en PascalCase, esto es necesario porque no sabemos los elementos que se agregarán a HTML en un futuro y debemos tenerlo en cuenta porque si intentamos llamar a nuestro componente como "button" cuando intentemos usarlo React interpretará que queremos usar el botón de HTML y no el nuestro, al usar PascalCase evitamos estas colisiones y la posibilidad de que ocurran en un futuro.

Otra cosa a tener en cuenta es que por lo general cada componente se crea por separado y después se unen es decir que por un lado deberiamos tener:

```jsx
// path: MyComponent.jsx
export MyComponent ({ txt }) {
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
  <MyComponent txt='lo que sea' />
)
```

Por último se considera una muy mala práctica mutar las propiedades del componente (los valores que le pasamos) dentro del mismo, es decir, deberíamos evitar hacer algo como lo siguiente:

```jsx
export MyComponent ({ txt }) {
  txt = `prefix-${txt}`
  return (
    <p>{txt}</p>
  )
}
```

La forma correcta de hacerlo sería creando una variable nueva

```jsx
export MyComponent ({ txt }) {
  const prefixedTxt = `prefix-${txt}`
  return (
    <p>{prefixedTxt}</p>
  )
}
```

## Estilos en React

En React podemos usar estilos de dos formas en nuestros componentes, la primera es con estilos en linea, donde al atributo "style" de nuestro componente le pasamos un objeto con los estilo:

```jsx
export MyComponent () {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      width: '1rem',
      overflow: 'hidden'
    }}>
      <button>
        Click Me
      </button>
    </div>
  )
}
```

Esto es util si necesitamos darle estilos que por algún motivo no podamos hacerlo como CSS normal o en el caso de React Native que solo permite esta forma de dar estilos, pero en general es más común hacerlo en un archivo aparte:

```css
/* path: MyComponent.css */
div {
  display: flex,
  align-items: center,
  width: 1rem,
  overflow: hidden
}
```

```jsx
// path: MyComponent.jsx
import './MyComponent.css'

export MyComponent () {
  return (
    <div>
      <button>
        Click Me
      </button>
    </div>
  )
}
```

Por convencion tanto el componente como sus estilos tienen el mismo nombre, esto para que sea más fácil identificar que están relacionados sin necesidad de ver el código del componente.

### Clases de un Componente

Al trabajar con JSX podríamos querer asignalre una clase a nuestro componente utilizando "class" de la siguiente forma

```jsx
export MyComponent () {
  return (
    <div class="myClass">
      <button>
        Click Me
      </button>
    </div>
  )
}
```

Sin embargo esto no funciona debido a que JSX es JavaScript y por ende "class" es una palabra reservada para definir clases, es por eso que en JSX en lugar de usar "class" usamos "className"

```jsx
export MyComponent () {
  return (
    <div className="myClass">
      <button>
        Click Me
      </button>
    </div>
  )
}
```

## Formas Particulares de pasar Propiedades a un Componentes

### Booleanos y Callbacks

Supongamos que tenemos el siguiente componente:

```jsx
// path: EmployeeCard.jsx
export function EmployeeCard ({ name, isActive, callback }) {
  let status

  if (isActive) {
    // No hay problema con hacer esto, una variable puede guardar un elemento
    status = <span>Activo</span>
  } else {
    status = <span>Inactivo</span>
    callback()
  }

  return (
    <section>
      <strong>{name}</strong>
      {status}
    </section>
  )
}
```

Cuando queramos pasar un valor booleano tenemos dos formas de hacerlo mientras que pasar un callback es bastante intuitivo:

```jsx
// path: App.jsx
import { EmployeeCard } from './EmployeeCard.jsx'

export function App () {
  const employeesCallback = () => {console.log('Empleado inactivo')}

  // "<>" es equivalente a "<React.Fragment>" pero nos ahorramos escribirlo
  return (
    <>
      {/* Tenemos que evaluar "true" o "false" porque si no lo que hacemos es*/}
      {/* pasarle el string 'true' o 'false'*/}
      <EmployeeCard name="Juan" isActive={true} /> // <- esto podría fallar pq no hay callback

      {/* El callback por otro lado simplemente evaluamos la función sin ejecutarla*/}
      <EmployeeCard name="Pepe" isActive={false} callback={employeesCallback} />

      {/* Por defecto si no le asignamos un valor al parametro pero lo escribimos*/}
      {/* se le pasa el booleano "true", esto es muy parecido a ciertos atributos en HTML*/}
      <EmployeeCard name="Paco" isActive callback={employeesCallback} />

      {/* Cuando no especificamos un parametro su valor queda como undefined*/}
      <EmployeeCard name="Carlos" callback={employeesCallback} />
    </>
  )
}
```

### Propiedad Children

Supongamos que tenemos el mismo componente que antes pero sin el callback ne "isActive":

```jsx
// path: EmployeeCard.jsx
export function EmployeeCard ({ name }) {
  return (
    <section>
      <strong>{name}</strong>
    </section>
  )
}
```

Hasta ahora para pasarle el valor para poner dentro del elemento "strong" lo haciamos con la propiedad name, pero supongamos que a la hora de usar el componente queremos hacerlo de la siguiente manera:

```jsx
// path: App.jsx
import { EmployeeCard } from './EmployeeCard.jsx'

export function App () {
  return (
    <EmployeeCard>
      Paco
    </EmployeeCard>
  )
}
```

Si queremos poder recuperar el nombre de esa forma lo hacemos por medio de la propiedad "children" que poseen todos los componentes, dicha propiedad lo que hace es almacenar a **todos** los hijos del componente, sabiendo eso cambiamos el código de nuestro componente por el siguiente:

```jsx
// path: EmployeeCard.jsx
export function EmployeeCard ({ children }) {
  return (
    <section>
      <strong>{children}</strong>
    </section>
  )
}
```

## React.StrictMode

Al crear un proyecto con Vite en nuesro main.jsx veremos el siguiente código:

```jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
```

"StrictMode" lo que hace es ofrecer ayudas en desarrollo (ver si usamos código obsoleto de React, y ejecutar código de forma auxiliar para ayudar a detectar errores).
"StrictMode" no debe llegar a producción, ya que implica ejecuciones inecesarias de código en el cliente.

## Estado en React

El estado hace referencia a las propiedades que almacena el propio componente y que pueden cambiar con el tiempo, un ejemplo muy sencillo es con un botón de seguir en una red social, su **estado** es lo que indica si el usuario ya sigue o no a una cuenta determinada y en función de esto cambia el aspecto del componente.

Entender los estados en React es importante porque son lo que dotan de vida a los componentes y mucho más importante, es el encargado de definir cunado se vuelve a renderizar un componente, esto se debe a que React **reacciona** al cambio de estado y rerenderiza el componente al momento (de ahí viene el nombre "React").

Otra cosa a tener en cuenta es que React modifica lleva al DOM únicamente aquello que cambia con respecto a cómo estaba antes, es decir, si tenemos una card con un h1, un span y un párrafo y el cambio de estado sólo afecta al span, solo se modifica en el DOM el span, y no toda la card.

Por último es importante saber que la actualización de los estados es asíncrona.

## Propagación de Rerenderizado

Como vimos recién, cuando el estado de un componente cambia este tienen que volver a renderizarse, cuando esto ocurre, no solo se renderiza el componente en sí si no también todos sus hijos, es decir, que si rerenderizamos nuestro componente principal "App" se rerenderizan todo el resto de componentes.

Pero aquí hay un pequeño matiz, cuando decimos que se renderiza nos referimos a que se ejecutar su código, no necesariamente que se destruya y vuelva a crear toda esa parte del DOM. Esto ocurre gracias al Virtual DOM de React que es un paso intermedio entre que se ejecuta el código y que se modifique el DOM que ve el usuario.

React lo que hacer al renderizar nuestros componentes es modifica el Virtual DOM y después compararlo con el DOM normal, para acto seguido solo modificar aquellas partes del DOM que realmente hayan cambiado, esto se hace para evitar destruir inecesariamente el DOM y consumir muchos recursos.

Es importante comprender esto porque aunque nosotros veamos que no se vuelven a crear ciertos elementos no quiere decir que su código no haya sido ejecutado, y en definitiva, consumido recursos, por más que React no lleve esos cambios al DOM y ahorre algo de recursos de esa forma aún así podemos llegar a tener problemas de rendimiento si no tenemos algo de cuidado.

## React Hooks

Los hooks son utilidades de React que permiten añadir funcionalidad a los componentes de React, ejecutar código cuando ocurra algo concreto al componente o mejorar el rendimiento del mismo. Son en esencia lo que hace funcional a React

## Hooks Básicos

### useState

**useState** es probablemente el hook más básico e importante de React, este permite almacenar una variable dentro del estado del componente y actualizarla a conveniencia.

Para usarlo debemos importar useState desde React

```jsx
import { useState } from 'react'
```

Al llamar a useState debemos pasarle el valor inicial de nuestro estado, en el ejmplo del botón de seguir lo más lógico es que sea "false". Esto lo que hace es devolver un array de dos elementos, el primero es el valor del estado y el segundo la función para actualizarlo:

```jsx
import { useState } from 'react'

export function FollowButton ({ name }) {
  const state = useState(false) // <-- Array
  const isFollowing = state[0] // <-- Valor del estado
  const setIsFollowing = state[1] // por convención la función para actualizarlo se llama "set" seguido del nombre del estado 

  const text = isFollowing ? 'Unfollow' : 'Follow'
  const btnClases = isFollowing ? 'follow-btn is-following' : 'follow-btn'

  return (
    <div>
      <strong>{name}</strong>
      <button className={btnClases}>
        {text}
      </button>
    </div>
  )
}
```

Notese que las tres lineas para crear el estado pueden resumirse a una sola de la siguiente manera:

```jsx
const [isFollowing, setIsFollowing] = useState(false)
```

Para hacer que el botón funcione vamos a utilizara el atributo "onClick" ya que como hemos visto React es bastante más declarativo que JS normal y como valor debemos pasarle una función a ejecutar. En nuestro ejemplo esta función lo que hará es llamar a "setIsFollowing" con el argumento "!isFollowing", esto para alternar entre seguir y no.

```jsx
import { useState } from 'react'

export function FollowButton ({ name }) {
  const [isFollowing, setIsFollowing] = useState(false)

  const text = isFollowing ? 'Unfollow' : 'Follow'
  const btnClases = isFollowing ? 'follow-btn is-following' : 'follow-btn'

  const handleClick = () => {
    setIsFollowing(!isFollowing)
  }

  return (
    <div>
      <strong>{name}</strong>
      <button className={btnClases} onClick={handleClick}>
        {text}
      </button>
    </div>
  )
}
```

Si vamos al [proyecto de ejemplo 01](./3.example-projects/01-twitter-ui-component/) podemos ver esto y que por el cambio de estado del componente sin hacer nada en particular al hacer click en el botón el componente se rerenderiza automáticamente.

Es importante una cosa, el estado del componente **solo se inicializa una vez**, cuando este es creado, esto implica que si el estado inicial depende de una propiedad no importa cuantas veces se rerenderice que componente porque su padre lo hizo, su estado no se modifica.

Para ver otro proyecto de React algo más complejo, pero aún así básico, que use lo visto hasta ahora también se puede ir al [proyecto de ejemplo 02](./3.example-projects/02-tic-tac-toe/)

Es importante aclarar que cualquier inicialización del estado de un componente debe estar en el cuerpo del mismo y está mal ponerlos dentro de un condicional, bucle o lo que sea, esto es porque React guarda el orden en el que se ejecutaron y si en algún momento este no se respeta va a fallar.

useState admite no sólo un tipo de dato como argumento, también podemos pasarle una función para que el valor inicial del estado sea aquello que devuelva la función y de la misma forma la función para acutalizar el estado también admite otra función como argumento, por ejemplo:

```jsx
import { useState } from 'react'

export function Dice ({ name }) {
  const [number, setNumber] = useState(() => {
    return Math.floor(Math.random() * 6) + 1
  })

  const handleClick = () => {
    setIsFollowing(() => {
      return Math.floor(Math.random() * 6) + 1
    })
  }

  return (
    <span onClick={handleClick}>
      {number}
    </span>
  )
}
```

### useEffect

El useEffect nos permite ejecutar código arbitrario cuando el componente se inicializa en el DOM y cada vez que sus dependencias cambien (ahora veremos que es una dependencia).

Al igual que useState debemos ubicar los useEffect en el cuerpo del componente he importarlo desde React.

```jsx
import { useState, useEffect } from 'react'

export function Component () {
  const [value, setValue] = useState(false)
  const [anotherValue, setAnotherValue] = useState(true)

  /*
  useEffect no devuelve nada por lo que no necesitamos guardarlo.

  El contrato del useEffect es el siguiente:

  useEffect(codeToExecute, ?dependenciesArray)

  La función de las dependencias es decir cuándo debe ejecutarse el código del efecto, este se ejecuta cada vez que una de sus dependencias cambia de valor:
  */
  useEffect(() => {
    console.log('... doing somthing')
  }) // <-- si omitimos el segundo argumento el código se ejecuta cada vez que se renderiza el componente

  useEffect(() => {
    console.log('... doing somthing')
  }, []) // <-- el código se ejecuta solo cuando se inicializa el componente

  useEffect(() => {
    console.log('... doing somthing')
  }, [value]) // <-- el código se ejecuta cada vez que "value" cambia

  useEffect(() => {
    console.log('... doing somthing')
  }, [value, anotherValue]) // <-- el código se ejecuta cada vez que "value" o "anotherValue" cambian
}
```

un ejemplo es si queremos hacer un componente que siga el mouse de usuario, este se vería algo así:

```jsx
import { useState, useEffect } from 'react'

function App() {
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  // Creamos el efecto
  useEffect(() => {
    const handleMove = (evt) => {
      const {clientX, clientY} = evt
      setPosition({x: clientX, y: clientY})
    }

    if (enabled) {
      window.addEventListener('pointermove', handleMove)
    }
  }, [enabled]) // <-- decimos que se ejecute cuando "enabled" cambie de valor

  return (
    <>
      <main>
      <div style={{
        position: 'absolute',
        backgroundColor: '#09f',
        borderRadius: '50%',
        opacity: '0.8',
        pointerEvents: 'none',
        left: -20,
        top: -20,
        width: 40,
        height: 40,
        transform: `translate(${position.x}px, ${position.y}px)`
      }}
      />
      <button onClick={ () => { setEnabled(!enabled) } }>
        {enabled ? 'Disable' : 'Enable'} cursor follower
      </button>
      </main>
    </>
  )
}

export default App
```

Pero acá tenemos un problema, cuando nosotros intentamos deshabilitar el cursor follower no funciona, esto es porque nunca quitamos el evento a la ventana, pero hay otra cosa más importante que está ocurriendo. Si nosotros le damos 3 veces al botón (habilitar, deshabilitar, habilitar) vamos a suscribirnos dos veces al evento, esto es obviamente muy malo para el rendimiento, es aquí donde entra el concepto de limpiar el efecto.

Limpiar el efecto hace referencia al proceso que se hace antes de que se vuelve a ejecutar el mismo o cuando el componente se desmonta (se quita del DOM real) para asegurarnos que no tenemos suscripciones inecesarias ni ninguna otra cosa que pueda afectar el rendimiento.

Para decirle a React qué hacer cuando debe limpiar el efecto lo único que debemos es hacer que el useEffect devuelva una función que se encargue de ese trabajo. Con esto React lo que hace es llamar a esa función cada vez que toca limpiar el efecto

```jsx
import { useState, useEffect } from 'react'

function App() {
  // ...

  useEffect(() => {
    const handleMove = (evt) => {
      const {clientX, clientY} = evt
      setPosition({x: clientX, y: clientY})
    }

    if (enabled) {
      window.addEventListener('pointermove', handleMove)
    }

    // clean up ("limpiador"):
    // --> cuando el componente se desmonta
    // --> cuando cambian las dependencias, antes de ejecutar el efecto
    return () => {
      window.removeEventListener('pointermove', handleMove)
    }
  }, [enabled]) //
  // ...
}

export default App
```

Algo que podemos notar es que si no hemos quitado el StrictMode nada más se inicia la aplicación el efecto se ejecuta, limpia y vuelve a ejecutar. El StrictMode lo hace para ayudar al debug del efecto.

Para ver todo este código revisar el [tercer poryecto de ejemplo](3.example-projects/03-mouse-follower/)

#### Fetching de Datos usando useEffect

Cuando queremos hacer un fetching de datos en React no podemos hacerlo directamente en el cuerpo de nuestro componente, esto porque se haría cada vez que se renderice el componente, lo que no es muy bueno.

Es ahí donde entra el useEffect como la forma más básica de hacer fetching de datos, vamos a ver un ejemplo con la PokeAPI

```jsx
import { useState, useEffect } from 'react'

function PokemonCard ({ pokemonId }) {
  const [pokemonName, setPokemonName] = useState()
  const [imgUrl, setImgUrl] = useState()
  const [pokemonTypes, setPokemonTypes] = useState([])

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
      .then(res => res.json())
      .then(data => {
        setPokemonName(data.name)
        setImgUrl(data.sprites.front_default)
        setPokemonTypes(data.types)
      })
  }, []) // <-- haremos el fetch cada vez que el ID del pokemon cambie

  return (
    <div>
      {pokemonName && <h3>{pokemonId}: {pokemonName}</h3>}
      {imgUrl && <img src={imgUrl} />}
      {pokemonTypes && pokemonTypes.map((typeInfo) => {
        return <span key={typeInfo.slot}>{typeInfo.type.name}</span>
      })}
    </div>
  )
}
```

Nosotros no queremos que se haga la petición cada vez que el componente se renderiza, necesitamos que se haga cuando el componente se renderiza por primera vez (se inicializa), es por eso que usamos el useEffect.

Este código se encuentra en el [cuarto proyecto de ejemplo](3.example-projects/04-code-interview/)

## Custom Hooks

Los custom hooks son una forma que otroga React para extraer la lógica de los componentes que use hooks de React para poder reutilizarla. Usemos el ejemplo de la PokemonCard que vimos antes, podría ser interesante extraer la lógicadel fetch de datos para que el componente quedase más limpio, para ello debemos hacer lo siguiente:

1. Crear una función cuyo nombre empiece con "use": Esta función será nuestro custom hook. El nombre debe empezar con "use" porque es la forma que tenemos para decirle a React que estamos creando un hook y por ende que podemos usar hooks de React dentro.
2. Pasar toda la lógica que queramos a nuestro custom hook.

Haciendo esto nuestro código quedaría así:

```jsx
import { useState, useEffect } from 'react'

// Nuestro custom hook
const usePokemon = ({ pokemonId }) => {
  // los estados están dentro del custom hook porque solo los necesitamos aquí
  const [pokemonName, setPokemonName] = useState()
  const [imgUrl, setImgUrl] = useState()
  const [pokemonTypes, setPokemonTypes] = useState([])

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
      .then(res => res.json())
      .then(data => {
        setPokemonName(data.name)
        setImgUrl(data.sprites.front_default)
        setPokemonTypes(data.types)
      })
  }, [])

  return { pokemonName, imgUrl, pokemonTypes } // <- devolvemos los valores que nos interesan
}

export function PokemonCard ({ pokemonId }) {
  // usamos el custom hook
  const { pokemonName, imgUrl, pokemonTypes } = usePokemon({ pokemonId })

  return (
    <div>
      {pokemonName && <h3>{pokemonId}: {pokemonName}</h3>}
      {imgUrl && <img src={imgUrl} />}
      {pokemonTypes && pokemonTypes.map((typeInfo) => {
        return <span key={typeInfo.slot}>{typeInfo.type.name}</span>
      })}
    </div>
  )
}
```

Una vez hecho esto podríamos pasar nuestro custom hook a un directorio llamado "hooks" para así poder reutilizarlo más adelante (ver [5 proyecto de ejemplo](3.example-projects/05.pokemon-card/))

## Más Hooks de React

### useRef

Permite crear una referencia **mutable** que perciste durante todo el ciclo de vida del componente, es util para guardar valores como contadores, elementos del DOM o lo que sea pero que cada vez que cambie su valor el componente no se vuelva a renderizar. Veamos un ejemplo:

```jsx
import { useState, useEffect, useRef } from 'react'

export function App () {
  const [state, setState] = useState(true)
  // useRef devuelve un objeto con la propiedad current que almacena su valor 
  const refInput = useRef()
  const formSubmitTimes = useRef(0) // <-- valor inicial 
  
  const handleSubmit = (evt) => {
    evt.preventDefault()
    const input = refInput.current // <-- el atributo current de la referencia guarda el valor
    const value = input.value

    if (value === '') return

    formSubmitTimes.current++ // <-- la referencia es mutable, a diferencia de useState

    // El componente no se vuelve a renderizar, el Efecto no se ejecuta
  }

  const handleClick = () => {
    setState(!state) // <-- El componente vuelve a renderizarse
  }

  useEffect(() => {
    console.log('rendering')
  })

  return (
    <div>
      <h1>My App</h1>
      <form onSubmit={handleSubmit}>
        {/* el atributo "ref" lo usamos cuando queremos guardar el elemento en una referencia */}
        <input ref={refInput}></input>
        <button type="submit">Send</button>
      </form>
      <p>Form submited {formSubmitTimes} times</p>
      <button onClick={handleClick}>Rerender</button>
    </div>
  )
}
```

Con el código de arriba el páraffo con las vece que se envió el formulario sólo cambia cunado le damos al botón "Rerender" y no cuando enviamos el formulario en sí. Esto pasa porque al enviar el formulario actualizamos el valor de una referencia, pero el estado del componente no cambia, y por lo tanto no se renderiza.

### useMemo

Este hook nos permite memoizar el resultado de una operación para evitar que se haga a menos que cambie el valor de una de sus dependencias, en cuanto a su sintaxis es igual al useEffect pero su diferencia es conceptual, useEffect ejecuta un efecto cuando el componente se inicializa o cuando sus dependencias cambian mientras que useMemo sirve para recalcular un valor solo cuando sus dependencias cambian. Veamos un ejemplo con un ToDo app:

```jsx
// path: ./hooks/useTask.js
import { useState, useRef, useMemo } from 'react'
import { searchTasks, addTask } from '../services/tasks'

export function useTasks ({ sortByTaskTitle, search }) {
  const [tasks, setTasks] = useState([])
  const previousSearch = useRef() // <-- Para evitar hacer la misma busqueda dos veces seguidas

  const getTasks = async ({ search }) => {
    if (search === previousSearch.current) return

    try {
      previousSearch.current = search

      const newTasks = await searchTasks() // <-- recupera las tareas (para el ejemplo no importa el cómo)

      setTasks(newTasks)
    } catch (e) {
      console.error(e)
    }
  }

  const setNewTask = ({ taskInfo }) => {
    // proceso para agreagar una tarea
  }

  const sortedTasks = useMemo(() => {
    return sortByTaskName
      ? [...tasks].sort((a, b) => a.title.localeCompare(b.title))
      : [...tasks].sort((a, b) => {
        if (a.date !== b.date) return a.date - b.date
        return a.hour - b.hour
      })
  }, [sortByTaskTitle, tasks]) // <-- solo hacemos el calculo de ordenamiento si "sortByTaskTitle" o "tasks" cambian de valor, caso contrario devuelve el valor que calculó la vez anterior.

  return { tasks: sortedTasks, getTasks, setNewTask }
}
```

```jsx
// path: ./App.jsx
import { useState } from 'react'
import { useTasks } from './hooks/useTask'
import { useSearch } from './hooks/useSearch'
import { Tasks } from './components/Task'

export default function App () {
  // sortByTaskTitle, search
  const [sortByTaskTitle, setSortByTaskTitle] = useState(false)
  const [search, updateSearch, error] = useSearch() // <-- para hacer validaciones
  const { tasks, getTasks, setNewTask } = useTasks({ sortByTaskTitle, search })

  const handleAddSubmit = (evt) => {
    evt.preventDefault()

    const taskInfo = Object.fromEntries(new FormData(evt.target))

    setNewTask({ taskInfo })
  }

  const handleSearchSubmit = (evt) => {
    evt.preventDefault()
    getTasks({ search })
  }

  const handleChange = () => {
    const newQuery = evt.target.value

    updateSearch(newQuery)
  }

  const handleSort = () => {setSortByTaskTitle(!sortByTaskTitle)}

  return (
    <header>
      <form onSubmit={handleSearchSubmit}>
        <input type="text" placeholder="Text to search..." value={search} onChange={handleChange}>
        <input type="checkbox" onChange={handleSort} checked={sortByTaskTitle}>
        <button type="submit">Search</button>
      </form>
      {error && <p style={{color: 'red'}}>{error}</p>}
      <form onSubmit={handleAddSubmit}>
        <input type="text" placeholder="barrer, sacar al perro ..." name="task">
        <input type="date" name="date">
        <input type="time" name="hour">
        <button type="submit">Agregar</button>
      </form>
    </header>
    <main>
      {tasks && <Tasks tasks={tasks} /> /* <-- renderiza la lista de tareas */}
    </main>
  )
}
```

Como se explica en el código de useTasks (custom hook) al usar useMemo el cálculo sólo se hace si es necesario y si no devuelve lo que calculó con anterioridad, esto es necesario porque el cálculo que queremos realizar debe estar en el cuerpo del hook y por ende si no usamos el useMemo lo que ocurre es que vuelve a calcularse cada vez que escribimos o borramos en el input de busqueda, esto porque el valor del estado "search" y por ende se ejecuta el código del useTasks para reflejar ese cambio y por lo tanto volvería a pasar por el código de ordenamiento.

### useCallback

El useCallback sirve para simplificar la sintaxis a la hora de memoizar una función, fijemonos que en el ejemplo del useMemo en el hook "useTasks" creamos la función "getTasks", por cómo está construida la aplicación esta función se vuelve a crear una y otra vez cada vez que cambia el estado "search", con el useMemo podriamos solucionarlo de la siguiente forma

```jsx
// path: ./hooks/useTask.js
import { useState, useRef, useMemo } from 'react'
import { searchTasks, addTask } from '../services/tasks'

export function useTasks ({ sortByTaskTitle, search }) {
  const [tasks, setTasks] = useState([])
  const previousSearch = useRef()

  const getTasks = useMemo(() => {
    return async ({ search }) => {
      if (search === previousSearch.current) return

      try {
        previousSearch.current = search

        const newTasks = await searchTasks()

        setTasks(newTasks)
      } catch (e) {
        console.error(e)
      }
    }
  }, []) // <-- hacemos que cree la función una única vez

  // ...
}
```

No obstante hacerlo de esta forma resulta raro ya que hacer una función que devuelva otra de esa forma es un poco raro, es para eso que podemos usar el useCallback de la siguiente manera:

```jsx
import { useState, useRef, useMemo, useCallback } from 'react'
import { searchTasks, addTask } from '../services/tasks'

export function useTasks ({ sortByTaskTitle, search }) {
  const [tasks, setTasks] = useState([])
  const previousSearch = useRef()

  // useCallback(función a memoizar, dependencias)
  const getTasks = useCallback(async ({ search }) => {
      if (search === previousSearch.current) return

      try {
        previousSearch.current = search

        const newTasks = await searchTasks()

        setTasks(newTasks)
      } catch (e) {
        console.error(e)
      }
    }
  , []) // <-- hacemos que cree la función una única vez

  // ...
}
```

useCallback por debajo usa useMemo para la memoización, por lo que ambos son equivalentes, la única diferencia es que el useCallback tiene una sintaxis más fácil cuando queremos memoizar una función

Para ver un pequeño proyecto con useRef, useMemo y useCallback ver el [sexto proyecto de ejemplo](./3.example-projects/06-buscador-peliculas/).

Cabe aclarar que tanto el useMemo como el useCallback es preferible usarlos sólo si tenemos problemas de rendimiento, si el cálculo ha realizar o la función que se crea son muy sencillas no merece la pena utilizarlos.

## React Developer Tools

Es una extensión para navegadores que añade dos pestañas a las herramientas de desarrollo, en primer lugar otorga el apartado "components" que nos permite ver el árbol de componentes, esto ayuda a ver como se estructura nuestra app internamente; y en segundo lugar añade la pestaña "profiler" que nos permite ver cada vez que se renderiza algo, cuánto tarda y qué causó el renderizado.

Los enlaces a las extensiones de Chrome, FireFox y Edge se encuentran en el repositorio de React exactamente [aquí](https://github.com/facebook/react/tree/main/packages/react-devtools-extensions)

import React from "https://esm.sh/react@18.2.0"
import ReactDOM from "https://esm.sh/react-dom@18.2.0/client"

const appDomElement = document.getElementById('app')

// creamos la raiz de React (donde se van a renderizar los componentes) en el elemento "appDomElement"
const root = ReactDOM.createRoot(appDomElement)

// React.createElement(type, attributes, text)
const btn1 = React.createElement('button', {'data-id': '1'}, 'Me gusta')
const btn2 = React.createElement('button', {'data-id': '2'}, 'Me gusta')
const btn3 = React.createElement('button', {'data-id': '3'}, 'Me gusta')

// un React.Fragment es un tipo de elemento vacio que otroga React para que no tengamos que crear un div y que podamos renderizar vario componentes
const app = React.createElement(React.Fragment, null, [btn1, btn2, btn3])

// root.render(component) -> renderiza un componente de React
root.render(app)
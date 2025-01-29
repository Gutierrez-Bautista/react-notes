# Prueba Técnica para Juniors y Trainees de React en Live Coding.

## Enunciado
APIs:

- Facts Random: https://catfact.ninja/fact
- Imagen random: https://cataas.com/cat/says/hello

Recupera un hecho aleatorio de gatos de la primera API y muestra una imagen de un gato con la primera palabra del hecho usando la segunda API.

## Pasos para resolver

### Separamos el Enunciado en Pasos Pequeños
- Recuperar hecho aleatorio de la primera API.
- Recuperar primera palabra del hecho.
- Muestra una imagen de un gato con la primera palabra.

### Probar APIs

La primera devuelve un JSON con las propiedades "fact" (el hecho) y "size" (longitud del hecho)

La segunda devuelve una imagen y debemos usar la siguiente estructura: "https://cataas.com/cat/says/" + primeraPalabra

> [!NOTE]  
> Ahora sí A TRABAJAR

## Una vez Terminamos

Es probable que al terminar la prueba que nos dieron nos soliciten crear un botón que traiga un nuevo hecho y actualice tanto el texto como la imagen o que nos pregunten qué hariamos a continuación, en este último caso son buenas opciones el manejo de errores, separar componentes y lógica en caso de que se pueda o implementar custom hooks
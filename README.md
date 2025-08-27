Documentación del Proyecto: Tatetí Electron App
Nombre del Proyecto: 
Tatetí Electron App
Descripción del Proyecto: Esta aplicación de escritorio multiplataforma desarrolla el clásico juego Tatetí, también conocido como Tres en línea. Fue creada utilizando el framework Electron, que permite combinar tecnologías web (HTML, CSS, JavaScript) en un ejecutable de escritorio, brindando una experiencia de usuario nativa y fluida.
 
Funcionalidades del Juego: El proyecto incluye las siguientes características:
•	Juego Clásico: Ofrece la jugabilidad tradicional de Tatetí en un tablero de 3x3 para dos jugadores, 'X' y 'O'.
•	Selección de Jugador: Permite a los usuarios elegir la ficha ('X' o 'O') al inicio de cada partida.
•	Registro de Puntuación: Cuenta con un marcador que registra las victorias de ambos jugadores, así como la cantidad de empates.
•	Alternancia de Temas: Dispone de un botón para cambiar entre un diseño claro y un diseño oscuro, adaptándose a las preferencias del usuario.
•	Funciones de Reinicio: Los jugadores pueden reiniciar la partida en curso o restablecer el marcador de puntuación.
•	Diseño Adaptable: La interfaz se ajusta dinámicamente al tamaño de la ventana de la aplicación para una visualización óptima.
•	Empaquetado como .exe: La aplicación ha sido empaquetada como un archivo ejecutable para Windows, permitiendo su uso sin necesidad de navegador. El ícono del juego se visualiza en el archivo .exe.
Estructura del Código: El proyecto está organizado de la siguiente manera:
•	main.js: Archivo principal de Electron que controla la creación y gestión de la ventana, así como el ciclo de vida de la aplicación y la ruta del ícono.
•	index.html: Define la estructura del juego, incluyendo el tablero, el marcador, los selectores de jugador y los botones.
•	estilos.css: Contiene las reglas de estilo que dan forma y color a la interfaz, incluyendo las transiciones y los temas.
•	juego.js: Implementa la lógica central del juego, manejando la jugabilidad, la detección de victorias y empates, y controlando el marcador.
•	precarga.js: Un script de seguridad de Electron que facilita una comunicación segura entre el proceso principal y la ventana del juego, evitando exponer APIs sensibles.
•	assets: Carpeta que contiene los recursos visuales, como el ícono de la aplicación.
•	release-builds: Carpeta que se genera automáticamente y contiene el archivo ejecutable (.exe) de la aplicación.
Tecnologías Utilizadas El proyecto fue desarrollado con:
•	Electron: Framework para el desarrollo de aplicaciones de escritorio.
•	Electron Packager: Herramienta utilizada para generar el archivo ejecutable.
•	HTML5: Usado para la estructura y los elementos de la interfaz.
•	CSS3: Utilizado para el diseño y la presentación visual.
•	JavaScript (ES6+): La base para la lógica y la interactividad del juego.
•	Git y GitHub: Para el control de versiones y el alojamiento del proyecto.
Autor:
•	Nombre: Rubén Darío Moyano
•	GitHub: https://github.com/moyano18


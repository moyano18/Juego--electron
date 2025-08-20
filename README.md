Documentación del Proyecto: Tateti Electron App
Nombre del Proyecto
Tateti Electron App
Descripción del Proyecto
Tateti Electron App es una aplicación de escritorio multiplataforma del clásico juego Tateti (también conocido como Tres en Raya). Ha sido desarrollada utilizando el framework Electron para combinar una aplicación web (HTML, CSS, JavaScript) en un ejecutable de escritorio, lo que permite una experiencia de usuario nativa y fluida.
Características del Juego
•	Jugabilidad Clásica: Ofrece el juego tradicional de Tateti en un tablero de 3x3 para dos jugadores (X y O).
•	Selector de Jugador: Permite a los usuarios elegir si desean jugar con la ficha 'X' o 'O' al comienzo de la partida.
•	Registro de Puntuación: Incluye un marcador persistente que registra las victorias de ambos jugadores, así como la cantidad de empates.
•	Alternancia de Temas: Dispone de un botón para cambiar entre el modo claro y el modo oscuro, adaptándose a las preferencias del usuario.
•	Funciones de Reinicio: Los jugadores pueden reiniciar la partida actual o restablecer el marcador completo de puntuación.
•	Diseño Adaptable: La interfaz se ajusta dinámicamente al tamaño de la ventana de la aplicación para una visualización óptima.
•	Consistencia en el Idioma: Todo el código y la interfaz de usuario están escritos en español.
Estructura de Archivos
La estructura del proyecto es la siguiente:
•	main.js: Archivo principal de Electron que controla la creación de la ventana, su gestión y el ciclo de vida de la aplicación.
•	index.html: Define la estructura del juego, incluyendo el tablero, el marcador, el selector de jugador y los botones.
•	estilos.css: Contiene todas las reglas de estilo que dan forma y color a la interfaz del juego, incluyendo las transiciones y los temas.
•	juego.js: Implementa la lógica principal del juego: maneja la jugabilidad, detecta victorias, empates y controla la funcionalidad del marcador.
•	precarga.js: Un script de seguridad de Electron que facilita una comunicación segura entre el proceso principal y la ventana del juego, evitando exponer APIs sensibles.
Tecnologías Utilizadas
•	Electron: Framework para el desarrollo de aplicaciones de escritorio.
•	HTML5: Para la estructura y los elementos de la interfaz.
•	CSS3: Para el diseño y la presentación visual.
•	JavaScript (ES6+): Para la lógica y la interactividad del juego.
Autor
•	Nombre: Rubén Dario Moyano
•	GitHub: https://github.com/moyano18

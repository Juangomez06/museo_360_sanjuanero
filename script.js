// Crea un hospot para mostrar información adicional
// Este modal se mostrará al hacer clic en ciertos hotspots
function hotspotIconoConTexto(hotSpotDiv, args) {
  // Añade clase CSS para estilizar el hotspot
  hotSpotDiv.classList.add("custom-hotspot");

  // Crea elemento de imagen para el icono
  const icon = document.createElement("img");
  icon.src = args.icono; // Establece la fuente del icono
  icon.alt = "Icono"; // Texto alternativo para accesibilidad
  icon.className = "hotspot-icono"; // Clase CSS para el icono

  // Añade el icono al contenedor del hotspot
  hotSpotDiv.appendChild(icon);

  // Añade evento de clic al icono
  icon.addEventListener("click", function () {
    // Si hay una escena destino definida, carga esa escena
    if (args.escenaDestino) {
      viewer.loadScene(args.escenaDestino);
    }
  });
}

// Muestra un modal con información adicional al hacer clic en un hotspot
function showModal(title, description, imageSrc) {
  // Obtiene referencias a los elementos del modal
  const modal = document.getElementById("infoModal");
  const modalTitle = document.getElementById("modalTitle");
  const modalDescription = document.getElementById("modalDescription");
  const modalImage = document.getElementById("modalImage");

  // Establece el contenido del modal
  modalTitle.innerHTML = title;
  modalDescription.innerHTML = description;
  modalImage.src = imageSrc;

  // Muestra el modal (usando flex para centrarlo)
  modal.style.display = "flex";
}

// EVENTO PARA CERRAR EL MODAL AL HACER CLIC EN LA "X"
document.querySelector(".close").onclick = function () {
  document.getElementById("infoModal").style.display = "none";
};

// EVENTO PARA CERRAR EL MODAL AL HACER CLIC FUERA DEL CONTENIDO
window.onclick = function (event) {
  const modal = document.getElementById("infoModal");
  // Si el clic fue directamente en el fondo del modal (no en su contenido)
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

// INICIALIZACIÓN DEL VISOR PANNELLUM
const viewer = pannellum.viewer("panorama", {
  // CONFIGURACIÓN POR DEFECTO PARA TODAS LAS ESCENAS
  default: {
    firstScene: "pano1", // Escena que se carga inicialmente
    sceneFadeDuration: 1000, // Duración de la transición entre escenas (ms)
    autoLoad: true, // Carga automáticamente la primera escena
    type: "equirectangular", // Tipo de proyección para panoramas 360°

    // Configuración de zoom (campo de visión horizontal)
    minHfov: 30, // Zoom máximo (grados)
    maxHfov: 130, // Zoom mínimo (grados)
    hfov: 200, // Zoom inicial

    // Configuración de rotación vertical (pitch)
    pitch: 0, // Ángulo vertical inicial
    minPitch: -45, // Límite inferior de rotación vertical
    maxPitch: 45, // Límite superior de rotación vertical

    // Configuración de rotación horizontal (yaw)
    minYaw: -150, // Límite izquierdo de rotación horizontal
    maxYaw: 170, // Límite derecho de rotación horizontal

    autoRotate: -2, // Velocidad de rotación automática (negativo = antihorario)
    showControls: true, // Muestra los controles de navegación
  },

  // DEFINICIÓN DE ESCENAS DEL TOUR VIRTUAL
  scenes: {
    // PRIMERA ESCENA - ENTRADA DEL MUSEO
    pano1: {
      title: "Entrada museo San Juanero", // Título de la escena
      panorama:
        "https://raw.githubusercontent.com/Juangomez06/museo_360_sanjuanero/refs/heads/main/assets/img/escenas/entrada.jpeg", // URL de la imagen 360°

      // Configuración de vista inicial
      yaw: 0, // Rotación horizontal inicial
      pitch: 0, // Rotación vertical inicial
      hfov: 200, // Campo de visión horizontal inicial

      // Límites de zoom para esta escena
      minHfov: 40,
      maxHfov: 135,

      // DEFINICIÓN DE HOTSPOTS (puntos interactivos)
      hotSpots: [
        {
          pitch: 200, // Posición vertical del hotspot
          yaw: 110, // Posición horizontal del hotspot
          type: "custom", // Tipo personalizado
          createTooltipFunc: hotspotIconoConTexto, // Función para crear el hotspot
          createTooltipArgs: {
            // Argumentos para la función
            icono:
              "https://raw.githubusercontent.com/Juangomez06/museo_360_sanjuanero/refs/heads/main/assets/img/flechas/arriba.png", // Icono del hotspot
            escenaDestino: "pano2", // Escena a cargar al hacer clic
          },
        },
        {
          // Hotspot informativo (museo)
          pitch: 150,
          yaw: 220,
          type: "info",
          text: "MUSEO SANJUANERO HUILENSE ",
          cssClass: "custom-hotspot-button",
          clickHandlerFunc: () =>
            showModal(
              "UN VIAJE AL CORAZÓN DEL FOLCLOR OPITA",
              "<strong> Ubicacion: Biblioteca Departamental Olegario Rivera 2do. Piso </strong> <br><br> Este museo celebra la historia y el significado del Sanjuanero Huilense, danza símbolo del Huila. A través de trajes, instrumentos y memorias del Festival del Bambuco, conocerás la riqueza cultural que nos representa como región. <br><br> <strong><h3>¡BIENVENIDOS!</h3></strong>",
              "https://raw.githubusercontent.com/Juangomez06/museo_360_sanjuanero/refs/heads/main/assets/img/escenas/entrada.jpeg"
            ),
        },
      ],
    },
    pano2: {
      title: "Pasillo museo San Juanero",
      panorama:
        "https://raw.githubusercontent.com/Juangomez06/museo_360_sanjuanero/refs/heads/main/assets/img/escenas/pasillo1.jpg",
      yaw: 0,
      pitch: 0,
      minHfov: 40,
      maxHfov: 140,
      hfov: 200,
      hotSpots: [
        {
          pitch: 340,
          yaw: 150,
          type: "custom",
          createTooltipFunc: hotspotIconoConTexto,
          createTooltipArgs: {
            icono:
              "https://raw.githubusercontent.com/Juangomez06/museo_360_sanjuanero/refs/heads/main/assets/img/flechas/arriba.png",
            escenaDestino: "pano3",
          },
        },
        {
          pitch: 175,
          yaw: 35,
          type: "custom",
          createTooltipFunc: hotspotIconoConTexto,
          createTooltipArgs: {
            icono:
              "https://raw.githubusercontent.com/Juangomez06/museo_360_sanjuanero/refs/heads/main/assets/img/flechas/izquierda.png",
            escenaDestino: "pano1",
          },
        },
        {
          pitch: 150,
          yaw: 180,
          type: "info",
          text: "MUSEO SANJUANERO HUILENSE ",
          cssClass: "custom-hotspot-button",
          clickHandlerFunc: () =>
            showModal(
              "SANJUANERO HUILENSE <br> ¡Patrimonio de todos!",
              "Creado por la Gobernación del Huila y reinaugurado en 2018, este museo nace como un homenaje al Sanjuanero Huilense y al Festival Folclórico, con el propósito de preservar y difundir nuestra identidad cultural. ",
              "https://raw.githubusercontent.com/Juangomez06/museo_360_sanjuanero/refs/heads/main/assets/img/escenas/pasillo1.jpg"
            ),
        },
      ],
    },
    pano3: {
      title: "Pasillo museo San Juanero",
      panorama:
        "https://raw.githubusercontent.com/Juangomez06/museo_360_sanjuanero/refs/heads/main/assets/img/escenas/salon_com.png",
      yaw: 0,
      pitch: 0,
      minHfov: 30,
      maxHfov: 140,
      hfov: 200,
      hotSpots: [
        {
          pitch: 210,
          yaw: 110,
          type: "custom",
          createTooltipFunc: hotspotIconoConTexto,
          createTooltipArgs: {
            icono:
              "https://raw.githubusercontent.com/Juangomez06/museo_360_sanjuanero/refs/heads/main/assets/img/flechas/izquierda.png",
            escenaDestino: "pano4",
          },
        },
        {
          pitch: 210,
          yaw: 170,
          type: "custom",
          createTooltipFunc: hotspotIconoConTexto,
          createTooltipArgs: {
            icono:
              "https://raw.githubusercontent.com/Juangomez06/museo_360_sanjuanero/refs/heads/main/assets/img/flechas/derecha.png",
            escenaDestino: "pano5",
          },
        },
        {
          pitch: 230,
          yaw: 140,
          type: "custom",
          createTooltipFunc: hotspotIconoConTexto,
          createTooltipArgs: {
            icono:
              "https://raw.githubusercontent.com/Juangomez06/museo_360_sanjuanero/refs/heads/main/assets/img/flechas/abajo.png",
            escenaDestino: "pano2",
          },
        },
        {
          pitch: 340,
          yaw: 165,
          type: "custom",
          createTooltipFunc: hotspotIconoConTexto,
          createTooltipArgs: {
            icono:
              "https://raw.githubusercontent.com/Juangomez06/museo_360_sanjuanero/refs/heads/main/assets/img/flechas/arriba.png",
            escenaDestino: "pano6",
          },
        },
      ],
    },
    pano4: {
      title: "Pasillo museo San Juanero",
      panorama:
        "https://raw.githubusercontent.com/Juangomez06/museo_360_sanjuanero/refs/heads/main/assets/img/escenas/musica.jpeg",
      yaw: 0,
      pitch: 0,
      minHfov: 30,
      maxHfov: 140,
      hfov: 200,
      hotSpots: [
        {
          pitch: 360,
          yaw: 165,
          type: "custom",
          createTooltipFunc: hotspotIconoConTexto,
          createTooltipArgs: {
            icono:
              "https://raw.githubusercontent.com/Juangomez06/museo_360_sanjuanero/refs/heads/main/assets/img/flechas/derecha.png",
            escenaDestino: "pano5",
          },
        },
        {
          pitch: 175,
          yaw: 35,
          type: "custom",
          createTooltipFunc: hotspotIconoConTexto,
          createTooltipArgs: {
            icono:
              "https://raw.githubusercontent.com/Juangomez06/museo_360_sanjuanero/refs/heads/main/assets/img/flechas/izquierda.png",
            escenaDestino: "pano3",
          },
        },
        {
          pitch: 150,
          yaw: 100,
          type: "info",
          text: "Pilares del Sanjuanero Huilense",
          cssClass: "custom-hotspot-button",
          clickHandlerFunc: () =>
            showModal(
              "Inés García de Durán y Jorge Villamil Cordovez",
              "Inés García de Durán, folclorista huilense, fue la creadora de la coreografía del Sanjuanero Huilense, definiendo sus pasos y figuras tradicionales. <br><br>  Jorge Villamil Cordovez, médico y compositor, contribuyó en su estructuración y dedicó gran parte de su obra a exaltar la cultura opita.  <br><br> Ambos dejaron un legado invaluable que hoy es símbolo de identidad para el pueblo Huilense.",
              "https://raw.githubusercontent.com/Juangomez06/museo_360_sanjuanero/refs/heads/main/assets/img/modal/guitarras.jpeg"
            ),
        },
        {
          pitch: 150,
          yaw: 220,
          type: "info",
          text: "Instrumentos Típicos del Huila",
          cssClass: "custom-hotspot-button",
          clickHandlerFunc: () =>
            showModal(
              "Instrumentos Típicos del Huila",
              "La cucamba es el conjunto musical tradicional del folclor huilense. Se compone principalmente de instrumentos de percusión como la puerca, el chucho, el carángano, la esterilla, el cien pies y la tambora. <br> <br> Estos se complementan con instrumentos de cuerda como la guitarra, el requinto y el tiple, que aportan la melodía. Aunque algunos han sido reemplazados con el tiempo, siguen siendo el alma sonora de las comparsas de San Juan y San Pedro.",
              "https://raw.githubusercontent.com/Juangomez06/museo_360_sanjuanero/refs/heads/main/assets/img/modal/instrumentos.jpeg"
            ),
        },
        {
          pitch: 390,
          yaw: 155,
          type: "info",
          text: "Afiches del festival ",
          cssClass: "custom-hotspot-button",
          clickHandlerFunc: () =>
            showModal(
              "Afiches del festival ",
              "Los afiches promociones resaltar la diversidad de manifestaciones culturales que se expresan durante el festival, para que propios y foráneos disfruten las mejores fiestas folclóricas del país.",
              "https://raw.githubusercontent.com/Juangomez06/museo_360_sanjuanero/refs/heads/main/assets/img/modal/mural_convocatoria.jpeg"
            ),
        },
      ],
    },
    pano5: {
      title: "Pasillo museo San Juanero",
      panorama:
        "https://raw.githubusercontent.com/Juangomez06/museo_360_sanjuanero/refs/heads/main/assets/img/escenas/trajes.jpeg",
      yaw: 0,
      pitch: 0,
      minHfov: 30,
      maxHfov: 140,
      hfov: 200,
      hotSpots: [
        {
          pitch: 360,
          yaw: 165,
          type: "custom",
          createTooltipFunc: hotspotIconoConTexto,
          createTooltipArgs: {
            icono:
              "https://raw.githubusercontent.com/Juangomez06/museo_360_sanjuanero/refs/heads/main/assets/img/flechas/derecha.png",
            escenaDestino: "pano6",
          },
        },
        {
          pitch: 175,
          yaw: 35,
          type: "custom",
          createTooltipFunc: hotspotIconoConTexto,
          createTooltipArgs: {
            icono:
              "https://raw.githubusercontent.com/Juangomez06/museo_360_sanjuanero/refs/heads/main/assets/img/flechas/izquierda.png",
            escenaDestino: "pano3",
          },
        },
        {
          pitch: 180,
          yaw: 80,
          type: "info",
          text: "Evolución del Traje del Sanjuanero Huilense",
          cssClass: "custom-hotspot-button",
          clickHandlerFunc: () =>
            showModal(
              "Década de 1960",
              "El traje se formaliza como símbolo del folclor huilense. Se caracteriza por su sencillez: blusa blanca con encajes y falda de flores, inspirada en la mujer campesina. El traje masculino incluye sombrero y pantalón blanco.",
              "https://raw.githubusercontent.com/Juangomez06/museo_360_sanjuanero/refs/heads/main/assets/img/modal/traje1.jpeg"
            ),
        },
        {
          pitch: 210,
          yaw: 150,
          type: "info",
          text: "Traje de San Juanero",
          cssClass: "custom-hotspot-button",
          clickHandlerFunc: () =>
            showModal(
              "Primera Pareja",
              "La primera pareja que bailó la coreografía creada por Inés García Durán, fue Tony Arbeláez y Sonia Cerquera en el año 1963, con la asesoría de Sergio Durán y Jorge Villamil Cordovez",
              "https://raw.githubusercontent.com/Juangomez06/museo_360_sanjuanero/refs/heads/main/assets/img/modal/traje2.jpeg"
            ),
        },
        {
          pitch: 190,
          yaw: 250,
          type: "info",
          text: "Evolución del Traje del Sanjuanero Huilense",
          cssClass: "custom-hotspot-button",
          clickHandlerFunc: () =>
            showModal(
              "Década de 1980 - 1990",
              "Surgen bordados más elaborados, se introducen telas brillantes y el traje gana fuerza como símbolo turístico. ",
              "https://raw.githubusercontent.com/Juangomez06/museo_360_sanjuanero/refs/heads/main/assets/img/modal/traje3.jpeg"
            ),
        },
        {
          pitch: 380,
          yaw: 140,
          type: "info",
          text: "Evolución del Traje del Sanjuanero Huilense",
          cssClass: "custom-hotspot-button",
          clickHandlerFunc: () =>
            showModal(
              "Década del 2010",
              "Se da mayor protagonismo al bordado artesanal. <br><br> Época contemporánea: Se mantienen los elementos tradicionales, pero con innovaciones en materiales y técnicas.",
              "https://raw.githubusercontent.com/Juangomez06/museo_360_sanjuanero/refs/heads/main/assets/img/modal/traje4.jpeg"
            ),
        },
      ],
    },
    pano6: {
      title: "Pasillo museo San Juanero",
      panorama:
        "https://raw.githubusercontent.com/Juangomez06/museo_360_sanjuanero/refs/heads/main/assets/img/escenas/pasos.jpeg",
      yaw: 0,
      pitch: 0,
      minHfov: 30,
      maxHfov: 140,
      hfov: 200,
      hotSpots: [
        {
          pitch: 360,
          yaw: 165,
          type: "custom",
          createTooltipFunc: hotspotIconoConTexto,
          createTooltipArgs: {
            icono:
              "https://raw.githubusercontent.com/Juangomez06/museo_360_sanjuanero/refs/heads/main/assets/img/flechas/derecha.png",
            escenaDestino: "pano7",
          },
        },
        {
          pitch: 175,
          yaw: 35,
          type: "custom",
          createTooltipFunc: hotspotIconoConTexto,
          createTooltipArgs: {
            icono:
              "https://raw.githubusercontent.com/Juangomez06/museo_360_sanjuanero/refs/heads/main/assets/img/flechas/izquierda.png",
            escenaDestino: "pano3",
          },
        },
        {
          pitch: 150,
          yaw: 50,
          type: "info",
          text: "Coreografía Sanjuanero",
          cssClass: "custom-hotspot-button",
          clickHandlerFunc: () =>
            showModal(
              "Pasos 1",
              "Invitación",
              "https://raw.githubusercontent.com/Juangomez06/museo_360_sanjuanero/refs/heads/main/assets/img/modal/paso1.jpg"
            ),
        },
        {
          pitch: 150,
          yaw: 80,
          type: "info",
          text: "Coreografía Sanjuanero",
          cssClass: "custom-hotspot-button",
          clickHandlerFunc: () =>
            showModal(
              "Pasos 2",
              "Ochos ",
              "https://raw.githubusercontent.com/Juangomez06/museo_360_sanjuanero/refs/heads/main/assets/img/modal/paso2.jpg"
            ),
        },
        {
          pitch: 150,
          yaw: 110,
          type: "info",
          text: "Coreografía Sanjuanero",
          cssClass: "custom-hotspot-button",
          clickHandlerFunc: () =>
            showModal(
              "Pasos 3",
              "Coqueteo ",
              "https://raw.githubusercontent.com/Juangomez06/museo_360_sanjuanero/refs/heads/main/assets/img/modal/paso3.jpg"
            ),
        },
        {
          pitch: 150,
          yaw: 155,
          type: "info",
          text: "Coreografía Sanjuanero",
          cssClass: "custom-hotspot-button",
          clickHandlerFunc: () =>
            showModal(
              "Pasos 4",
              "Arrodillada ",
              "https://raw.githubusercontent.com/Juangomez06/museo_360_sanjuanero/refs/heads/main/assets/img/modal/paso4.png"
            ),
        },
        {
          pitch: 150,
          yaw: 210,
          type: "info",
          text: "Coreografía Sanjuanero",
          cssClass: "custom-hotspot-button",
          clickHandlerFunc: () =>
            showModal(
              "Pasos 5",
              "Levantada ",
              "https://raw.githubusercontent.com/Juangomez06/museo_360_sanjuanero/refs/heads/main/assets/img/modal/paso5.png"
            ),
        },
        {
          pitch: 150,
          yaw: 270,
          type: "info",
          text: "Coreografía Sanjuanero",
          cssClass: "custom-hotspot-button",
          clickHandlerFunc: () =>
            showModal(
              "Pasos 6",
              "Arrastrada del ala ",
              "https://raw.githubusercontent.com/Juangomez06/museo_360_sanjuanero/refs/heads/main/assets/img/modal/paso6.jpg"
            ),
        },
        {
          pitch: 150,
          yaw: 310,
          type: "info",
          text: "Coreografía Sanjuanero",
          cssClass: "custom-hotspot-button",
          clickHandlerFunc: () =>
            showModal(
              "Pasos 7",
              "Secreto ",
              "https://raw.githubusercontent.com/Juangomez06/museo_360_sanjuanero/refs/heads/main/assets/img/modal/paso7.png"
            ),
        },
        {
          pitch: 160,
          yaw: 340,
          type: "info",
          text: "Coreografía Sanjuanero",
          cssClass: "custom-hotspot-button",
          clickHandlerFunc: () =>
            showModal(
              "Pasos 8",
              "Salida",
              "https://raw.githubusercontent.com/Juangomez06/museo_360_sanjuanero/refs/heads/main/assets/img/modal/paso8.png"
            ),
        },
        {
          pitch: 200,
          yaw: 185,
          type: "info",
          text: "Coreografía Sanjuanero",
          cssClass: "custom-hotspot-button",
          clickHandlerFunc: () =>
            showModal(
              "Esculturas Museo Sanjuanero Huilense",
              "Para la coreografía, se retomo el bambuco tradicional y se convirtió en una coreografía de tres pasos y ocho figuras. El baile del Sanjuanero huilense es la conquista que se logra a través de un suave pero persistente galanteo, que se acompaña con el rabo' e gallo, el sombrero y decididos pasos y figuras.",
              "https://raw.githubusercontent.com/Juangomez06/museo_360_sanjuanero/refs/heads/main/assets/img/escenas/pasos.jpeg"
            ),
        },
      ],
    },
    pano7: {
      title: "Pasillo museo San Juanero",
      panorama:
        "https://raw.githubusercontent.com/Juangomez06/museo_360_sanjuanero/refs/heads/main/assets/img/escenas/pasillo5.jpeg",
      yaw: 0,
      pitch: 0,
      minHfov: 130,
      maxHfov: 145,
      hfov: 200,
      hotSpots: [
        {
          pitch: 360,
          yaw: 165,
          type: "custom",
          createTooltipFunc: hotspotIconoConTexto,
          createTooltipArgs: {
            icono:
              "https://raw.githubusercontent.com/Juangomez06/museo_360_sanjuanero/refs/heads/main/assets/img/flechas/derecha.png",
            escenaDestino: "pano8",
          },
        },
        {
          pitch: 175,
          yaw: 35,
          type: "custom",
          createTooltipFunc: hotspotIconoConTexto,
          createTooltipArgs: {
            icono:
              "https://raw.githubusercontent.com/Juangomez06/museo_360_sanjuanero/refs/heads/main/assets/img/flechas/izquierda.png",
            escenaDestino: "pano6",
          },
        },
        {
          pitch: 170,
          yaw: 150,
          type: "info",
          text: "Escenarios del Festival",
          cssClass: "custom-hotspot-button",
          clickHandlerFunc: () =>
            showModal(
              "Escenarios del Festival",
              "En sus inicios, los desfiles y presentaciones del Festival Folclórico del Huila se realizaban en las calles de Neiva. Con el tiempo, se fueron consolidando espacios como la Concha Acústica Jorge Villamil, y en 1980 se inauguró el Coliseo Cubierto 'Álvaro Sánchez Silva', en homenaje al exgobernador del Huila. ",
              "https://raw.githubusercontent.com/Juangomez06/museo_360_sanjuanero/refs/heads/main/assets/img/escenas/pasillo5.jpeg"
            ),
        },
      ],
    },
    pano8: {
      title: "Pasillo museo San Juanero",
      panorama:
        "https://raw.githubusercontent.com/Juangomez06/museo_360_sanjuanero/refs/heads/main/assets/img/escenas/mural.jpeg",
      yaw: 0,
      pitch: 0,
      minHfov: 130,
      maxHfov: 140,
      hfov: 200,
      hotSpots: [
        {
          pitch: 360,
          yaw: 165,
          type: "custom",
          createTooltipFunc: hotspotIconoConTexto,
          createTooltipArgs: {
            icono:
              "https://raw.githubusercontent.com/Juangomez06/museo_360_sanjuanero/refs/heads/main/assets/img/flechas/derecha.png",
            escenaDestino: "pano3",
          },
        },
        {
          pitch: 175,
          yaw: 35,
          type: "custom",
          createTooltipFunc: hotspotIconoConTexto,
          createTooltipArgs: {
            icono:
              "https://raw.githubusercontent.com/Juangomez06/museo_360_sanjuanero/refs/heads/main/assets/img/flechas/izquierda.png",
            escenaDestino: "pano2",
          },
        },
        {
          pitch: 170,
          yaw: 150,
          type: "info",
          text: "",
          cssClass: "custom-hotspot-button",
          clickHandlerFunc: () =>
            showModal(
              "REINAS NACIONALES DEL BAMBUCO 1963 AL 2021",
              "",
              "https://raw.githubusercontent.com/Juangomez06/museo_360_sanjuanero/refs/heads/main/assets/img/escenas/mural.jpeg"
            ),
        },
      ],
    },
  },
});

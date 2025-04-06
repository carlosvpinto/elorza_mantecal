document.addEventListener("DOMContentLoaded", () => {
    // Selección de elementos del DOM
    const photoGallery = document.querySelector(".photo-gallery");
    const maintenanceGallery = document.querySelector(".maintenance-gallery");
    const filterContainer = document.querySelector(".filters");
    const sectionTitle = document.querySelector(".section-title"); // Título dinámico para la sección
    const maintenanceTitle = document.querySelector(".maintenance-title"); // Título dinámico para la sección
    
    const videoGallery = document.querySelector(".video-gallery");
    const videoTitle = document.querySelector(".video-title"); // Título dinámico para videos

    const fullscreenContainer = document.createElement("div");
    fullscreenContainer.id = "fullscreen-container";
    fullscreenContainer.classList.add("hidden");
    document.body.appendChild(fullscreenContainer);

    const closeFullscreen = document.createElement("span");
    closeFullscreen.id = "close-fullscreen";
    closeFullscreen.textContent = "×";
    fullscreenContainer.appendChild(closeFullscreen);

    const fullscreenImg = document.createElement("img");
    fullscreenImg.id = "fullscreen-img";
    fullscreenContainer.appendChild(fullscreenImg);
    

    // Fotos generales organizadas por semana
   
          const photos = [
            { src: "imagenes/elorza/torre1.jpeg", description: "Limpieza Torre 1", week: 1 },
            { src: "imagenes/elorza/torre2.jpeg", description: "Limpieza Torre 2", week: 1 },
            { src: "imagenes/elorza/torre3.jpeg", description: "Limpieza Torre 3", week: 1 },
            { src: "imagenes/elorza/torre4limpiando.jpeg", description: "Limpieza Torre 4 Antes", week: 1 },
            { src: "imagenes/elorza/torre4.jpeg", description: "Limpieza Torre 4", week: 1 },
           
            { src: "imagenes/elorza/torre5.jpeg", description: "Limpieza Torre 5", week: 1 },
            { src: "imagenes/elorza/torre6.jpeg", description: "Limpieza Torre 6" , week: 1},
            { src: "imagenes/elorza/torre7.jpeg", description: "Limpieza Torre 7", week: 2 },
            { src: "imagenes/elorza/torre8.jpeg", description: "Limpieza Torre 8", week: 2 },
            { src: "imagenes/elorza/torre9.jpeg", description: "Limpieza Torre 9", week: 2 },
            { src: "imagenes/elorza/torre10.jpeg", description: "Limpieza Torre 10", week: 2 },
            { src: "imagenes/elorza/torre11.jpeg", description: "Limpieza Torre 11" , week: 2},
            { src: "imagenes/elorza/torre12.jpeg", description: "Limpieza Torre 12", week: 2 },
            { src: "imagenes/elorza/torre13.jpeg", description: "Limpieza Torre 13", week: 2 },
            { src: "imagenes/elorza/torre14.jpeg", description: "Limpieza Torre 14", week: 2 },
            { src: "imagenes/elorza/torre15.jpeg", description: "Limpieza Torre 15", week: 2 },
            { src: "imagenes/elorza/torre16.jpeg", description: "Limpieza Torre 16", week: 2 },
            { src: "imagenes/elorza/torre17.jpeg", description: "Limpieza Torre 17", week: 2 },
            { src: "imagenes/elorza/torre18.jpeg", description: "Limpieza Torre 18", week: 2 },
            { src: "imagenes/elorza/torre19.jpeg", description: "Limpieza Torre 19", week: 2 },
            { src: "imagenes/elorza/torre20.jpeg", description: "Limpieza Torre 20 Negado el Acceso" , week: 2},
            { src: "imagenes/elorza/torre21.jpeg", description: "Limpieza Torre 21", week: 2 },
            { src: "imagenes/elorza/torre22.jpeg", description: "Limpieza Torre 22", week: 2 },
            { src: "imagenes/elorza/torre23.jpeg", description: "Limpieza Torre 23" , week: 3},
            { src: "imagenes/elorza/torre24.jpeg", description: "Limpieza Torre 24", week: 3 },
            { src: "imagenes/elorza/torre25.jpeg", description: "Limpieza Torre 25", week: 3 },
            { src: "imagenes/elorza/torre26.jpeg", description: "Limpieza Torre 26" , week: 3},
            { src: "imagenes/elorza/torre27.jpeg", description: "Limpieza Torre 27", week: 3 },
            { src: "imagenes/elorza/torre28-antes.jpeg", description: "Limpieza Torre 28 Antes de Limpieza", week: 3 },
            { src: "imagenes/elorza/torre28.jpeg", description: "Limpieza Torre 28" , week: 3  },
            { src: "imagenes/elorza/torre29-antes.jpeg", description: "Limpieza Torre 29 Antes de Limpieza", week: 3 },
            { src: "imagenes/elorza/torre29.jpeg", description: "Limpieza Torre 29" , week: 3},
            { src: "imagenes/elorza/torre30-antes.jpeg", description: "Torre 30 Antes de limpieza" , week: 3},
            { src: "imagenes/elorza/torre30.jpeg", description: "Limpieza Torre 30" , week: 3},
            { src: "imagenes/elorza/torre31-antes.jpeg", description: "Torre 31 Antes de Limpieza" , week: 3},
            { src: "imagenes/elorza/torre32.jpeg", description: "Limpieza Torre 32" , week: 3},
            { src: "imagenes/elorza/torre33-antes.jpeg", description: "Torre 33 Antes de Limpieza" , week: 3},
            { src: "imagenes/elorza/torre33.jpeg", description: "Limpieza Torre 33" , week: 3},
            { src: "imagenes/elorza/torre34-antes.jpeg", description: "Torre 34 Antes de Limpieza" , week: 3},
            { src: "imagenes/elorza/torre34.jpeg", description: "Limpieza Torre 34" , week: 3},
            { src: "imagenes/elorza/torre35-antes.jpeg", description: "Limpieza Torre 35", week: 3 },
            { src: "imagenes/elorza/torre35.jpeg", description: "Limpieza Torre 35", week: 3 },
            { src: "imagenes/elorza/torre36-antes.jpeg", description: "Torre 36 Antes de Limpieza" , week: 3},
            { src: "imagenes/elorza/torre36.jpeg", description: "Limpieza Torre 36" , week: 3},
            { src: "imagenes/elorza/torre37-antes.jpeg", description: "Torre 37 Antes de Limpieza" , week: 3},
            { src: "imagenes/elorza/torre37.jpeg", description: "Limpieza Torre 37" , week: 3},
            { src: "imagenes/elorza/torre38-antes.jpeg", description: "Torre 38 Antes de Limpieza" , week: 3},
            { src: "imagenes/elorza/torre38.jpeg", description: "Limpieza Torre 38" , week: 3},
            { src: "imagenes/elorza/torre39-antes.jpeg", description: "Torre 39 Antes de Limpieza" , week: 3},
            { src: "imagenes/elorza/torre39.jpeg", description: "Limpieza Torre 39" , week: 3},
            { src: "imagenes/elorza/torre40-antes.jpeg", description: "Torre 40 Antes de Limpieza" , week: 3},
            { src: "imagenes/elorza/torre40.jpeg", description: "Limpieza Torre 40" , week: 3},
            { src: "imagenes/elorza/torre41-antes.jpeg", description: "Torre 41 Antes de Limpieza" , week: 3},
            { src: "imagenes/elorza/torre41.jpeg", description: "Limpieza Torre 41" , week: 3},
            { src: "imagenes/elorza/torre42-antes.jpeg", description: "Torre 42 Antes limpieza" , week: 3},
            { src: "imagenes/elorza/torre42.jpeg", description: "Limpieza Torre 42" , week: 3},
            { src: "imagenes/elorza/torre43-antes.jpeg", description: "Torre 43 Antes de la Limpieza" , week: 4},
            { src: "imagenes/elorza/torre43.jpeg", description: "Torre 43 Antes de la Limpieza" , week: 4},
            { src: "imagenes/elorza/torre44-antes.jpeg", description: "Antes Torre 44" , week: 4},
            { src: "imagenes/elorza/torre44.jpeg", description: "Limpieza Torre 44" , week: 4},
            { src: "imagenes/elorza/torre45-antes.jpeg", description: "Antes Torre 45" , week: 4},
            { src: "imagenes/elorza/torre45.jpeg", description: "Limpieza Torre 45" , week: 4},
            { src: "imagenes/elorza/torre47antes.jpeg", description: "Torre 47 Antes de la Limpieza" , week: 5},
            { src: "imagenes/elorza/torre47.jpeg", description: "Torre 47" , week: 5},
            { src: "imagenes/elorza/torre48.jpeg", description: "Torre 48" , week: 5},
            { src: "imagenes/elorza/torre49antes.jpeg", description: "Torre 49 antes de la Limpieza" , week: 5},
           
            { src: "imagenes/elorza/torre49-1.jpeg", description: "Torre 49" , week: 5},
            { src: "imagenes/elorza/torre50.jpeg", description: "Torre 50" , week: 5},
            { src: "imagenes/elorza/torre51-antes.jpeg", description: "Torre 51 Antes" , week: 5},
            { src: "imagenes/elorza/torre51.jpeg", description: "Torre 51" , week: 5},
            
          
        ];
    


    // Fotos de mantenimiento organizadas por semana
    

    const maintenancePhotos = [
        { src: "imagenes/elorza/tramo2-3.jpeg", description: "Tramo Limpiado 2-3", week: 1 },
        { src: "imagenes/elorza/tramo20-21.jpeg", description: "Trabajando Antes Tramo 4-7" , week: 1},
        { src: "imagenes/elorza/tramo4-7.jpeg", description: "Tramo limpiado 4-7", week: 1 },

        { src: "imagenes/elorza/trabajando_torre10.jpeg", description: "Trabajando Torre 10", week: 1 },
        { src: "imagenes/elorza/tramo 1-2.jpeg", description: "Mantenimiento Tramo 1-2", week: 1 },
        { src: "imagenes/elorza/tramo2-3.jpeg", description: "Mantenimiento Tramo 2-3", week: 1 },
        { src: "imagenes/elorza/tramo4-7.jpeg", description: "Mantenimiento Tramo 4-7" , week: 1},
        { src: "imagenes/elorza/tramo5-6.jpeg", description: "Tramo 5-6 antes del Mantenimiento", week: 1 },
        { src: "imagenes/elorza/tramo5-6despues.jpeg", description: "Tramo 5-6 Despues del Mantenimiento", week: 1 },
        { src: "imagenes/elorza/tramo8-10.jpeg", description: "Tramo 8-10 antes del Mantenimiento" , week: 1},
        { src: "imagenes/elorza/tramo10-11_problema.jpeg", description: "Tramo10-11 problema Mantenimiento" , week: 1},
        { src: "imagenes/elorza/tramo11-12.jpeg", description: "Tramo 11-12 Antes del Mantenimiento" , week: 2},
        { src: "imagenes/elorza/tramo12-13.jpeg", description: "Tramo 12-13 Antes del Mantenimiento", week: 2 },
        { src: "imagenes/elorza/tramo14-15-1.jpeg", description: "Tramo 14-15 Antes del Mantenimiento", week: 2 },
        { src: "imagenes/elorza/tramo20-21.jpeg", description: "Tramo 20-21 ", week: 2 },
        { src: "imagenes/elorza/tramo20-21-2.jpeg", description: "Tramo 20-21 Antes del Mantenimiento " , week: 2},
        { src: "imagenes/elorza/tramo21-22despues.jpeg", description: "Tramo 21-22 Despues del Mantenimiento", week: 2 },
        { src: "imagenes/elorza/tramo21-22.jpeg", description: "Tramo 21-22 Antes del Mantenimiento ", week: 2 },
        { src: "imagenes/elorza/tramo58-57.jpeg", description: "Tramo 58-57 Fuera del Cronograma", week: 3 },
        { src: "imagenes/elorza/tramo62-61.jpeg", description: "Tramo 62-61 Fuera del Cronograma" , week: 3},
        { src: "imagenes/elorza/tramo45-46-antes.jpeg", description: "Tramo 45-46 Antes del Manteniento" , week: 4},
        { src: "imagenes/elorza/tramo45-46.jpeg", description: "Tramo 45-46 Durante el mantenimiento" , week: 4},
        { src: "imagenes/elorza/tramo47-48antes.jpeg", description: "tramo 47-48 Antes del mantenimiento", week: 5 },
        { src: "imagenes/elorza/antestorre49.jpeg", description: "Antes Torre 49", week: 5 },
        { src: "imagenes/elorza/antestorre49-50.jpeg", description: "Tramo 49-50 Durante la Limpieza" , week: 5},
        { src: "imagenes/elorza/torre49-50-1.jpeg", description: "Tramo 51-52 Durante Manteniento" , week: 5},
        { src: "imagenes/elorza/tramo51-52.jpeg", description: "Tramo 51-52 Durante el mantenimiento" , week: 5},
        { src: "imagenes/elorza/tramo52-53.jpeg", description: "Tramo 52-53 Despues del Mantenimiento" , week: 5},
        
    
    
    
    
        // Añade más fotos de tramos en mantenimiento según sea necesario
    ];


       // Añade aquí tus videos con descripciones
       const videos = [
        { src: "videos/elorza/torre97cerca.mp4", description: "Torre 97 fuera del Cronograma" , week: 1},
        { src: "videos/elorza/torre97-98.mp4", description: "Tramo 97-98 Fuera del Cronograma", week: 1 },
        { src: "videos/elorza/torre61.mp4", description: "Torre 61 Fuera del Cronograma" , week: 1},
        { src: "videos/elorza/torre23-22.mp4", description: "Torre 23-22 Antes del Manteniento", week: 1 },
        { src: "videos/elorza/tramo58-59.mp4", description: "tramo58-59", week: 1 },
        { src: "videos/elorza/tramo58-59.mp4", description: "tramo58-59", week: 1 },
        { src: "videos/elorza/torre60-61.mp4", description: "tramo  60-61 Fuera del Cronograma", week: 1 },
        { src: "videos/elorza/torre61.mp4", description: "Torre 61 Fuera del Cronograma", week: 1 },
        { src: "videos/elorza/torre63.mp4", description: "Torre 63 Fuera del Cronograma", week: 1 },
        { src: "videos/elorza/tramo53-52.mp4", description: "Torre 53-52 Fuera del Cronograma" , week: 1},
        { src: "videos/elorza/tramo53-52.mp4", description: "Torre 53-52 Fuera del Cronograma", week: 1 },
        { src: "videos/elorza/tramo58-57.mp4", description: "Torre 58-57 Fuera del Cronograma", week: 1 },
        { src: "videos/elorza/tramo58-59.mp4", description: "Torre 53-52 Fuera del Cronograma", week: 1 },
        { src: "videos/elorza/tramo62-61.mp4", description: "Torre 62-61 Fuera del Cronograma", week: 3 },
        { src: "videos/elorza/tramo62-63.mp4", description: "Torre 62-63 Fuera del Cronograma", week: 2 },
        { src: "videos/elorza/tramo53-52.mp4", description: "Torre 53-52 Fuera del Cronograma" , week: 2},
        
       
        // Añade más videos según sea necesario
    ];

    // Generar los botones de filtro dinámicamente
    const weeks = [...new Set([...photos.map(photo => photo.week), ...maintenancePhotos.map(photo => photo.week)])];

    const createFilterButtons = () => {
        // Botón para "Todas las Semanas"
        const allButton = document.createElement("button");
        allButton.textContent = "Todas las Semanas";
        allButton.setAttribute("data-week", "all");
        filterContainer.appendChild(allButton);

        // Botones para cada semana
        weeks.forEach(week => {
            const button = document.createElement("button");
            button.textContent = `Semana ${week}`;
            button.setAttribute("data-week", week);
            filterContainer.appendChild(button);
        });
    };

    // Renderizar videos filtrados por semana
    const renderVideos = (week) => {
        videoGallery.innerHTML = ""; // Limpiar galería de videos

        const filteredVideos = week === "all" ? videos : videos.filter(video => video.week === parseInt(week));

        if (filteredVideos.length === 0) {
            videoGallery.innerHTML = "<p>No hay videos para esta semana.</p>";
        } else {
            filteredVideos.forEach(video => {
                const videoItem = document.createElement("div");
                videoItem.classList.add("video-item");

                const vid = document.createElement("video");
                vid.controls = true;
                vid.src = video.src;

                const desc = document.createElement("p");
                desc.textContent = video.description;

                videoItem.appendChild(vid);
                videoItem.appendChild(desc);
                videoGallery.appendChild(videoItem);

              
            });
        }
    };

    // Renderizar fotos generales
    const renderPhotos = (week) => {
        photoGallery.innerHTML = ""; // Limpiar galería
        const filteredPhotos = week === "all" ? photos : photos.filter(photo => photo.week === parseInt(week));

        if (filteredPhotos.length === 0) {
            photoGallery.innerHTML = "<p>No hay fotos para esta semana.</p>";
        } else {
            filteredPhotos.forEach(photo => {
                const photoItem = document.createElement("div");
                photoItem.classList.add("photo-item");

                const img = document.createElement("img");
                img.src = photo.src;
                img.alt = photo.description;

                const desc = document.createElement("p");
                desc.textContent = photo.description;

                photoItem.appendChild(img);
                photoItem.appendChild(desc);
                photoGallery.appendChild(photoItem);

                   // Agregar evento de clic para pantalla completa
                   img.addEventListener("click", () => {
                    fullscreenImg.src = img.src;
                    fullscreenImg.alt = img.alt;
                    fullscreenContainer.classList.remove("hidden");
                });
            });
        }
    };

    // Renderizar fotos de mantenimiento
// Renderizar fotos de mantenimiento
const renderMaintenancePhotos = (week) => {
    maintenanceGallery.innerHTML = ""; // Limpiar galería de mantenimiento
    const filteredMaintenancePhotos = week === "all" ? maintenancePhotos : maintenancePhotos.filter(photo => photo.week === parseInt(week));

    if (filteredMaintenancePhotos.length === 0) {
        maintenanceGallery.innerHTML = "<p>No hay fotos de mantenimiento para esta semana.</p>";
    } else {
        filteredMaintenancePhotos.forEach(photo => {
            const maintenanceItem = document.createElement("div");
            maintenanceItem.classList.add("maintenance-item");

            const img = document.createElement("img");
            img.src = photo.src;
            img.alt = photo.description;

            const desc = document.createElement("p");
            desc.textContent = photo.description;

            maintenanceItem.appendChild(img);
            maintenanceItem.appendChild(desc);
            maintenanceGallery.appendChild(maintenanceItem);

            // Agregar evento de clic para pantalla completa
            img.addEventListener("click", () => {
                fullscreenImg.src = img.src;
                fullscreenImg.alt = img.alt;
                fullscreenContainer.classList.remove("hidden");
            });
        });
    }
};

   // Actualizar títulos dinámicos
   const updateTitles = (week) => {
    sectionTitle.textContent = week === "all" ? "Todas las Semanas - por Torres" : `Semana ${week} - Limpieza por Torres`;
    maintenanceTitle.textContent = week === "all" ? "Todas las Semanas - Mantenimiento" : `Semana ${week} - Mantenimiento`;
    videoTitle.textContent = week === "all" ? "Todas las Semanas - Videos" : `Semana ${week} - Videos`;
};

    // Manejador del clic en los botones de filtro
    const handleFilterClick = (e) => {
        const week = e.target.getAttribute("data-week");
        updateTitles(week);
        renderPhotos(week);
        renderVideos(week);
        renderMaintenancePhotos(week);
    };

    // Inicializar
    const addFilterEventListeners = () => {
        const filterButtons = document.querySelectorAll(".filters button");
        filterButtons.forEach(button => {
            button.addEventListener("click", handleFilterClick);
        });
    };

    closeFullscreen.addEventListener("click", () => {
        fullscreenContainer.classList.add("hidden");
        fullscreenImg.src = "";
    });

    fullscreenContainer.addEventListener("click", (e) => {
        if (e.target === fullscreenContainer) {
            fullscreenContainer.classList.add("hidden");
            fullscreenImg.src = "";
        }
    });

    // Inicializar la funcionalidad
    createFilterButtons();
    updateTitles("all"); // Mostrar título inicial
    renderPhotos("all"); // Renderizar todas las fotos generales
    renderMaintenancePhotos("all"); // Renderizar todas las fotos de mantenimiento
    addFilterEventListeners(); // Agregar eventos a los botones
    renderVideos("all");
});

document.addEventListener("DOMContentLoaded", () => {
    // Selección de elementos del DOM
    const photoGallery = document.querySelector(".photo-gallery");
    const maintenanceGallery = document.querySelector(".maintenance-gallery");
    const filterContainer = document.querySelector(".filters");
    const sectionTitle = document.querySelector(".section-title"); // Título dinámico para la sección
    const maintenanceTitle = document.querySelector(".maintenance-title"); // Título dinámico para la sección
    
    const videoGallery = document.querySelector(".video-gallery");
    const videoTitle = document.querySelector(".video-title"); // Título dinámico para videos

    // Fotos generales organizadas por semana
   
          const photos = [
            { src: "imagenes/sombrero/trabajotorre264-265-antes.jpeg", description: "Antes de Limpieza Torre 1", week: 1 },
            { src: "imagenes/sombrero/trabajotorre264-265.jpeg", description: "Antes de Limpieza Torre 1", week: 1 },
            { src: "imagenes/sombrero/trabajotorre264-265-0.jpeg", description: "Inicio de Limpieza Torre 1", week: 1 },
            { src: "imagenes/sombrero/trabajotorre264-265-2.jpeg", description: "Inicio Torre 1", week: 1 },
            { src: "imagenes/sombrero/tramo264-265.jpeg", description: "Culminado Limpieza Torre 1", week: 1 },

        ];
    


    // Fotos de mantenimiento organizadas por semana
    


       // Añade aquí tus videos con descripciones
       const videos = [
        { src: "videos/torre97cerca.mp4", description: "Torre 97 fuera del Cronograma" , week: 1},
        { src: "videos/torre97-98.mp4", description: "Tramo 97-98 Fuera del Cronograma", week: 1 },
        { src: "videos/torre61.mp4", description: "Torre 61 Fuera del Cronograma" , week: 1},
      
        // Añade más videos según sea necesario
    ];

    // Generar los botones de filtro dinámicamente
    const weeks = [...new Set([...photos.map(photo => photo.week)])];

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
            });
        }
    };

  

   // Actualizar títulos dinámicos
   const updateTitles = (week) => {
    sectionTitle.textContent = week === "all" ? "Todas las Semanas" : `Semana ${week}`;
    videoTitle.textContent = week === "all" ? "Todas las Semanas - Videos" : `Semana ${week} - Videos`;
};

    // Manejador del clic en los botones de filtro
    const handleFilterClick = (e) => {
        const week = e.target.getAttribute("data-week");
        updateTitles(week);
        renderPhotos(week);
        renderMaintenancePhotos(week);
        renderVideos(week); // Renderizar los videos según la semana
    };

    // Agregar eventos de clic a los botones de filtro
    const addFilterEventListeners = () => {
        const filterButtons = document.querySelectorAll(".filters button");
        filterButtons.forEach(button => {
            button.addEventListener("click", handleFilterClick);
        });
    };

    // Inicializar la funcionalidad
    createFilterButtons();
    updateTitles("all"); // Mostrar título inicial
    renderPhotos("all"); // Renderizar todas las fotos generales
   
    addFilterEventListeners(); // Agregar eventos a los botones
   // renderVideos("all");
});

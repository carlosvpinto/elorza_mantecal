document.addEventListener("DOMContentLoaded", () => {
    // Selección de elementos del DOM
    const photoGallery = document.querySelector(".photo-gallery");
    const maintenanceGallery = document.querySelector(".maintenance-gallery");
    const videoGallery = document.querySelector(".video-gallery");
    const filterContainer = document.querySelector(".filters");
    const sectionTitle = document.querySelector(".section-title");
    const videoTitle = document.querySelector(".video-title");

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
    { src: "imagenes/sombrero/torre264.jpeg", description: "Torre 264", week: 1 },
    { src: "imagenes/sombrero/trabajotorre264-265-antes.jpeg", description: "Antes de Limpieza Torre 264-265", week: 1 },
    { src: "imagenes/sombrero/trabajotorre264-265.jpeg", description: "Antes de Limpieza Torre 264", week: 1 },
    { src: "imagenes/sombrero/trabajotorre264-265-0.jpeg", description: "Inicio de Limpieza Torre 264-265", week: 1 },
    { src: "imagenes/sombrero/trabajotorre264-265-2.jpeg", description: "Inicio Torre 264", week: 1 },
    { src: "imagenes/sombrero/tramo264-265.jpeg", description: "Culminado Limpieza Torre 264-265", week: 2 },
    
    { src: "imagenes/sombrero/d4tapa.jpeg", description: "D4 Trabajando", week: 2 },
    { src: "imagenes/sombrero/torre264-265.jpeg", description: "Culminado Limpieza Torre 265-266", week: 2 },
    { src: "imagenes/sombrero/torre264-265-1.jpeg", description: "Culminado Limpieza Torre 265-266", week: 2 },
    
    { src: "imagenes/sombrero/torresmaquinas.jpeg", description: "Maquinaria en zona de trabajo", week: 2 },

];



// Fotos de mantenimiento organizadas por semana



// Añade aquí tus videos con descripciones
const videos = [
{ src: "videos/sombrero/torre265.mp4", description: "Cerca de Torre 265" , week: 1},
{ src: "videos/sombrero/tramo264-265.mp4", description: "Trabajo Tramo 264-265", week: 2 },
{ src: "videos/sombrero/torre265.mp4", description:"Trabajo Tramo 264-265", week: 2 },
{ src: "videos/sombrero/maquinas.mp4", description: "trabajando Maquinas 264-265", week: 2 },




// Añade más videos según sea necesario
];

    // Generar los botones de filtro dinámicamente
    const weeks = [...new Set(photos.map(photo => photo.week))];

    const createFilterButtons = () => {
        const allButton = document.createElement("button");
        allButton.textContent = "Todas las Semanas";
        allButton.setAttribute("data-week", "all");
        filterContainer.appendChild(allButton);

        weeks.forEach(week => {
            const button = document.createElement("button");
            button.textContent = `Semana ${week}`;
            button.setAttribute("data-week", week);
            filterContainer.appendChild(button);
        });
    };

    // Renderizar fotos filtradas por semana
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
        renderVideos(week);
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

    createFilterButtons();
    updateTitles("all");
    renderPhotos("all");
    renderVideos("all");
    addFilterEventListeners();
});

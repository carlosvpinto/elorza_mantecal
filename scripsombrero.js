document.addEventListener("DOMContentLoaded", () => {
    // Verifica que los elementos de la página existan antes de trabajar con ellos
    const photoGallery = document.querySelector(".photo-gallery");
    const videoGallery = document.querySelector(".video-gallery");

    if (!photoGallery || !videoGallery) {
        console.error("No se encontraron los contenedores en el DOM.");
        return; // Finaliza si faltan elementos clave
    }

    // Datos de las fotos específicas para la página de Sombrero
    const photos = [
        { src: "imagenes/sombrero/torre264.jpeg", description: "Limpieza Sombrero Torre 264" },
        { src: "imagenes/sombrero/trabajotorre264-265-antes.jpeg", description: "Torre 264 Antes del trabajo" },
        { src: "imagenes/sombrero/trabajotorre264-265-inicio.jpeg", description: "Inicio Limpieza Sombrero Torre 264" },
        { src: "imagenes/sombrero/trabajotorre264-265-0.jpeg", description: "Trabando entre Torre 264-265" },
        { src: "imagenes/sombrero/trabajotorre264-265-1.jpeg", description: "Trabando entre Torre 264-265" },
        { src: "imagenes/sombrero/trabajotorre264-265-2.jpeg", description: "Trabando entre Torre 264-265" },
        { src: "imagenes/sombrero/trabajotorre264-265-0.jpeg", description: "Limpieza Sombrero Torre 3" }
    ];

    // Datos de los videos
    const videos = [
        { src: "videos/sombrero_torre1.mp4", description: "Torre 1 - Mantenimiento" },
        { src: "videos/sombrero_torre2.mp4", description: "Torre 2 - Antes del mantenimiento" }
    ];

    // Poblar galería de fotos
    photos.forEach(photo => {
        const galleryItem = document.createElement("div");
        galleryItem.classList.add("photo-item");

        const img = document.createElement("img");
        img.src = photo.src;
        img.alt = photo.description;

        const desc = document.createElement("p");
        desc.textContent = photo.description;

        galleryItem.appendChild(img);
        galleryItem.appendChild(desc);
        photoGallery.appendChild(galleryItem);
    });

    // Poblar galería de videos
    videos.forEach(video => {
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
});

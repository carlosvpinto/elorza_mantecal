function initMap() {
    const coordinates = { lat: 8.099, lng: -69.835 }; // Coordenadas de ejemplo, ajusta según necesites
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: coordinates,
    });

    // Cargar el archivo KML local
    const kmlLayer = new google.maps.KmlLayer({
        url: window.location.origin + '/mapa/proyecto_elorza_mantecal.kml', // Ruta local al archivo KML
        map: map
    });

    new google.maps.Marker({
        position: coordinates,
        map: map,
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const photoGallery = document.querySelector(".photo-gallery");
    const videoGallery = document.querySelector(".video-gallery");
    const maintenanceGallery = document.querySelector(".maintenance-gallery");
   

    // Añade aquí tus 19 fotos con descripciones
    const photos = [
        { src: "imagenes/torre1.jpeg", description: "Limpieza Torre 1" },
        { src: "imagenes/torre2.jpeg", description: "Limpieza Torre 2" },
        { src: "imagenes/torre3.jpeg", description: "Limpieza Torre 3" },
        { src: "imagenes/torre4.jpeg", description: "Limpieza Torre 4" },
        { src: "imagenes/torre5.jpeg", description: "Limpieza Torre 5" },
        { src: "imagenes/torre6.jpeg", description: "Limpieza Torre 6" },
        { src: "imagenes/torre7.jpeg", description: "Limpieza Torre 7" },
        { src: "imagenes/torre8.jpeg", description: "Limpieza Torre 8" },
        { src: "imagenes/torre9.jpeg", description: "Limpieza Torre 9" },
        { src: "imagenes/torre10.jpeg", description: "Limpieza Torre 10" },
        { src: "imagenes/torre11.jpeg", description: "Limpieza Torre 11" },
        { src: "imagenes/torre12.jpeg", description: "Limpieza Torre 12" },
        { src: "imagenes/torre13.jpeg", description: "Limpieza Torre 13" },
        { src: "imagenes/torre14.jpeg", description: "Limpieza Torre 14" },
        { src: "imagenes/torre15.jpeg", description: "Limpieza Torre 15" },
        { src: "imagenes/torre16.jpeg", description: "Limpieza Torre 16" },
        { src: "imagenes/torre17.jpeg", description: "Limpieza Torre 17" },
        { src: "imagenes/torre18.jpeg", description: "Limpieza Torre 18" },
        { src: "imagenes/torre19.jpeg", description: "Limpieza Torre 19" },
        { src: "imagenes/torre20.jpeg", description: "Limpieza Torre 20 Negado el Acceso" },
        { src: "imagenes/torre21.jpeg", description: "Limpieza Torre 21" },
      
        { src: "imagenes/tramo20-21.jpeg", description: "Trabajando Tramo 20-21" }
    ];

 // Añade aquí tus fotos de tramos en mantenimiento
 const maintenancePhotos = [
    { src: "imagenes/tramo2-3.jpeg", description: "Tramo Limpiado 2-3" },
    { src: "imagenes/tramo4-7.jpeg", description: "Tramo limpiado 4-7" },
    { src: "imagenes/trabajando_torre10.jpeg", description: "Trabajando Torre 10" },
    { src: "imagenes/tramo 1-2.jpeg", description: "Mantenimiento Tramo 1-2" },
    { src: "imagenes/tramo2-3.jpeg", description: "Mantenimiento Tramo 2-3" },
    { src: "imagenes/tramo4-7.jpeg", description: "Mantenimiento Tramo 4-7" },
    { src: "imagenes/tramo5-6.jpeg", description: "Tramo 5-6 antes del Mantenimiento" },
    { src: "imagenes/tramo8-10.jpeg", description: "Tramo 8-10 antes del Mantenimiento" },
    { src: "imagenes/tramo10-11_problema.jpeg", description: "Tramo10-11 problema Mantenimiento" },
    { src: "imagenes/tramo11-12.jpeg", description: "Tramo 11-12 Antes del Mantenimiento" },
    { src: "imagenes/tramo12-13.jpeg", description: "Tramo 12-13 Antes del Mantenimiento" },
    { src: "imagenes/tramo14-15.jpeg", description: "Tramo 14-15 Antes del Mantenimiento" },
    { src: "imagenes/tramo20-21.jpeg", description: "Tramo 20-21 " },
    // Añade más fotos de tramos en mantenimiento según sea necesario
];

maintenancePhotos.forEach(photo => {
    const maintenanceItem = document.createElement("div");
    maintenanceItem.classList.add("maintenance-item");
    const img = document.createElement("img");
    img.src = photo.src;
    const desc = document.createElement("p");
    desc.textContent = photo.description;
    if (photo.src === "imagenes/tramo10-11_problema.jpeg") {
        desc.classList.add("red-text"); // Añadir clase para descripción en rojo
    }
    maintenanceItem.appendChild(img);
    maintenanceItem.appendChild(desc);
    maintenanceGallery.appendChild(maintenanceItem);
});
    

photos.forEach(photo => {
    const photoItem = document.createElement("div");
    photoItem.classList.add("photo-item");
    const img = document.createElement("img");
    img.src = photo.src;
    const desc = document.createElement("p");
    desc.textContent = photo.description;
    if (photo.src === "imagenes/torre20.jpeg") {
        desc.classList.add("red-text"); // Añadir clase para descripción en rojo
    }
    photoItem.appendChild(img);
    photoItem.appendChild(desc);
    photoGallery.appendChild(photoItem);
});

    // Añade aquí tus videos con descripciones
    const videos = [
        { src: "videos/torre97cerca.mp4", description: "Torre 97 fuera del Cronograma" },
        { src: "videos/torre97-98.mp4", description: "Tramo 97-98 Fuera del Cronograma" },
        { src: "videos/torre61-2.mp4", description: "Torre 61 Fuera del Cronograma" },
        { src: "videos/torre23-22.mp4", description: "Torre 23-22 Antes del Manteniento" },
        // Añade más videos según sea necesario
    ];

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

// Añade tu API Key de Google Maps aquí
const script = document.createElement('script');
script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDPBPt2gRYTn43C16J9o_bdda7R6AT6xVA&callback=initMap`;
script.async = true;
document.head.appendChild(script);

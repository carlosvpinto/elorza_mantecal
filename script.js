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
        { src: "imagenes/elorza/torre1.jpeg", description: "Limpieza Torre 1" },
        { src: "imagenes/elorza/torre2.jpeg", description: "Limpieza Torre 2" },
        { src: "imagenes/elorza/torre3.jpeg", description: "Limpieza Torre 3" },
        { src: "imagenes/elorza/torre4.jpeg", description: "Limpieza Torre 4" },
        { src: "imagenes/elorza/torre4limpiando.jpeg", description: "Limpieza Torre 4 Antes" },
        { src: "imagenes/elorza/torre5.jpeg", description: "Limpieza Torre 5" },
        { src: "imagenes/elorza/torre6.jpeg", description: "Limpieza Torre 6" },
        { src: "imagenes/elorza/torre7.jpeg", description: "Limpieza Torre 7" },
        { src: "imagenes/elorza/torre8.jpeg", description: "Limpieza Torre 8" },
        { src: "imagenes/elorza/torre9.jpeg", description: "Limpieza Torre 9" },
        { src: "imagenes/elorza/torre10.jpeg", description: "Limpieza Torre 10" },
        { src: "imagenes/elorza/torre11.jpeg", description: "Limpieza Torre 11" },
        { src: "imagenes/elorza/torre12.jpeg", description: "Limpieza Torre 12" },
        { src: "imagenes/elorza/torre13.jpeg", description: "Limpieza Torre 13" },
        { src: "imagenes/elorza/torre14.jpeg", description: "Limpieza Torre 14" },
        { src: "imagenes/elorza/torre15.jpeg", description: "Limpieza Torre 15" },
        { src: "imagenes/elorza/torre16.jpeg", description: "Limpieza Torre 16" },
        { src: "imagenes/elorza/torre17.jpeg", description: "Limpieza Torre 17" },
        { src: "imagenes/elorza/torre18.jpeg", description: "Limpieza Torre 18" },
        { src: "imagenes/elorza/torre19.jpeg", description: "Limpieza Torre 19" },
        { src: "imagenes/elorza/torre20.jpeg", description: "Limpieza Torre 20 Negado el Acceso" },
        { src: "imagenes/elorza/torre21.jpeg", description: "Limpieza Torre 21" },
        { src: "imagenes/elorza/torre22.jpeg", description: "Limpieza Torre 22" },
        { src: "imagenes/elorza/torre23.jpeg", description: "Limpieza Torre 23" },
        { src: "imagenes/elorza/torre24.jpeg", description: "Limpieza Torre 24" },
        { src: "imagenes/elorza/torre25.jpeg", description: "Limpieza Torre 25" },
        { src: "imagenes/elorza/torre26.jpeg", description: "Limpieza Torre 26" },
        { src: "imagenes/elorza/torre27.jpeg", description: "Limpieza Torre 27" },
        { src: "imagenes/elorza/torre28.jpeg", description: "Limpieza Torre 28" },
        { src: "imagenes/elorza/torre28-antes.jpeg", description: "Limpieza Torre 28 Antes de Limpieza" },
        { src: "imagenes/elorza/torre29.jpeg", description: "Limpieza Torre 29" },
        { src: "imagenes/elorza/torre29-antes.jpeg", description: "Limpieza Torre 29 Antes de Limpieza" },
       // { src: "imagenes/elorza/torre30.jpeg", description: "Limpieza Torre 30" },
       // { src: "imagenes/elorza/torre31.jpeg", description: "Limpieza Torre 31" },
       // { src: "imagenes/elorza/torre32.jpeg", description: "Limpieza Torre 32" },
       // { src: "imagenes/elorza/torre33.jpeg", description: "Limpieza Torre 33" },
       // { src: "imagenes/elorza/torre34.jpeg", description: "Limpieza Torre 34" },
        { src: "imagenes/elorza/torre35.jpeg", description: "Limpieza Torre 35" },
      
        { src: "imagenes/elorza/tramo20-21.jpeg", description: "Trabajando Tramo 20-21" }
    ];

 // Añade aquí tus fotos de tramos en mantenimiento
 const maintenancePhotos = [
    { src: "imagenes/elorza/tramo2-3.jpeg", description: "Tramo Limpiado 2-3" },
    { src: "imagenes/elorza/tramo4-7.jpeg", description: "Tramo limpiado 4-7" },
    { src: "imagenes/elorza/trabajando_torre10.jpeg", description: "Trabajando Torre 10" },
    { src: "imagenes/elorza/tramo 1-2.jpeg", description: "Mantenimiento Tramo 1-2" },
    { src: "imagenes/elorza/tramo2-3.jpeg", description: "Mantenimiento Tramo 2-3" },
    { src: "imagenes/elorza/tramo4-7.jpeg", description: "Mantenimiento Tramo 4-7" },
    { src: "imagenes/elorza/tramo5-6.jpeg", description: "Tramo 5-6 antes del Mantenimiento" },
    { src: "imagenes/elorza/tramo8-10.jpeg", description: "Tramo 8-10 antes del Mantenimiento" },
    { src: "imagenes/elorza/tramo10-11_problema.jpeg", description: "Tramo10-11 problema Mantenimiento" },
    { src: "imagenes/elorza/tramo11-12.jpeg", description: "Tramo 11-12 Antes del Mantenimiento" },
    { src: "imagenes/elorza/tramo12-13.jpeg", description: "Tramo 12-13 Antes del Mantenimiento" },
    { src: "imagenes/elorza/tramo14-15-1.jpeg", description: "Tramo 14-15 Antes del Mantenimiento" },
    { src: "imagenes/elorza/tramo20-21.jpeg", description: "Tramo 20-21 " },
    { src: "imagenes/elorza/tramo20-21-2.jpeg", description: "Tramo 20-21 Antes del Mantenimiento " },
    { src: "imagenes/elorza/tramo21-22.jpeg", description: "Tramo 21-22 Antes del Mantenimiento " },
    
    { src: "imagenes/elorza/tramo58-57.jpeg", description: "Tramo 58-57 Fuera del Cronograma" },
    { src: "imagenes/elorza/tramo62-61.jpeg", description: "Tramo 62-61 Fuera del Cronograma" },




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
        { src: "videos/torre61.mp4", description: "Torre 61 Fuera del Cronograma" },
        { src: "videos/torre23-22.mp4", description: "Torre 23-22 Antes del Manteniento" },
        { src: "videos/tramo58-59.mp4", description: "tramo58-59" },
        { src: "videos/tramo58-59.mp4", description: "tramo58-59" },
        { src: "videos/torre60-61.mp4", description: "tramo  60-61 Fuera del Cronograma" },
        { src: "videos/torre60-antes.mp4", description: "Torre 60 Fuera del Cronograma" },
        { src: "videos/torre61.mp4", description: "Torre 61 Fuera del Cronograma" },
        { src: "videos/torre63.mp4", description: "Torre 63 Fuera del Cronograma" },
        { src: "videos/tramo53-52.mp4", description: "Torre 53-52 Fuera del Cronograma" },
        { src: "videos/tramo53-52.mp4", description: "Torre 53-52 Fuera del Cronograma" },
        { src: "videos/tramo58-57.mp4", description: "Torre 58-57 Fuera del Cronograma" },
        { src: "videos/tramo58-59.mp4", description: "Torre 53-52 Fuera del Cronograma" },
        { src: "videos/tramo62-61.mp4", description: "Torre 62-61 Fuera del Cronograma" },
        { src: "videos/tramo62-63.mp4", description: "Torre 62-63 Fuera del Cronograma" },
        { src: "videos/tramo53-52.mp4", description: "Torre 53-52 Fuera del Cronograma" },
        
       
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

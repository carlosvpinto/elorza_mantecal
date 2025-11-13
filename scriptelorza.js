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


            { src: "imagenes/elorza/torre52.jpeg", description: "Torre 52" , week: 5},
            { src: "imagenes/elorza/torre53-a.jpeg", description: "Torre 53 Antes" , week: 5},
            { src: "imagenes/elorza/torre53.jpeg", description: "Torre 53" , week: 5},
            { src: "imagenes/elorza/torre54-a.jpeg", description: "Torre 54 Antes" , week: 5},
            { src: "imagenes/elorza/torre54.jpeg", description: "Torre 54" , week: 5},
        
            { src: "imagenes/elorza/torre55.jpeg", description: "Torre 55" , week: 5},
            { src: "imagenes/elorza/torre56-a.jpeg", description: "Torre 56 Antes" , week: 5},
            { src: "imagenes/elorza/torre56.jpeg", description: "Torre 56" , week: 5},
            { src: "imagenes/elorza/torre57.jpeg", description: "Torre 57" , week: 5},

            { src: "imagenes/elorza/torre57-a.jpeg", description: "Torre 57 Antes" , week: 5},
          
            { src: "imagenes/elorza/torre58.jpeg", description: "Torre 58" , week: 5},
            { src: "imagenes/elorza/torre59-a.jpeg", description: "Torre 59 Antes" , week: 5},
            { src: "imagenes/elorza/torre59.jpeg", description: "Torre 59" , week: 5},
            { src: "imagenes/elorza/torre60-a.jpeg", description: "Torre 60 Antes" , week: 5},
            { src: "imagenes/elorza/torre60.jpeg", description: "Torre 60" , week: 5},
       
            { src: "imagenes/elorza/torre61.jpeg", description: "Torre 61" , week: 5},
          
            { src: "imagenes/elorza/torre62.jpeg", description: "Torre 62" , week: 5},
            { src: "imagenes/elorza/torre63-a.jpeg", description: "Torre 63 Antes" , week: 5},
            { src: "imagenes/elorza/torre63.jpeg", description: "Torre 63" , week: 5},
            
            { src: "imagenes/elorza/torre64.jpeg", description: "Torre 64" , week: 5},
            { src: "imagenes/elorza/torre65-a.jpeg", description: "Torre 65 Antes" , week: 5},
            { src: "imagenes/elorza/torre65.jpeg", description:"Torre 65" , week :5 },
            { src: "imagenes/elorza/torre66-a.jpeg", description:"Torre 66 Antes" , week :5 },
            { src: "imagenes/elorza/torre66.jpeg", description: "Torre 66" , week: 5},
            { src: "imagenes/elorza/torre67-a.jpeg", description: "Torre 67 Antes" , week: 5},
            { src: "imagenes/elorza/torre67.jpeg", description: "Torre 67" , week: 5},
            { src: "imagenes/elorza/torre68-a.jpeg", description: "Torre 68 Antes" , week: 5},
            { src: "imagenes/elorza/torre68.jpeg", description: "Torre 68" , week: 5},
            { src: "imagenes/elorza/torre69-a.jpeg", description: "Torre 69 Antes" , week: 5},
            { src: "imagenes/elorza/torre69.jpeg", description: "Torre 69" , week: 5},
          
            { src: "imagenes/elorza/torre70.jpeg", description:"Torre 70" , week :5 },
           


            { src: "imagenes/elorza/torre74-a.jpeg", description:"Torre 74 Antes" , week :6 },
            { src: "imagenes/elorza/torre74.jpeg", description:"Torre 74" , week :6 },
         
            { src: "imagenes/elorza/torre75.jpeg", description:"Torre 75" , week :6 },
          
            { src: "imagenes/elorza/torre76.jpeg", description:"Torre 76" , week :6 },
         
            { src: "imagenes/elorza/torre77.jpeg", description:"Torre 77" , week :6 },
            { src: "imagenes/elorza/torre78-a.jpeg", description:"Torre 78 Antes" , week :6 },
            { src: "imagenes/elorza/torre78.jpeg", description:"Torre 78" , week :6 },
            { src: "imagenes/elorza/torre79-a.jpeg", description:"Torre 79 Antes" , week :6 },
            { src: "imagenes/elorza/torre79.jpeg", description:"Torre 79" , week :6 },
           
            { src: "imagenes/elorza/torre81-a.jpeg", description:"Torre 81 Antes" , week :6 },
            { src: "imagenes/elorza/torre81.jpeg", description:"Torre 81" , week :6 },
            { src: "imagenes/elorza/torre82-a.jpeg", description:"Torre 82 Antes" , week :7 },
            { src: "imagenes/elorza/torre82.jpeg", description:"Torre 82" , week :7 },
            { src: "imagenes/elorza/torre83-a.jpeg", description:"Torre 83 Antes" , week :7 },
            { src: "imagenes/elorza/torre83.jpeg", description:"Torre 83" , week :7 },
            { src: "imagenes/elorza/torre84-a.jpeg", description:"Torre 84 Antes" , week :7 },
            { src: "imagenes/elorza/torre84.jpeg", description:"Torre 84" , week :7 },
      
            { src: "imagenes/elorza/torre85.jpeg", description:"Torre 85" , week :7 },
            { src: "imagenes/elorza/torre86-a.jpeg", description:"Torre 86 Antes" , week :7 },
            { src: "imagenes/elorza/torre86.jpeg", description:"Torre 86" , week :7 },
            { src: "imagenes/elorza/torre87-a.jpeg", description:"Torre 87 Antes" , week :7 },
            { src: "imagenes/elorza/torre87.jpeg", description:"Torre 87" , week :7 },
            { src: "imagenes/elorza/torre88-a.jpeg", description:"Torre 88 Antes" , week :7 },
            { src: "imagenes/elorza/torre88.jpeg", description:"Torre 88" , week :7 },
          
      
            { src: "imagenes/elorza/torre90.jpeg", description:"Torre 90" , week :7 },
            { src: "imagenes/elorza/torre91-a.jpeg", description:"Torre 91 Antes" , week :7 },
            { src: "imagenes/elorza/torre91.jpeg", description:"Torre 91" , week :8 },
            { src: "imagenes/elorza/torre92-a.jpeg", description:"Torre 92 Antes" , week :8 },
            { src: "imagenes/elorza/torre92.jpeg", description:"Torre 92" , week :8 },
            { src: "imagenes/elorza/torre93-a.jpeg", description:"Torre 93 Antes" , week :8 },
            { src: "imagenes/elorza/torre93.jpeg", description:"Torre 93" , week :8 },
           
            { src: "imagenes/elorza/torre95-a.jpeg", description:"Torre 95 Antes" , week :8 },
            { src: "imagenes/elorza/torre95.jpeg", description:"Torre 95" , week :8 },
          
            { src: "imagenes/elorza/torre96.jpeg", description:"Torre 96" , week :8 },
      
            
            { src: "imagenes/elorza/torre98-a.jpeg", description:"Torre 98 Antes" , week :8 },
            { src: "imagenes/elorza/torre98.jpeg", description:"Torre 98" , week :8 },
        
            { src: "imagenes/elorza/torre99-a.jpeg", description:"Torre 99 Antes" , week :9 },
            { src: "imagenes/elorza/torre99.jpeg", description:"Torre 99" , week :9 },
            { src: "imagenes/elorza/torre100-a.jpeg", description:"Torre 100 Antes" , week :9 },
            { src: "imagenes/elorza/torre100.jpeg", description:"Torre 100" , week :9 },
          
            { src: "imagenes/elorza/torre101.jpeg", description:"Torre 101" , week :9 },
            { src: "imagenes/elorza/torre102-a.jpeg", description:"Torre 102 Antes" , week :9 },
            { src: "imagenes/elorza/torre102.jpeg", description:"Torre 102" , week :9 },
            { src: "imagenes/elorza/torre103-a.jpeg", description:"Torre 103 Antes" , week :9 },
            { src: "imagenes/elorza/torre103.jpeg", description:"Torre 103" , week :9 },
         
            { src: "imagenes/elorza/torre105-a.jpeg", description:"Torre 105 Antes" , week :9 },
            { src: "imagenes/elorza/torre105.jpeg", description:"Torre 105" , week :9 },
            { src: "imagenes/elorza/torre106-a.jpeg", description:"Torre 106 Antes" , week :9 },
            { src: "imagenes/elorza/torre106.jpeg", description:"Torre 106" , week :9 },
            { src: "imagenes/elorza/torre107-a.jpeg", description:"Torre 107 Antes" , week :9 },
            { src: "imagenes/elorza/torre107.jpeg", description:"Torre 107" , week :9 },
            { src: "imagenes/elorza/torre108-a.jpeg", description:"Torre 108 Antes" , week :9 },
            { src: "imagenes/elorza/torre108.jpeg", description:"Torre 108" , week :9 },
            { src: "imagenes/elorza/torre109-a.jpeg", description:"Torre 109 Antes" , week :9 },
            { src: "imagenes/elorza/torre109.jpeg", description:"Torre 109" , week :9 },
           
            { src: "imagenes/elorza/torre112-a.jpeg", description:"Torre 112 Antes" , week :9 },
            { src: "imagenes/elorza/torre112.jpeg", description:"Torre 112" , week :9 },
            { src: "imagenes/elorza/torre113-a.jpeg", description:"Torre 113 Antes" , week :9 },
            { src: "imagenes/elorza/torre113.jpeg", description:"Torre 113" , week :9 },
            { src: "imagenes/elorza/torre114-a.jpeg", description:"Torre 114 Antes" , week :9 },
            { src: "imagenes/elorza/torre114.jpeg", description:"Torre 114" , week :9 },
            { src: "imagenes/elorza/torre115-a.jpeg", description:"Torre 115 Antes" , week :9 },
            { src: "imagenes/elorza/torre115.jpeg", description:"Torre 115" , week :9 },
            { src: "imagenes/elorza/torre116-a.jpeg", description:"Torre 116 Antes" , week :9 },
            { src: "imagenes/elorza/torre116.jpeg", description:"Torre 116" , week :9 },
            
            { src: "imagenes/elorza/torre117.jpeg", description:"Torre 117" , week :9 },
            { src: "imagenes/elorza/torre118-a.jpeg", description:"Torre 118 Antes" , week :9 },
            { src: "imagenes/elorza/torre118.jpeg", description:"Torre 118" , week :9 },

            //FOTOS TORRES DESPUES DEL INVERNO
            { src: "imagenes/elorza/torre110.jpeg", description:"Torre 110" , week :10 },
            { src: "imagenes/elorza/torre110-a.jpeg", description:"Torre 110 Antes" , week :10 },
            { src: "imagenes/elorza/torre118.jpeg", description:"Torre 118" , week :10 },
           // { src: "imagenes/elorza/torre119-a.jpeg", description:"Torre 119 Antes" , week :11 },
            { src: "imagenes/elorza/torre119.jpeg", description:"Torre 119" , week :10 },
            { src: "imagenes/elorza/torre120-a.jpeg", description:"Torre 120 Antes" , week :10 },
            { src: "imagenes/elorza/torre120.jpeg", description:"Torre 120" , week :10 },
            { src: "imagenes/elorza/torre121-a.jpeg", description:"Torre 121 Antes" , week :10 },
            { src: "imagenes/elorza/torre121.jpeg", description:"Torre 121" , week :10 },
            { src: "imagenes/elorza/torre122-a.jpeg", description:"Torre 122 Antes" , week :10 },
           // { src: "imagenes/elorza/torre122.jpeg", description:"Torre 122" , week :12 },
            { src: "imagenes/elorza/torre123-a.jpeg", description:"Torre 123 Antes" , week :10 },
            { src: "imagenes/elorza/torre123.jpeg", description:"Torre 123" , week :10 },
            { src: "imagenes/elorza/torre124-a.jpeg", description:"Torre 124 Antes" , week :11 },
            { src: "imagenes/elorza/torre124.jpeg", description:"Torre 124" , week :11 },
            { src: "imagenes/elorza/torre125-a.jpeg", description:"Torre 125 Antes" , week :11 },
            { src: "imagenes/elorza/torre125.jpeg", description:"Torre 125" , week :11 },
            { src: "imagenes/elorza/torre126-a.jpeg", description:"Torre 126 Antes" , week :11 },
            { src: "imagenes/elorza/torre126.jpeg", description:"Torre 126" , week :11 },
            { src: "imagenes/elorza/torre127-a.jpeg", description:"Torre 127 Antes" , week :11 },
            { src: "imagenes/elorza/torre127.jpeg", description:"Torre 127" , week :11 },
            { src: "imagenes/elorza/torre128-a.jpeg", description:"Torre 128 Antes" , week :12 },
            { src: "imagenes/elorza/torre128.jpeg", description:"Torre 128" , week :12 },
            { src: "imagenes/elorza/torre129-a.jpeg", description:"Torre 129 Antes" , week :12 },
            { src: "imagenes/elorza/torre129.jpeg", description:"Torre 129" , week :12 },
            { src: "imagenes/elorza/torre130-a.jpeg", description:"Torre 130 Antes" , week :12 },
            { src: "imagenes/elorza/torre130.jpeg", description:"Torre 130" , week :12 },
            { src: "imagenes/elorza/torre131-a.jpeg", description:"Torre 131 Antes" , week :12 },   
            { src: "imagenes/elorza/torre131.jpeg", description:"Torre 131" , week :12 },
            { src: "imagenes/elorza/torre132-a.jpeg", description:"Torre 132 Antes" , week :12 },
            { src: "imagenes/elorza/torre132.jpeg", description:"Torre 132" , week :12},    
             { src: "imagenes/elorza/torre133-a.jpeg", description:"Torre 133 Antes" , week :12 },
            { src: "imagenes/elorza/torre133.jpeg", description:"Torre 133" , week :12 },
            { src: "imagenes/elorza/torre134-a.jpeg", description:"Torre 134 Antes" , week :12 },
            { src: "imagenes/elorza/torre134.jpeg", description:"Fuera del Cronograma" , week :12 },
            { src: "imagenes/elorza/torre135-a.jpeg", description:"Fuera del Cronograma" , week :12 },
           
            { src: "imagenes/elorza/torre136-a.jpeg", description:"Torre 136 Antes" , week :12 },   
            { src: "imagenes/elorza/torre136.jpeg", description:"Torre 136" , week :12 },
           // { src: "imagenes/elorza/torre137-a.jpeg", description:"Torre 137 Antes" , week :12 },
            { src: "imagenes/elorza/torre137.jpeg", description:"Torre 137 Dentro del Agua" , week :12},   
             { src: "imagenes/elorza/torre150-a.jpeg", description:"Torre 150 Antes" , week :12 },
            { src: "imagenes/elorza/torre150.jpeg", description:"Torre 150" , week :12 },
            { src: "imagenes/elorza/torre151-a.jpeg", description:"Torre 151 Antes" , week :12 },   
            { src: "imagenes/elorza/torre151.jpeg", description:"Torre 151" , week :12 },
            { src: "imagenes/elorza/torre152-a.jpeg", description:"Torre 152 Antes" , week :12 },
            { src: "imagenes/elorza/torre152.jpeg", description:"Torre 152" , week :12},
             { src: "imagenes/elorza/torre153-a.jpeg", description:"Torre 153 Antes" , week :12 },
            { src: "imagenes/elorza/torre153.jpeg", description:"Torre 153" , week :12 },
            { src: "imagenes/elorza/torre154-a.jpeg", description:"Torre 154 Antes" , week :12 },   
            { src: "imagenes/elorza/torre154.jpeg", description:"Torre 154" , week :12 },
            { src: "imagenes/elorza/torre155-a.jpeg", description:"Torre 155 Antes" , week :12 },
            { src: "imagenes/elorza/torre155.jpeg", description:"Torre 155" , week :12},    
             { src: "imagenes/elorza/torre156-a.jpeg", description:"Torre 156 Antes" , week :12 },
            { src: "imagenes/elorza/torre156.jpeg", description:"Torre 156" , week :12 },
            { src: "imagenes/elorza/torre157-a.jpeg", description:"Torre 157 Antes" , week :13},   
            { src: "imagenes/elorza/torre157.jpeg", description:"Torre 157" , week :13 },
             { src: "imagenes/elorza/torre167-a.jpeg", description:"Torre 167 Antes" , week :13 },
            { src: "imagenes/elorza/torre168.jpeg", description:"Torre 167" , week :13},    
             { src: "imagenes/elorza/torre169-a.jpeg", description:"Torre 169 Antes" , week :13 },
            { src: "imagenes/elorza/torre169.jpeg", description:"Torre 169" , week :13 },
           
             
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
        { src: "imagenes/elorza/tramo52-53-1.jpeg", description: "Tramo 52-53 Durante el mantenimiento" , week: 5},
        { src: "imagenes/elorza/tramo52-53.jpeg", description: "Tramo 52-53 Despues del Mantenimiento" , week: 5},
        { src: "imagenes/elorza/tramo74-75.jpeg", description: "Torre 74-75 En trabajos de Mantenimiento", week: 6 },
        { src: "imagenes/elorza/tramo75-76.jpeg", description: "Torre 75-76 En trabajos de Mantenimiento", week: 6 },
        { src: "imagenes/elorza/tramo76-77.jpeg", description: "Torre 76-77 En trabajos de Mantenimiento" , week: 6},
        { src: "imagenes/elorza/tramo77-78.jpeg", description: "Torre 77-78 En trabajos de Mantenimiento", week: 6 },
        { src: "imagenes/elorza/tramo78-79.jpeg", description: "Torre 78-79 En trabajos de Mantenimiento" , week: 6},
        { src: "imagenes/elorza/tramo79-80.jpeg", description: "Torre 79-80 En trabajos de Mantenimiento" , week: 6},
        { src: "imagenes/elorza/tramo81-82.jpeg", description: "Torre 81-82 En trabajos de Mantenimiento" , week: 6},
        { src: "imagenes/elorza/tramo82-83.jpeg", description: "Torre 82-83 En trabajos de Mantenimiento" , week: 7},
        { src: "imagenes/elorza/tramo83-84.jpeg", description: "Torre 83-84 En trabajos de Mantenimiento" , week: 7},
        { src: "imagenes/elorza/tramo84-85.jpeg", description: "Torre 84-85 En trabajos de Mantenimiento" , week: 7},
        { src: "imagenes/elorza/tramo85-86.jpeg", description: "Torre 85-86 En trabajos de Mantenimiento" , week: 7},
        { src: "imagenes/elorza/tramo86-87.jpeg", description: "Torre 86-87 En trabajos de Mantenimiento" , week: 7},
        { src: "imagenes/elorza/tramo87-88.jpeg", description: "Torre 87-88 En trabajos de Mantenimiento" , week: 7},
        { src: "imagenes/elorza/tramo88-89.jpeg", description: "Torre 88-89 En trabajos de Mantenimiento" , week: 7},
        { src: "imagenes/elorza/tramo90-91.jpeg", description:"Torre 90-91 En trabajos de Mantenimiento" , week :7 },
        { src: "imagenes/elorza/tramo91-92.jpeg", description:"Torre 91-92 En trabajos de Mantenimiento" , week :8 },
        { src: "imagenes/elorza/tramo92-93.jpeg", description:"Torre 92-93 En trabajos de Mantenimiento" , week :8 },
        
        { src: "imagenes/elorza/tramo95-96.jpeg", description:"Torre 95-96 En trabajos de Mantenimiento" , week :8 },
        { src: "imagenes/elorza/tramo96-97.jpeg", description:"Torre 96-97 En trabajos de Mantenimiento" , week :8 },
        { src: "imagenes/elorza/tramo98-99.jpeg", description:"Torre 98-99 En trabajos de Mantenimiento" , week :8 },
        { src: "imagenes/elorza/tramo99-100.jpeg", description:"Torre 99-100 En trabajos de Mantenimiento" , week :9 },
        { src: "imagenes/elorza/tramo100-101.jpeg", description:"Torre 100-101 En trabajos de Mantenimiento" , week :9 },
       
        { src: "imagenes/elorza/tramo103-104.jpeg", description:"Torre 103-104 En trabajos de Mantenimiento" , week :9 },
     
        { src: "imagenes/elorza/tramo105-106.jpeg", description:"Torre 105-106 En trabajos de Mantenimiento" , week :9 },
       
        
        { src: "imagenes/elorza/tramo112-113.jpeg", description:"Torre 112-113 En trabajos de Mantenimiento" , week :9 },
        { src: "imagenes/elorza/tramo113-114.jpeg", description:"Torre 113-114 En trabajos de Mantenimiento" , week :9 },
        { src: "imagenes/elorza/tramo114-115.jpeg", description:"Torre 114-115 En trabajos de Mantenimiento" , week :9 },
        { src: "imagenes/elorza/tramo115-116.jpeg", description:"Torre 115-116 En trabajos de Mantenimiento" , week :9 },

        //despues del invierno****************************
        { src: "imagenes/elorza/tramo100-101c.jpeg", description:"Tramo 100-101 Culminacion tramo 100-101" , week :10 },
        { src: "imagenes/elorza/tramo100-101c2.jpeg", description:"Tramo 100-101 Culminacion tramo 100-101" , week :10 },
        { src: "imagenes/elorza/tramo114-115.jpeg", description:"Torre 114-115 En trabajos de Mantenimiento" , week :10 },
        { src: "imagenes/elorza/tramo115-116.jpeg", description:"Torre 115-116 En trabajos de Mantenimiento" , week :10 },
        { src: "imagenes/elorza/tramo119-120-a.jpeg", description:"Torre 119-120 En trabajos de Mantenimiento" , week :10 },
        { src: "imagenes/elorza/tramo119-120.jpeg", description:"Torre 119-120 En trabajos de Mantenimiento" , week :10 },
        { src: "imagenes/elorza/tramo120-121.jpeg", description:"Torre 120-121 En trabajos de Mantenimiento" , week :10 },
        { src: "imagenes/elorza/tramo121-122a.jpeg", description:"Torre 121-122 En trabajos de Mantenimiento" , week :10 },
        { src: "imagenes/elorza/tramo121-122.jpeg", description:"Torre 121-122 En trabajos de Mantenimiento" , week :10 },
        { src: "imagenes/elorza/tramo123-124a.jpeg", description:"Torre 123-124 En trabajos de Mantenimiento" , week :10 },
        { src: "imagenes/elorza/tramo123-124.jpeg", description:"Torre 123-124 En trabajos de Mantenimiento" , week :11 },
        { src: "imagenes/elorza/tramo124-125.jpeg", description:"Torre 124-125 En trabajos de Mantenimiento" , week :11 },
        { src: "imagenes/elorza/tramo125-126.jpeg", description:"Torre 125-126 En trabajos de Mantenimiento" , week :11 },
        { src: "imagenes/elorza/tramo126-127.jpeg", description:"Torre 126-127 En trabajos de Mantenimiento" , week :12 },
        { src: "imagenes/elorza/tramo129-130.jpeg", description:"Torre 129-130 En trabajos de Mantenimiento" , week :12 },
        
       // { src: "imagenes/elorza/tramo131-132.jpeg", description:"Torre 131-132 En trabajos de Mantenimiento" , week :12 },
        { src: "imagenes/elorza/tramo132-133.jpeg", description:"Torre 132-133 En trabajos de Mantenimiento" , week :12 },
        { src: "imagenes/elorza/tramo135-136.jpeg", description:"Torre 135-136 En trabajos de Mantenimiento" , week :12 },
        //{ src: "imagenes/elorza/tramo136-137.jpeg", description:"Torre 136-137 En trabajos de Mantenimiento" , week :12 },
      //{ src: "imagenes/elorza/tramo137-138.jpeg", description:"Torre 137-138 En trabajos de Mantenimiento" , week :12 },
        { src: "imagenes/elorza/tramo152-153.jpeg", description:"Torre 152-153 En trabajos de Mantenimiento" , week :13 },
        { src: "imagenes/elorza/tramo154-155.jpeg", description:"Torre 154-155 En trabajos de Mantenimiento" , week :13 },
        { src: "imagenes/elorza/tramo156-157.jpeg", description:"Torre 156-157 En trabajos de Mantenimiento" , week :13 },
        { src: "imagenes/elorza/tramo167-168.jpeg", description:"Torre 167-168 En trabajos de Mantenimiento" , week :13 },
        { src: "imagenes/elorza/tramo169-170.jpeg", description:"Torre 169-170 En trabajos de Mantenimiento" , week :13 },
        
       
        
    
    
    
    
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
        { src: "videos/elorza/tramo53-52.jpeg", description: "Torre 53-52 Fuera del Cronograma" , week: 1},
        { src: "videos/elorza/tramo53-52.jpeg", description: "Torre 53-52 Fuera del Cronograma", week: 1 },
        { src: "videos/elorza/tramo58-57.jpeg", description: "Torre 58-57 Fuera del Cronograma", week: 1 },
        { src: "videos/elorza/tramo58-59.jpeg", description: "Torre 53-52 Fuera del Cronograma", week: 1 },
        { src: "videos/elorza/tramo62-61.jpeg", description: "Torre 62-61 Fuera del Cronograma", week: 3 },
        { src: "videos/elorza/tramo62-63.jpeg", description: "Torre 62-63 Fuera del Cronograma", week: 2 },
        { src: "videos/elorza/tramo53-52.jpeg", description: "Torre 53-52 Fuera del Cronograma" , week: 2},
       
       
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

    // Ordenar las semanas numéricamente antes de crear los botones
    const sortedWeeks = weeks.sort((a, b) => a - b);

    // Botones para cada semana
    sortedWeeks.forEach(week => {
        const button = document.createElement("button");
        button.textContent = `Semana ${week}`;
        button.setAttribute("data-week", week);

        // ===== INICIO DEL CAMBIO CLAVE =====
        // Si la semana es 10 o mayor, añade la clase 'reinicio'
        if (week >= 10) {
            button.classList.add("reinicio");
        }
        // ===== FIN DEL CAMBIO CLAVE =====

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

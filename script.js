function upDate(previewPic) {
    // Récupérer le div grandeImage
    const image = document.getElementById('image');
    
    // Changer le texte du div
    image.innerHTML = previewPic.alt;
    
    // Changer l'image de fond avec l'URL de l'image cliquée
    image.style.backgroundImage = "url('" + previewPic.src + "')";
}

function unDo() {
    // Récupérer le div grandeImage
    const image = document.getElementById('image');
    
    // Remettre le texte original
    image.innerHTML = "Hover over an image below to display here.";
    
    // Enlever l'image de fond
    image.style.backgroundImage = "none";
}
function toggleBoite() {
    let boite = document.getElementById('article');

    console.log(boite);

    // Si elle est visible, on la masque
    if (boite.style.display === 'none') {
        boite.style.display = 'block';
    } else {
        boite.style.display = 'none';
    }
}
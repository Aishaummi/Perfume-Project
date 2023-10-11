const uri = 'https://perfumes-project.onrender.com' // the server url

const token = window.localStorage.getItem('token')
const main = document.querySelector('main')

if (token) {    // ensures only authenticated users can add a new blog
    const EXPLOREMORE = document.createElement('a')
    EXPLOREMORE.className = 'EXPLOREMORE'
    EXPLOREMORE.href = 'index.html'
    EXPLOREMORE.innerText = 'EXPLOREMORE'
    main.appendChild(EXPLOREMORE)
}

let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    const slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000);
}

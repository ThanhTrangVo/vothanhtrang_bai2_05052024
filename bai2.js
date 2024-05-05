var images = document.querySelectorAll('.image img')
var iconClose = document.querySelector('.close')
var btnPrev = document.querySelector('.prev')
var btnNext = document.querySelector('.next')
var galleryImg = document.querySelector('.gallery-inner img')
var gallery = document.querySelector('.gallery')

var currentIndex = 0;

function showGallery() {
    // display gallery
    if(currentIndex == 0) {
        btnPrev.classList.add('hide')
    } else {
        btnPrev.classList.remove('hide')
    }
    if(currentIndex == images.length - 1) {
        btnNext.classList.add('hide')
    } else {
        btnNext.classList.remove('hide')
    }
    galleryImg.src = images[currentIndex].src
    gallery.classList.add('show')
}

images.forEach((item, index) => {
    item.addEventListener('click', function() {
        currentIndex = index
        showGallery()
    })
})

iconClose.addEventListener('click', function() {
    gallery.classList.remove('show')
})

document.addEventListener('keydown', function(e) {
    if(e.keyCode == 27) {
        gallery.classList.remove('show')
    }
})

btnPrev.addEventListener('click', function() {
    if(currentIndex > 0) {
        currentIndex--
        showGallery()
    }
})

btnNext.addEventListener('click', function() {
    if(currentIndex < images.length - 1) {
        currentIndex++
        showGallery()
    }
})

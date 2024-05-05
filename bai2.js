
var images =  document.querySelectorAll('.image img');
var prev = document.querySelector('.prev');
var next = document.querySelector('.next');
var close = document.querySelector('.close');
var galleryImg = document.querySelector('.gallery_inner img');
var gallery = document.querySelector('.gallery');
var currentIndex = 0;





function showGallery() {

    if (currentIndex == 0) {
        gallery.classList.add('show');
    }
    else{
        gallery.classList.remove('show');

    }
    if (currentIndex == images.length -1) {
        gallery.classList.add('show');
    }
    else{
        gallery.classList.remove('show');
    }
}
images.forEach((item, index) => {
    item.addEventListener('click', function() {
      currentIndex = index;
      showGallery();
    });
  });

//khi user click nút X
close.addEventListener('click', function() {
    gallery.classList.remove('show')
})

document.addEventListener('keydown', function(){
    if (e.keyCode ==27) {
        gallery.classList.remove('show')
    }
})



//click nút prev
prev.addEventListener('click', function () { 
    if (currentIndex > 0) {
        currentIndex--;
        showGallery();
    };
});
//click nút next
next.addEventListener('click', function() {
    if (currentIndex < images.length -1) {
        currentIndex++;
        showGallery();
    }
});





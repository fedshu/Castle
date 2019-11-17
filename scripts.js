let menu = document.querySelector(".menu");
let overlay = document.querySelector(".overlay");
let a = document.querySelectorAll("nav a");

menu.addEventListener('click', () => {   
    menu.classList.toggle("active");
    overlay.classList.toggle("menu_open");    
});

a.forEach(e => {
    e.addEventListener('click', () => {
        menu.classList.remove("active");
        overlay.classList.remove("menu_open"); 
    });
});

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.querySelectorAll(".slide");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
slides[slideIndex-1].style.display = "block";
}

ymaps.ready(init);

function init(){
    
  var myMap = new ymaps.Map("map", {
    center: [52.76560496, 25.12168606],
    zoom: 11,
  }, {
    searchControlProvider: 'yandex#search'
  });

  ymaps.geocode('Коссово', {
    results: 1
  }).then(function(res) {
    let firstGeoObject = res.geoObjects.get(0);

    firstGeoObject.options.set('preset', 'islands#darkBlueDotIconWithCaption');
    firstGeoObject.properties.set('iconCaption', firstGeoObject.getAddressLine());

    myMap.geoObjects.add(firstGeoObject);

  });
}
function toggleMenu () {
    var menuList = blossom.get('#menu-list');
    var toggleMenu = blossom.get('#toggle-menu');
    menuList.hasClass('show-menu') ? menuList.removeClass('show-menu') : menuList.addClass('show-menu');
    toggleMenu.hasClass('toggle-close') ? toggleMenu.removeClass('toggle-close') : toggleMenu.addClass('toggle-close');
}

function smoothScroll(event, id) {
    blossom.get('#'+id).scrollTo(event.layerY, 300);
}

blossom.get('#toggle-menu').on('click', toggleMenu);

(function(){

    var parallax = document.querySelectorAll(".parallax"),
        speed = 0.5;

    window.onscroll = function(){
        [].slice.call(parallax).forEach(function(el,i){
            if(el.clientHeight >= window.pageYOffset){

                var windowYOffset = window.pageYOffset,
                    elBackgroundPos = "50% -" + (windowYOffset * speed) + "px";

                el.style.backgroundPosition = elBackgroundPos;
            }
        });
    };

})();

function initMap() {
    var mapDiv = document.getElementById('map-canvas');
    var map = new google.maps.Map(mapDiv, {
        center: {lat: 12.9542946, lng: 77.4908521},
        zoom: 11
    });
}

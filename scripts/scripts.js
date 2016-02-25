function toggleMenu () {
    var menuList = blossom.get('#menu-list');
    var toggleMenu = blossom.get('#toggle-menu');
    menuList.hasClass('show-menu') ? menuList.removeClass('show-menu') : menuList.addClass('show-menu');
    toggleMenu.hasClass('toggle-close') ? toggleMenu.removeClass('toggle-close') : toggleMenu.addClass('toggle-close');
}

function smoothScroll(id) {
    blossom.get('#'+id).scrollTo(600);
}

blossom.get('#toggle-menu').on('click', toggleMenu);



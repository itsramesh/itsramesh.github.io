function toggleMenu (event) {
    var menuList = blossom.get('#menu-list');
    var toggleMenu = blossom.get('#toggle-menu');
    menuList.hasClass('show-menu') ? menuList.removeClass('show-menu') : menuList.addClass('show-menu');
    toggleMenu.hasClass('toggle-close') ? toggleMenu.removeClass('toggle-close') : toggleMenu.addClass('toggle-close');
}

function scrollTo(element, to, duration) {
    if (duration < 0) return;
    var difference = to - element.scrollTop;
    var perTick = difference / duration * 10;

    setTimeout(function() {
        element.scrollTop = element.scrollTop + perTick;
        if (element.scrollTop === to) return;
        scrollTo(element, to, duration - 10);
    }, 10);
}

function smoothScroll(id) {
    var element = blossom.get('#'+id);
    scrollTo(document.body, element[0].offsetTop, 600);
}

blossom.get('#toggle-menu').on('click', toggleMenu);
/*
blossom.get('#home').on('click', smoothScroll);
blossom.get('#about').on('click', smoothScroll);*/



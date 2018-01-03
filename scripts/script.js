window.onload = function () {
    $(".button-collapse").sideNav();
    $('.parallax').parallax();

    var scrolled;
    var timer;

    document.onscroll = function () {
        var scrolledFrom = window.pageYOffset;

        if (scrolledFrom > 300) {
            document.getElementById('top').style.opacity = 1;
        }
        else{
            document.getElementById('top').style.opacity = 0;
        }
    }




    $('a[href^="#"]').bind('click.smoothscroll', function (e) {
        e.preventDefault();
    
        var target = this.hash,
            $target = $(target);
    
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 500, 'swing', function () {
            window.location.hash = target;
        });
    });
}
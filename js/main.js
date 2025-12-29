(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('.navbar').addClass('position-fixed bg-dark shadow-sm');
        } else {
            $('.navbar').removeClass('position-fixed bg-dark shadow-sm');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonials carousel
    $('.testimonial-carousel').owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        loop: true,
        nav: false,
        dots: true,
        items: 1,
        dotsData: true,
    });
    
    

    
})(jQuery);

function closeProjectModal() {
    const modal = document.getElementById("projectModal");
    if (modal) {
        modal.style.opacity = "0"; // Yumuşak geçiş için
        setTimeout(() => {
            modal.style.display = "none";
            // Sayfa kaydırmayı kesin olarak geri açıyoruz
            document.body.style.overflow = "visible";
            document.documentElement.style.overflow = "visible";
        }, 500); // Yarım saniye sonra tamamen kaldır
    }
}

// Site ilk açıldığında çalışacak kısım
window.addEventListener('load', function() {
    // Sadece modal varsa kaydırmayı durdur
    if (document.getElementById("projectModal")) {
        document.body.style.overflow = "hidden";
    }
});


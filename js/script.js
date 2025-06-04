$(document).ready(function () {
    // Troca de abas de mídia
    $('.media-tab').on('click', function () {
        const mediaType = $(this).data('media');

        $('.media-tab').removeClass('active');
        $(this).addClass('active');

        $('.media-slider').removeClass('active');
        $('#' + mediaType + '-slider').addClass('active');
    });

    // Magnific Popup
    $(".media-slider .bxslider").magnificPopup({
        delegate: "a",
        type: "image",
        closeOnContentClick: false,
        closeBtnInside: false,
        mainClass: "mfp-with-zoom mfp-img-mobile",
        image: {
            verticalFit: true,
        },
        gallery: {
            enabled: true,
        },
        zoom: {
            enabled: true,
            duration: 300,
            opener: function (element) {
                return element.find("img");
            },
        },
    });

    // Botão de menu mobile
    $('#mobile-menu-toggle').on('click', function () {
        $('#menu').toggleClass('active');
    });
});
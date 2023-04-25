$(document).ready(function() {
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll > 100) $(".netflix-navbar").css("background", "#0C0C0C");
        else $(".netflix-navbar").css("background", "transparent");
    });
});

//# sourceMappingURL=index.ac3b4b31.js.map

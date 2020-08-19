count = 10;

$(document).ready(function () {

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        $(".cont").css("display", "none");
    } else {
        $(document).on("scroll", function () {

            var pixels = $(document).scrollTop()
            var zoom = pixels + 14

            $("main").css("font-size", zoom)
            $(".dot").css("height", zoom).css("width", zoom).css("border-radius", zoom)
        });

        for (i = 0; i < count; i++) {
            $(".cont").append(`<div class='dot dot${i}'></div>`);
        }

        $(document).mousemove(function () {
            mX = event.clientX;
            mY = event.clientY;
            for (i = 0; i < count; i++) {
                $(".dot" + i).css({
                    left: mX + "px",
                    top: mY + "px",
                    transition: (count - i) * 0.05 + "s linear",
                });
            };
        });

        $(document).mouseenter(function (event) {

            $(".dot").css("display", "block")

        })

        $(document).mouseleave(function (event) {

            $(".dot").css("display", "none")

        })

    }






});
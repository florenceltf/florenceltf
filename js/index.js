$(document).ready(function () {

    $(document).on("scroll", function () {

        var pixels = $(document).scrollTop()
        var zoom = pixels + 14

        $("main").css("font-size", zoom)
        $("#cursor").css("height", zoom).css("width", zoom).css("border-radius", zoom)
    })

    $(document).mousemove(function (event) {

        $("#cursor").css("transform", "translate3d(" + (event.clientX - 25) + "px," + (event.clientY - 25) + "px,0px")

    })

});